// SurakshaSetu Core JavaScript
// Handles reporting, storage, and display of cyber incidents

// Storage keys
const STORAGE_KEY = 'surakshasetu_reports';
const PINCODE_KEY = 'user_pincode';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadStats();
    loadRecentAlerts();
    
    // Handle report form if on report page
    const reportForm = document.getElementById('incidentForm');
    if (reportForm) {
        reportForm.addEventListener('submit', handleReportSubmit);
    }
    
    // Handle mobile menu
    const menuBtn = document.getElementById('mobileMenuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('show');
        });
    }
    
    // Load incidents on tracker page
    if (window.location.pathname.includes('tracker.html')) {
        loadAllIncidents();
    }
    
    // Load resources
    if (window.location.pathname.includes('resources.html')) {
        loadResources();
    }
});

// Get user's pincode (prompt if not set)
function getUserPincode() {
    let pincode = localStorage.getItem(PINCODE_KEY);
    if (!pincode) {
        pincode = prompt('Enter your pincode to see local alerts:', '110001');
        if (pincode) {
            localStorage.setItem(PINCODE_KEY, pincode);
        }
    }
    return pincode;
}

// Get all reports
function getReports() {
    const reports = localStorage.getItem(STORAGE_KEY);
    return reports ? JSON.parse(reports) : [];
}

// Save report
function saveReport(report) {
    const reports = getReports();
    report.id = Date.now();
    report.timestamp = new Date().toISOString();
    reports.unshift(report); // Add to beginning
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
}

// Load statistics
function loadStats() {
    const reports = getReports();
    const totalReports = reports.length;
    
    // Reports today
    const today = new Date().toDateString();
    const todayReports = reports.filter(r => new Date(r.timestamp).toDateString() === today).length;
    
    // Active alerts (last 7 days, within same pincode or nearby)
    const userPincode = getUserPincode();
    const last7Days = new Date();
    last7Days.setDate(last7Days.getDate() - 7);
    const recentReports = reports.filter(r => 
        new Date(r.timestamp) > last7Days && 
        (r.pincode === userPincode || isNearbyPincode(r.pincode, userPincode))
    );
    
    // Update DOM
    const totalEl = document.getElementById('totalReports');
    const todayEl = document.getElementById('todayReports');
    const alertsEl = document.getElementById('activeAlerts');
    
    if (totalEl) totalEl.textContent = totalReports;
    if (todayEl) todayEl.textContent = todayReports;
    if (alertsEl) alertsEl.textContent = recentReports.length;
}

// Simple nearby pincode check (same first 3 digits = nearby area)
function isNearbyPincode(pincode1, pincode2) {
    if (!pincode1 || !pincode2) return false;
    return pincode1.substring(0, 3) === pincode2.substring(0, 3);
}

// Load recent alerts
function loadRecentAlerts() {
    const container = document.getElementById('recentAlertsList');
    if (!container) return;
    
    const reports = getReports();
    const userPincode = getUserPincode();
    
    // Filter to last 14 days and relevant area
    const last14Days = new Date();
    last14Days.setDate(last14Days.getDate() - 14);
    
    const relevantReports = reports
        .filter(r => new Date(r.timestamp) > last14Days)
        .filter(r => !userPincode || r.pincode === userPincode || isNearbyPincode(r.pincode, userPincode))
        .slice(0, 10);
    
    if (relevantReports.length === 0) {
        container.innerHTML = '<p class="no-alerts">✅ No recent alerts in your area. Stay safe!</p>';
        return;
    }
    
    container.innerHTML = relevantReports.map(report => `
        <div class="alert-item">
            <div>
                <span class="alert-type ${getAlertClass(report.type)}">${getAlertLabel(report.type)}</span>
                <div class="alert-description">${report.description.substring(0, 100)}${report.description.length > 100 ? '...' : ''}</div>
            </div>
            <div class="alert-meta">
                <span class="alert-location">📍 ${report.pincode || 'Unknown'}</span>
                <span class="alert-time">🕐 ${formatTimeAgo(report.timestamp)}</span>
            </div>
        </div>
    `).join('');
}

