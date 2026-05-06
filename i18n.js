// i18n.js - Language translations for SurakshaSetu

const translations = {
    en: {
        // Navigation
        navHome: "Home",
        navReport: "Report",
        navTracker: "Tracker",
        navAwareness: "Awareness",
        navResources: "Resources",
        
        // Hero Section
        heroTitle: "Stop Cyber Crime Before It's Too Late",
        heroSubtitle: "Report suspicious calls, messages, or scams instantly. Join thousands of Indians protecting their community.",
        reportBtn: "🚨 Report an Incident",
        trackerBtn: "📊 View Local Incidents",
        
        // Stats
        totalReports: "Total Reports",
        todayReports: "Reports Today",
        activeAlerts: "Active Alerts in Your Area",
        
        // How It Works
        howItWorks: "How सुरक्षा Square Works",
        step1Title: "Report",
        step1Desc: "Share scam calls, fake messages, or suspicious links anonymously",
        step2Title: "Verify",
        step2Desc: "Our community + AI flags patterns across your locality",
        step3Title: "Alert",
        step3Desc: "Neighbors get real-time warnings of active scams in their pincode",
        
        // Recent Alerts
        recentAlerts: "Recent Alerts in Your Area",
        loading: "Loading incidents near you...",
        noAlerts: "✅ No recent alerts in your area. Stay safe!",
        
        // Emergency
        emergencyTitle: "🚨 Immediate Help",
        emergencyText: "If you're losing money or personal information right now:",
        helpline1: "Cyber Crime Helpline",
        helpline2: "Police Emergency",
        
        // Report Form
        reportIncident: "Report a Cyber Incident",
        reportDesc: "Your report helps warn others in your area. You can report anonymously.",
        incidentType: "Type of Incident *",
        selectType: "Select type...",
        scamCall: "📞 Scam Call",
        phishing: "🔗 Phishing Link / SMS",
        upiFraud: "💳 UPI / Payment Fraud",
        simSwap: "📱 SIM Swap Attempt",
        other: "⚠️ Other Scam",
        description: "Description *",
        descriptionPlaceholder: "Describe what happened — include script, demands, lies they told...",
        phoneNumber: "Scammer Phone Number (if known)",
        link: "Suspicious Link (if any)",
        pincode: "Your Pincode *",
        pincodePlaceholder: "e.g., 110001",
        anonymous: "Report anonymously (no name/email stored)",
        submitBtn: "🚨 Submit Report",
        lostMoneyNote: "⚠️ If you have lost money: Call 1930 (Cyber Crime Helpline) immediately.",
        
        // Tracker Page
        liveMap: "📍 Live Scam Incident Map",
        mapSubtitle: "Search any city, town, village, or pincode in India to see scam reports near you.",
        searchPlaceholder: "Search any place in India... Examples: Phagwara, Noida, Indira Nagar Bangalore, 144401",
        searchBtn: "🔍 Search & Zoom",
        myLocation: "📍 My Location",
        allIncidents: "All Incidents",
        filterByPincode: "Filter by pincode",
        applyFilter: "Apply Filter",
        resetView: "Reset View",
        
        // Awareness Page
        awarenessTitle: "📖 Cyber Safety Awareness",
        scamCallGuide: "🔴 How to Identify a Scam Call",
        scamCallRedFlags: "Red flags:",
        scamCallPoints: [
            "Caller claims to be from CBI, Police, RBI, or Telecom Department",
            "They say your number will be disconnected / arrest warrant issued",
            "They demand money or OTP to 'resolve' the issue",
            "They ask you to stay on call until transaction is complete",
            "Caller ID shows international number (+92, +1, etc.)"
        ],
        scamCallAction: "What to do: Hang up immediately. Call 1930 to report.",
        
        phishingGuide: "🔗 How to Spot a Phishing Link",
        phishingPoints: [
            "Hover over the link (on desktop) — does it match the text?",
            "Look for misspellings: amaz0n.com, sbiclogin.com",
            "Check if domain was recently registered",
            "Never enter passwords or OTP after clicking an SMS link",
            "Legitimate banks never ask for OTP via link"
        ],
        
        simSwapGuide: "📱 SIM Swap / Porting Protection",
        simSwapPoints: [
            "Call your mobile provider and ask for 'SIM porting lock' (free)",
            "Never share your last 6 digits of Aadhaar with unknown callers",
            "If mobile network suddenly stops — call bank immediately",
            "Use UPI apps with additional PIN/pattern lock",
            "Register for SMS/email alerts for all bank transactions"
        ],
        
        upiGuide: "💳 UPI & Payment Fraud Prevention",
        upiPoints: [
            "Never share your UPI PIN — with anyone",
            "QR codes sent via WhatsApp asking for payment are fake",
            "Check transaction amount before entering PIN",
            "Enable UPI app lock",
            "Use dummy bank account for online shopping"
        ],
        
        quizTitle: "🎓 Quick Quiz: Test Your Cyber Safety",
        quizQ1: "A call says 'Your SBI account will be blocked. Share OTP to verify.' What do you do?",
        quizWrong: "❌ Wrong! Never share OTP with anyone.",
        quizCorrect: "✅ Correct! Banks never ask for OTP. Hang up and call 1930.",
        quizQ2: "You receive a job offer on WhatsApp: 'Pay ₹2000 for kit, earn ₹50,000/month.'",
        quizScam: "✅ Correct! Legitimate jobs never ask for payment upfront.",
        
        // Resources Page
        resourcesTitle: "📞 Emergency Resources",
        emergencyHelplines: "🚨 Emergency Helplines",
        reportToAuthorities: "📱 Report to Authorities",
        usefulApps: "📲 Useful Apps",
        remember: "⚠️ Remember",
        rememberText: "No government agency will ever ask for OTP, password, or payment over phone. If someone does — it's a scam.",
        
        // Footer
        footerText: "🇮🇳 सुरक्षा Square — Securing India, One Report at a Time",
        disclaimer: "This is a community platform. Always report serious crimes to local police."
    },
    
    hi: {
        // Navigation
        navHome: "होम",
        navReport: "रिपोर्ट करें",
        navTracker: "ट्रैकर",
        navAwareness: "जागरूकता",
        navResources: "संसाधन",
        
        // Hero Section
        heroTitle: "साइबर अपराध को समय रहते रोकें",
        heroSubtitle: "संदिग्ध कॉल, संदेश या स्कैम की तुरंत रिपोर्ट करें। हजारों भारतीयों के साथ जुड़ें।",
        reportBtn: "🚨 घटना की रिपोर्ट करें",
        trackerBtn: "📊 स्थानीय घटनाएं देखें",
        
        // Stats
        totalReports: "कुल रिपोर्ट",
        todayReports: "आज की रिपोर्ट",
        activeAlerts: "आपके क्षेत्र में सक्रिय अलर्ट",
        
        // How It Works
        howItWorks: "कैसे काम करता है सुरक्षा Square",
        step1Title: "रिपोर्ट करें",
        step1Desc: "स्कैम कॉल, फर्जी संदेश या संदिग्ध लिंक साझा करें",
        step2Title: "जांच करें",
        step2Desc: "हमारा समुदाय + AI आपके क्षेत्र में पैटर्न को चिह्नित करता है",
        step3Title: "सचेत करें",
        step3Desc: "पड़ोसियों को उनके पिनकोड में सक्रिय स्कैम की वास्तविक समय में चेतावनी मिलती है",
        
        // Recent Alerts
        recentAlerts: "आपके क्षेत्र में हालिया अलर्ट",
        loading: "आपके पास की घटनाएं लोड हो रही हैं...",
        noAlerts: "✅ आपके क्षेत्र में कोई हालिया अलर्ट नहीं। सुरक्षित रहें!",
        
        // Emergency
        emergencyTitle: "🚨 तत्काल सहायता",
        emergencyText: "यदि अभी आपसे पैसे या जानकारी मांगी जा रही है:",
        helpline1: "साइबर अपराध हेल्पलाइन",
        helpline2: "पुलिस आपातकालीन",
        
        // Report Form
        reportIncident: "साइबर घटना की रिपोर्ट करें",
        reportDesc: "आपकी रिपोर्ट दूसरों को सचेत करने में मदद करती है। आप गुमनाम रूप से रिपोर्ट कर सकते हैं।",
        incidentType: "घटना का प्रकार *",
        selectType: "प्रकार चुनें...",
        scamCall: "📞 स्कैम कॉल",
        phishing: "🔗 फ़िशिंग लिंक / एसएमएस",
        upiFraud: "💳 यूपीआई / भुगतान धोखाधड़ी",
        simSwap: "📱 सिम स्वैप प्रयास",
        other: "⚠️ अन्य स्कैम",
        description: "विवरण *",
        descriptionPlaceholder: "क्या हुआ लिखें — बातचीत, झूठ, धमकियाँ...",
        phoneNumber: "स्कैमर का फोन नंबर (यदि पता हो)",
        link: "संदिग्ध लिंक (यदि कोई हो)",
        pincode: "आपका पिनकोड *",
        pincodePlaceholder: "उदा: 110001",
        anonymous: "गुमनाम रिपोर्ट करें (कोई नाम/ईमेल संग्रहीत नहीं)",
        submitBtn: "🚨 रिपोर्ट सबमिट करें",
        lostMoneyNote: "⚠️ यदि आपने पैसे खो दिए हैं: तुरंत 1930 (साइबर अपराध हेल्पलाइन) पर कॉल करें।",
        
        // Tracker Page
        liveMap: "📍 लाइव स्कैम घटना मानचित्र",
        mapSubtitle: "भारत में किसी भी शहर, कस्बे, गाँव या पिनकोड को खोजें और पास की स्कैम रिपोर्ट देखें।",
        searchPlaceholder: "भारत में कोई भी स्थान खोजें... उदाहरण: फगवाड़ा, नोएडा, 144401",
        searchBtn: "🔍 खोजें और ज़ूम करें",
        myLocation: "📍 मेरी स्थिति",
        allIncidents: "सभी घटनाएं",
        filterByPincode: "पिनकोड से फ़िल्टर करें",
        applyFilter: "फ़िल्टर लगाएं",
        resetView: "दृश्य रीसेट करें",
        
        // Awareness Page
        awarenessTitle: "📖 साइबर सुरक्षा जागरूकता",
        scamCallGuide: "🔴 स्कैम कॉल की पहचान कैसे करें",
        scamCallRedFlags: "सावधानी के संकेत:",
        scamCallPoints: [
            "कॉल करने वाला CBI, पुलिस, RBI या टेलीकॉम विभाग से होने का दावा करता है",
            "वे कहते हैं कि आपका नंबर बंद हो जाएगा / गिरफ्तारी वारंट जारी होगा",
            "वे समस्या 'हल' करने के लिए पैसे या OTP मांगते हैं",
            "वे आपको लेनदेन पूरा होने तक फोन पर रहने के लिए कहते हैं",
            "कॉलर ID अंतर्राष्ट्रीय नंबर दिखाता है"
        ],
        scamCallAction: "क्या करें: तुरंत फोन काटें। रिपोर्ट करने के लिए 1930 पर कॉल करें।",
        
        phishingGuide: "🔗 फ़िशिंग लिंक की पहचान कैसे करें",
        phishingPoints: [
            "लिंक पर होवर करें (डेस्कटॉप पर) — क्या यह टेक्स्ट से मेल खाता है?",
            "वर्तनी की गलतियाँ देखें: amaz0n.com, sbiclogin.com",
            "जांचें कि डोमेन हाल ही में पंजीकृत हुआ है या नहीं",
            "एसएमएस लिंक पर क्लिक करने के बाद पासवर्ड या OTP कभी न डालें",
            "वैध बैंक कभी भी लिंक के माध्यम से OTP नहीं मांगते"
        ],
        
        simSwapGuide: "📱 सिम स्वैप / पोर्टिंग सुरक्षा",
        simSwapPoints: [
            "अपने मोबाइल प्रदाता को कॉल करें और 'सिम पोर्टिंग लॉक' के लिए कहें (मुफ्त)",
            "अज्ञात कॉल करने वालों के साथ आधार के अंतिम 6 अंक कभी साझा न करें",
            "यदि मोबाइल नेटवर्क अचानक बंद हो जाए — तुरंत बैंक को कॉल करें",
            "यूपीआई ऐप्स में अतिरिक्त पिन/पैटर्न लॉक का उपयोग करें",
            "सभी बैंक लेनदेन के लिए एसएमएस/ईमेल अलर्ट पंजीकृत करें"
        ],
        
        upiGuide: "💳 यूपीआई और भुगतान धोखाधड़ी से बचाव",
        upiPoints: [
            "अपना यूपीआई पिन कभी भी किसी के साथ साझा न करें",
            "WhatsApp पर भेजे गए भुगतान वाले QR कोड हमेशा नकली होते हैं",
            "पिन डालने से पहले लेनदेन राशि जांचें",
            "यूपीआई ऐप लॉक सक्षम करें",
            "ऑनलाइन खरीदारी के लिए डमी बैंक खाते का उपयोग करें"
        ],
        
        quizTitle: "🎓 त्वरित प्रश्नोत्तरी: अपनी साइबर सुरक्षा जांचें",
        quizQ1: "एक कॉल आती है 'आपका SBI खाता बंद हो जाएगा। सत्यापन के लिए OTP साझा करें।' आप क्या करेंगे?",
        quizWrong: "❌ गलत! कभी भी OTP साझा न करें।",
        quizCorrect: "✅ सही! बैंक कभी OTP नहीं मांगते। फोन काटें और 1930 पर कॉल करें।",
        quizQ2: "WhatsApp पर नौकरी का ऑफर: '₹2000 किट के लिए दें, ₹50,000/महीना कमाएं।'",
        quizScam: "✅ सही! वैध नौकरियां कभी भी अग्रिम भुगतान नहीं मांगतीं।",
        
        // Resources Page
        resourcesTitle: "📞 आपातकालीन संसाधन",
        emergencyHelplines: "🚨 आपातकालीन हेल्पलाइन",
        reportToAuthorities: "📱 अधिकारियों को रिपोर्ट करें",
        usefulApps: "📲 उपयोगी ऐप्स",
        remember: "⚠️ याद रखें",
        rememberText: "कोई भी सरकारी एजेंसी कभी भी फोन पर OTP, पासवर्ड या भुगतान नहीं मांगती। यदि कोई मांगता है — यह स्कैम है।",
        
        // Footer
        footerText: "🇮🇳 सुरक्षा Square — एक रिपोर्ट के साथ भारत को सुरक्षित बनाना",
        disclaimer: "यह एक सामुदायिक मंच है। गंभीर अपराधों की हमेशा स्थानीय पुलिस को रिपोर्ट करें।"
    }
};