function getAlertClass(type) {
    const classes = {
        'scam-call': 'scam-call',
        'phishing': 'phishing',
        'upi-fraud': 'upi-fraud',
        'sim-swap': 'sim-swap',
        'other': 'scam-call'
    };
    return classes[type] || 'scam-call';
}

function getAlertLabel(type) {
    const labels = {
        'scam-call': '📞 Scam Call',
        'phishing': '🔗 Phishing Link',
        'upi-fraud': '💳 UPI Fraud',
        'sim-swap': '📱 SIM Swap Attempt',
        'other': '⚠️ Other Scam'
    };
    return labels[type] || '⚠️ Alert';
}

function formatTimeAgo(timestamp) {
    const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
    
    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? 's' : ''} ago`;
}

// Handle report submission
function handleReportSubmit(e) {
    e.preventDefault();
    
    const report = {
        type: document.getElementById('incidentType').value,
        description: document.getElementById('description').value,
        phoneNumber: document.getElementById('phoneNumber')?.value || '',
        link: document.getElementById('link')?.value || '',
        pincode: document.getElementById('pincode').value,
        anonymous: document.getElementById('anonymous')?.checked || true
    };
    
    if (!report.type || !report.description || !report.pincode) {
        alert('Please fill all required fields');
        return;
    }
    
    saveReport(report);
    alert('✅ Report submitted successfully! You may have saved someone from this scam.');
    
    // Reset form
    e.target.reset();
    
    // Redirect to tracker
    setTimeout(() => {
        window.location.href = 'tracker.html';
    }, 1500);
}

// Load all incidents for tracker page
function loadAllIncidents() {
    const container = document.getElementById('allIncidentsList');
    if (!container) return;
    
    const reports = getReports();
    
    if (reports.length === 0) {
        container.innerHTML = '<p>No incidents reported yet. Be the first to report!</p>';
        return;
    }
    
    container.innerHTML = reports.map(report => `
        <div class="alert-item">
            <div>
                <span class="alert-type ${getAlertClass(report.type)}">${getAlertLabel(report.type)}</span>
                ${report.phoneNumber ? `<div class="alert-detail">📞 Number: ${maskNumber(report.phoneNumber)}</div>` : ''}
                ${report.link ? `<div class="alert-detail">🔗 Link: ${report.link.substring(0, 50)}...</div>` : ''}
                <div class="alert-description">${escapeHtml(report.description)}</div>
            </div>
            <div class="alert-meta">
                <span class="alert-location">📍 ${report.pincode || 'Unknown'}</span>
                <span class="alert-time">🕐 ${new Date(report.timestamp).toLocaleString()}</span>
            </div>
        </div>
    `).join('');
}

function maskNumber(number) {
    if (!number) return '';
    if (number.length <= 6) return number;
    return number.slice(0, 3) + '****' + number.slice(-3);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Resources data
function loadResources() {
    const container = document.getElementById('helplinesList');
    if (!container) return;
    
    const helplines = [
        { name: 'National Cyber Crime Helpline', number: '1930', timing: '24x7' },
        { name: 'Police Emergency', number: '112', timing: '24x7' },
        { name: 'Child Helpline', number: '1098', timing: '24x7' },
        { name: 'Women Helpline', number: '181', timing: '24x7' },
        { name: 'CERT-In Incident Reporting', number: 'https://certin.org', type: 'website' },
        { name: 'National Payments Corporation (NPCI)', number: '1800-123-8040', timing: '9 AM - 6 PM' }
    ];
    
    container.innerHTML = helplines.map(h => `
        <div class="helpline-item">
            <strong>${h.name}</strong>
            <div class="helpline-number">${h.number}</div>
            ${h.timing ? `<div class="helpline-timing">⏰ ${h.timing}</div>` : ''}
        </div>
    `).join('');
}