// Current language
let currentLang = localStorage.getItem('surakshasetu_lang') || 'en';

// Function to update all text on page
function updateLanguage() {
    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            if (element.tagName === 'INPUT' && element.placeholder) {
                element.placeholder = translations[currentLang][key];
            } else if (element.tagName === 'BUTTON' && element.innerText !== 'EN' && element.innerText !== 'हिंदी') {
                element.innerText = translations[currentLang][key];
            } else {
                element.innerText = translations[currentLang][key];
            }
        }
    });
    
    // Update placeholder attributes
    document.querySelectorAll('[data-placeholder-key]').forEach(element => {
        const key = element.getAttribute('data-placeholder-key');
        if (translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });
    
    // Update scam awareness lists (dynamic content)
    updateAwarenessLists();
    
    // Update direction for Hindi (optional)
    if (currentLang === 'hi') {
        document.body.style.fontFamily = "'Inter', 'Noto Sans Devanagari', sans-serif";
    } else {
        document.body.style.fontFamily = "'Inter', sans-serif";
    }
    
    // Store language preference
    localStorage.setItem('surakshasetu_lang', currentLang);
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Refresh dynamic content (stats, alerts, etc.)
    if (typeof loadStats === 'function') loadStats();
    if (typeof loadRecentAlerts === 'function') loadRecentAlerts();
    if (typeof loadAllIncidents === 'function') loadAllIncidents();
}

// Update awareness page lists (for dynamic content)
function updateAwarenessLists() {
    // Update scam call points
    const scamCallList = document.getElementById('scamCallPoints');
    if (scamCallList && translations[currentLang].scamCallPoints) {
        scamCallList.innerHTML = translations[currentLang].scamCallPoints.map(point => `<li>${point}</li>`).join('');
    }
    
    // Update phishing points
    const phishingList = document.getElementById('phishingPoints');
    if (phishingList && translations[currentLang].phishingPoints) {
        phishingList.innerHTML = translations[currentLang].phishingPoints.map(point => `<li>${point}</li>`).join('');
    }
    
    // Update SIM swap points
    const simSwapList = document.getElementById('simSwapPoints');
    if (simSwapList && translations[currentLang].simSwapPoints) {
        simSwapList.innerHTML = translations[currentLang].simSwapPoints.map(point => `<li>${point}</li>`).join('');
    }
    
    // Update UPI points
    const upiList = document.getElementById('upiPoints');
    if (upiList && translations[currentLang].upiPoints) {
        upiList.innerHTML = translations[currentLang].upiPoints.map(point => `<li>${point}</li>`).join('');
    }
    
    // Update quiz questions
    const quizQ1 = document.getElementById('quizQ1');
    if (quizQ1 && translations[currentLang].quizQ1) {
        quizQ1.innerHTML = translations[currentLang].quizQ1;
    }
}

// Switch language
function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        updateLanguage();
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // Apply current language
    updateLanguage();
});
