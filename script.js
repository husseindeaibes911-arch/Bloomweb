/* ===== BLOOMWEB SHARED JAVASCRIPT ===== */

// ===== TRANSLATIONS =====
const translations = {
    en: {
        // Nav
        navHome: 'Home', navServices: 'Services', navExamples: 'Examples',
        navPricing: 'Pricing', navReviews: 'Reviews', navFaq: 'FAQ',
        navContact: 'Contact', navBookCall: 'Book a Call',
        // Hero
        heroBadge: 'Now accepting new clients across Canada',
        heroTitle1: 'Websites That Help Your Business ',
        heroTitleHighlight: 'Bloom',
        heroDesc: 'We design, build, and maintain stunning websites for small businesses across Canada \u2014 so you can focus on what you do best. No tech headaches, just results.',
        heroBtn1: 'View Plans', heroBtn2: 'Book Free Consultation',
        // Industry bar
        industryTitle: 'Websites built for every industry',
        indBarber: 'Barbershops', indRestaurant: 'Restaurants', indGym: 'Gyms',
        indRealty: 'Real Estate', indDental: 'Dental', indSalon: 'Salons', indTrades: 'Trades',
        // Stats
        stat1: 'Mobile Responsive', stat2: 'Website Uptime', stat3: 'Flexible Plans', stat4: 'Built-In Optimization',
        // Services
        svcLabel: 'What We Do', svcTitle: 'Everything Your Business Needs Online',
        svcSubtitle: 'From design to SEO to ongoing support \u2014 we handle your entire web presence so you don\'t have to.',
        svc1Title: 'Custom Web Design', svc1Desc: 'Unique, eye-catching designs tailored to your brand. No cookie-cutter templates \u2014 your site will stand out.',
        svc2Title: 'Mobile-First Development', svc2Desc: 'Every site looks and works perfectly on phones, tablets, and desktops. Over 60% of web traffic is mobile.',
        svc3Title: 'SEO Optimization', svc3Desc: 'Get found on Google. We build SEO best practices into every site, with advanced optimization on premium plans.',
        svc4Title: 'Online Booking', svc4Desc: 'Let your customers book appointments directly from your website. Seamless scheduling that saves you time.',
        svc5Title: 'Ongoing Maintenance', svc5Desc: 'Your website stays fresh and up to date. We handle updates, edits, and maintenance.',
        svc6Title: 'Dedicated Support', svc6Desc: 'Our support team is here for you with response times from same-day to 1-2 business days.',
        // Process
        procLabel: 'How It Works', procTitle: 'Your Website in 4 Simple Steps',
        procSubtitle: 'No confusing jargon, no drawn-out process. We make getting online effortless.',
        proc1Title: 'Book a Consultation', proc1Desc: 'Tell us about your business and what you need. We\'ll find the perfect plan for you.',
        proc2Title: 'We Design & Build', proc2Desc: 'Our team creates a custom website tailored to your brand, goals, and audience.',
        proc3Title: 'Review & Launch', proc3Desc: 'You review the site, request any changes, and we launch it live.',
        proc4Title: 'Ongoing Support', proc4Desc: 'We keep your site maintained, updated, and performing \u2014 month after month.',
        // Showcase
        showLabel: 'Examples', showTitle: 'Websites We Can Build For You',
        showSubtitle: 'Every business is unique. Here\'s a taste of the industries we serve.',
        // Pricing
        priceLabel: 'Pricing', priceTitle: 'Simple, Transparent Pricing',
        priceSubtitle: 'Choose the plan that fits your business. No hidden fees, no surprises.',
        starterTitle: 'Starter Plan', starterDesc: 'Best for Small Businesses',
        growthTitle: 'Growth Plan', growthDesc: 'For Businesses Ready to Scale',
        premiumTitle: 'Premium Plan', premiumDesc: 'Best for Scaling Businesses',
        setupFee: 'Setup Fee:', perMonth: 'per month', mostPopular: 'Most Popular',
        getStarted: 'Get Started',
        // Features
        f1_3pages: '1-3 pages', fUpTo5: 'Up to 5 pages', fUpTo10: 'Up to 10 pages',
        fMobile: 'Mobile-friendly design', fBasicSEO: 'Basic SEO setup',
        fBooking: 'Online booking integration', fBasicDesign: 'Basic design template',
        fStandardSupport: 'Standard support (1-2 days)', fCustomDesign: 'Custom design',
        f3Edits: '3 edits per month included', fFasterSupport: 'Faster support (1 day)',
        fFasterTurn: 'Faster turnaround', fAdvSEO: 'Advanced SEO',
        fPremiumDesign: 'Premium custom design', fBasicAdvSEO: 'Basic + Advanced SEO',
        fPriorityEdits: 'Priority ongoing edits', fSameDaySupport: 'Same-day support',
        fFastestTurn: 'Fastest turnaround', fEverything: 'Everything in Growth +',
        // Testimonials
        testLabel: 'Testimonials', testTitle: 'What Our Clients Say',
        testSubtitle: 'Don\'t just take our word for it \u2014 hear from businesses we\'ve helped grow.',
        test1: 'BloomWeb completely transformed our online presence. We went from having no website to getting bookings every single day. The process was incredibly smooth.',
        test1Name: 'Marco R.', test1Role: 'Owner, Elite Barber Studio',
        test2: 'Professional, fast, and they actually listen to what you want. Our restaurant site looks amazing and our reservations have doubled since launch.',
        test2Name: 'Sophie L.', test2Role: 'Manager, Maple Leaf Bistro',
        test3: 'Best investment we made for our gym. The website pays for itself every month with new member sign-ups. Support is always quick.',
        test3Name: 'James T.', test3Role: 'Owner, Peak Fitness',
        // FAQ
        faqLabel: 'FAQ', faqTitle: 'Frequently Asked Questions',
        faq1Q: 'How long does it take to build my website?',
        faq1A: 'Depending on the plan, most websites are completed within 5-14 business days. We\'ll give you a clear timeline during your consultation.',
        faq2Q: 'Do I own my website?',
        faq2A: 'You are granted a full license to use your website while your subscription is active. If you\'d like to discuss full ownership transfer, we\'re happy to work something out.',
        faq3Q: 'What if I need changes after my site is live?',
        faq3A: 'Growth and Premium plans include monthly edits. For Starter plan customers, edits are available at a per-request rate.',
        faq4Q: 'Can I cancel anytime?',
        faq4A: 'There\'s a 12-month minimum commitment. If you cancel before 12 months, a $100 early cancellation fee applies. After 12 months, you can cancel anytime.',
        faq5Q: 'What\'s included in the monthly price?',
        faq5A: 'Your monthly fee covers website hosting, maintenance, security, and support. Depending on your plan, it may also include monthly edits, advanced SEO, and priority support.',
        faq6Q: 'Do you help with domain and email setup?',
        faq6A: 'Yes! We can help you get your domain pointed to your new website and advise on professional email setup.',
        faq7Q: 'What industries do you work with?',
        faq7A: 'We work with all kinds of small businesses \u2014 barbershops, restaurants, gyms, dental clinics, salons, real estate agents, trades, and more.',
        // Contact
        contactLabel: 'Get Started', contactTitle: 'Book Your Free Consultation',
        contactSubtitle: 'Tell us about your business and we\'ll show you exactly how we can help.',
        contactInfoTitle: 'Let\'s Build Something Great',
        contactInfoDesc: 'Whether you\'re launching a new business or upgrading your current web presence, we\'re here to help.',
        contactFormTitle: 'Request a Free Consultation',
        labelName: 'Full Name', labelEmail: 'Email', labelPhone: 'Phone Number',
        labelBusiness: 'Business Name', labelPlan: 'Interested In', labelMessage: 'Tell us about your business',
        planSelect: 'Select a plan...', planNotSure: 'Not sure yet \u2014 help me decide',
        sendRequest: 'Send Request',
        basedIn: 'Based in Quebec, serving businesses across Canada',
        hours: 'Mon - Fri, 9 AM - 6 PM EST',
        // CTA
        ctaTitle1: 'Ready to Take Your Business ', ctaTitleHighlight: 'Online?',
        ctaDesc: 'Join the businesses already growing with BloomWeb. Let\'s build something amazing together.',
        ctaBtn1: 'Get Started Now', ctaBtn2: 'Book Free Call',
        // Footer
        footerDesc: 'We build stunning, affordable websites for small businesses across Canada. Based in Quebec, serving nationwide.',
        footerQuick: 'Quick Links', footerServices: 'Services', footerContact: 'Contact',
        footerWebDesign: 'Web Design', footerSEO: 'SEO', footerBooking: 'Online Booking',
        footerMaint: 'Maintenance', footerFAQ: 'FAQ',
        footerRights: '\u00a9 2026 BloomWeb. All rights reserved.',
        footerLocation: 'Based in Quebec, Canada',
        // Legal
        termsTitle: 'Terms of Service', privacyTitle: 'Privacy Policy',
        termsLink: 'Terms of Service', privacyLink: 'Privacy Policy',
    },
    fr: {
        navHome: 'Accueil', navServices: 'Services', navExamples: 'Exemples',
        navPricing: 'Tarifs', navReviews: 'Avis', navFaq: 'FAQ',
        navContact: 'Contact', navBookCall: 'R\u00e9server un appel',
        heroBadge: 'Nous acceptons de nouveaux clients partout au Canada',
        heroTitle1: 'Des sites web qui aident votre entreprise \u00e0 ',
        heroTitleHighlight: 'S\u2019\u00e9panouir',
        heroDesc: 'Nous concevons, construisons et maintenons des sites web magnifiques pour les petites entreprises \u00e0 travers le Canada \u2014 pour que vous puissiez vous concentrer sur ce que vous faites le mieux.',
        heroBtn1: 'Voir les plans', heroBtn2: 'Consultation gratuite',
        industryTitle: 'Sites web pour chaque industrie',
        indBarber: 'Barbiers', indRestaurant: 'Restaurants', indGym: 'Gyms',
        indRealty: 'Immobilier', indDental: 'Dentaire', indSalon: 'Salons', indTrades: 'M\u00e9tiers',
        stat1: 'Adapt\u00e9 mobile', stat2: 'Disponibilit\u00e9 24/7', stat3: 'Plans flexibles', stat4: 'SEO int\u00e9gr\u00e9',
        svcLabel: 'Nos services', svcTitle: 'Tout ce dont votre entreprise a besoin en ligne',
        svcSubtitle: 'Du design au SEO en passant par le support continu \u2014 nous g\u00e9rons votre pr\u00e9sence web compl\u00e8te.',
        svc1Title: 'Design web personnalis\u00e9', svc1Desc: 'Des designs uniques adapt\u00e9s \u00e0 votre marque. Pas de mod\u00e8les g\u00e9n\u00e9riques.',
        svc2Title: 'D\u00e9veloppement mobile-first', svc2Desc: 'Chaque site fonctionne parfaitement sur t\u00e9l\u00e9phones, tablettes et ordinateurs.',
        svc3Title: 'Optimisation SEO', svc3Desc: 'Soyez trouv\u00e9 sur Google. Nous int\u00e9grons les meilleures pratiques SEO dans chaque site.',
        svc4Title: 'R\u00e9servation en ligne', svc4Desc: 'Permettez \u00e0 vos clients de prendre rendez-vous directement depuis votre site web.',
        svc5Title: 'Maintenance continue', svc5Desc: 'Votre site reste \u00e0 jour. Nous g\u00e9rons les mises \u00e0 jour et la maintenance.',
        svc6Title: 'Support d\u00e9di\u00e9', svc6Desc: 'Notre \u00e9quipe est l\u00e0 pour vous avec des temps de r\u00e9ponse de m\u00eame jour \u00e0 1-2 jours.',
        procLabel: 'Comment \u00e7a marche', procTitle: 'Votre site en 4 \u00e9tapes simples',
        procSubtitle: 'Pas de jargon, pas de processus compliqu\u00e9. Nous rendons la mise en ligne facile.',
        proc1Title: 'R\u00e9server une consultation', proc1Desc: 'Parlez-nous de votre entreprise et de vos besoins.',
        proc2Title: 'Nous concevons et construisons', proc2Desc: 'Notre \u00e9quipe cr\u00e9e un site personnalis\u00e9 pour votre marque.',
        proc3Title: 'R\u00e9vision et lancement', proc3Desc: 'Vous r\u00e9visez le site, demandez des modifications, et nous le lan\u00e7ons.',
        proc4Title: 'Support continu', proc4Desc: 'Nous gardons votre site maintenu et performant \u2014 mois apr\u00e8s mois.',
        showLabel: 'Exemples', showTitle: 'Sites web que nous pouvons cr\u00e9er pour vous',
        showSubtitle: 'Chaque entreprise est unique. Voici un aper\u00e7u des industries que nous servons.',
        priceLabel: 'Tarifs', priceTitle: 'Tarification simple et transparente',
        priceSubtitle: 'Choisissez le plan qui convient \u00e0 votre entreprise. Aucun frais cach\u00e9.',
        starterTitle: 'Plan D\u00e9marrage', starterDesc: 'Id\u00e9al pour les petites entreprises',
        growthTitle: 'Plan Croissance', growthDesc: 'Pour les entreprises pr\u00eates \u00e0 grandir',
        premiumTitle: 'Plan Premium', premiumDesc: 'Id\u00e9al pour les entreprises en expansion',
        setupFee: 'Frais d\u2019installation :', perMonth: 'par mois', mostPopular: 'Le plus populaire',
        getStarted: 'Commencer',
        f1_3pages: '1-3 pages', fUpTo5: 'Jusqu\u2019\u00e0 5 pages', fUpTo10: 'Jusqu\u2019\u00e0 10 pages',
        fMobile: 'Design adapt\u00e9 mobile', fBasicSEO: 'Configuration SEO de base',
        fBooking: 'Int\u00e9gration de r\u00e9servation', fBasicDesign: 'Mod\u00e8le de design de base',
        fStandardSupport: 'Support standard (1-2 jours)', fCustomDesign: 'Design personnalis\u00e9',
        f3Edits: '3 modifications/mois incluses', fFasterSupport: 'Support rapide (1 jour)',
        fFasterTurn: 'D\u00e9lai plus rapide', fAdvSEO: 'SEO avanc\u00e9',
        fPremiumDesign: 'Design personnalis\u00e9 premium', fBasicAdvSEO: 'SEO de base + avanc\u00e9',
        fPriorityEdits: 'Modifications prioritaires', fSameDaySupport: 'Support le m\u00eame jour',
        fFastestTurn: 'D\u00e9lai le plus rapide', fEverything: 'Tout dans Croissance +',
        testLabel: 'T\u00e9moignages', testTitle: 'Ce que disent nos clients',
        testSubtitle: 'Ne nous croyez pas sur parole \u2014 \u00e9coutez les entreprises que nous avons aid\u00e9es.',
        test1: 'BloomWeb a compl\u00e8tement transform\u00e9 notre pr\u00e9sence en ligne. Nous recevons des r\u00e9servations chaque jour. Le processus \u00e9tait incroyablement simple.',
        test1Name: 'Marco R.', test1Role: 'Propri\u00e9taire, Elite Barber Studio',
        test2: 'Professionnel, rapide, et ils \u00e9coutent vraiment ce que vous voulez. Notre site de restaurant est magnifique et nos r\u00e9servations ont doubl\u00e9.',
        test2Name: 'Sophie L.', test2Role: 'G\u00e9rante, Maple Leaf Bistro',
        test3: 'Le meilleur investissement pour notre gym. Le site se rentabilise chaque mois avec de nouvelles inscriptions. Le support est toujours rapide.',
        test3Name: 'James T.', test3Role: 'Propri\u00e9taire, Peak Fitness',
        faqLabel: 'FAQ', faqTitle: 'Questions fr\u00e9quemment pos\u00e9es',
        faq1Q: 'Combien de temps faut-il pour cr\u00e9er mon site ?',
        faq1A: 'Selon le plan, la plupart des sites sont termin\u00e9s en 5-14 jours ouvrables. Nous vous donnerons un d\u00e9lai clair lors de votre consultation.',
        faq2Q: 'Est-ce que je suis propri\u00e9taire de mon site ?',
        faq2A: 'Vous b\u00e9n\u00e9ficiez d\u2019une licence compl\u00e8te pour utiliser votre site pendant votre abonnement actif. Si vous souhaitez discuter d\u2019un transfert de propri\u00e9t\u00e9, nous sommes ouverts.',
        faq3Q: 'Et si j\u2019ai besoin de modifications apr\u00e8s le lancement ?',
        faq3A: 'Les plans Croissance et Premium incluent des modifications mensuelles. Pour le plan D\u00e9marrage, les modifications sont disponibles \u00e0 la demande.',
        faq4Q: 'Puis-je annuler \u00e0 tout moment ?',
        faq4A: 'Il y a un engagement minimum de 12 mois. L\u2019annulation avant 12 mois entra\u00eene des frais de 100$. Apr\u00e8s 12 mois, vous pouvez annuler sans frais.',
        faq5Q: 'Qu\u2019est-ce qui est inclus dans le prix mensuel ?',
        faq5A: 'Votre mensualit\u00e9 couvre l\u2019h\u00e9bergement, la maintenance, la s\u00e9curit\u00e9 et le support. Selon votre plan, cela peut inclure des modifications mensuelles et du SEO avanc\u00e9.',
        faq6Q: 'Aidez-vous avec la configuration du domaine et de l\u2019email ?',
        faq6A: 'Oui ! Nous pouvons vous aider \u00e0 pointer votre domaine vers votre nouveau site et vous conseiller pour la configuration email professionnelle.',
        faq7Q: 'Avec quelles industries travaillez-vous ?',
        faq7A: 'Nous travaillons avec tous types de petites entreprises \u2014 barbiers, restaurants, gyms, cliniques dentaires, salons, agents immobiliers, m\u00e9tiers, et plus.',
        contactLabel: 'Commencer', contactTitle: 'R\u00e9servez votre consultation gratuite',
        contactSubtitle: 'Parlez-nous de votre entreprise et nous vous montrerons comment nous pouvons vous aider.',
        contactInfoTitle: 'Construisons quelque chose de g\u00e9nial',
        contactInfoDesc: 'Que vous lanciez une nouvelle entreprise ou am\u00e9lioriez votre pr\u00e9sence web, nous sommes l\u00e0 pour vous aider.',
        contactFormTitle: 'Demander une consultation gratuite',
        labelName: 'Nom complet', labelEmail: 'Courriel', labelPhone: 'T\u00e9l\u00e9phone',
        labelBusiness: 'Nom de l\u2019entreprise', labelPlan: 'Int\u00e9ress\u00e9 par', labelMessage: 'Parlez-nous de votre entreprise',
        planSelect: 'S\u00e9lectionnez un plan...', planNotSure: 'Pas encore s\u00fbr \u2014 aidez-moi \u00e0 d\u00e9cider',
        sendRequest: 'Envoyer la demande',
        basedIn: 'Bas\u00e9 au Qu\u00e9bec, servant les entreprises partout au Canada',
        hours: 'Lun - Ven, 9h - 18h HNE',
        ctaTitle1: 'Pr\u00eat \u00e0 mettre votre entreprise ', ctaTitleHighlight: 'en ligne ?',
        ctaDesc: 'Rejoignez les entreprises qui grandissent d\u00e9j\u00e0 avec BloomWeb.',
        ctaBtn1: 'Commencer maintenant', ctaBtn2: 'R\u00e9server un appel',
        footerDesc: 'Nous cr\u00e9ons des sites web magnifiques et abordables pour les petites entreprises \u00e0 travers le Canada. Bas\u00e9 au Qu\u00e9bec.',
        footerQuick: 'Liens rapides', footerServices: 'Services', footerContact: 'Contact',
        footerWebDesign: 'Design web', footerSEO: 'SEO', footerBooking: 'R\u00e9servation en ligne',
        footerMaint: 'Maintenance', footerFAQ: 'FAQ',
        footerRights: '\u00a9 2026 BloomWeb. Tous droits r\u00e9serv\u00e9s.',
        footerLocation: 'Bas\u00e9 au Qu\u00e9bec, Canada',
        termsTitle: 'Conditions d\u2019utilisation', privacyTitle: 'Politique de confidentialit\u00e9',
        termsLink: 'Conditions d\u2019utilisation', privacyLink: 'Politique de confidentialit\u00e9',
    }
};

// ===== LANGUAGE SWITCHER =====
let currentLang = localStorage.getItem('bloomweb-lang') || 'en';

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('bloomweb-lang', lang);
    document.documentElement.lang = lang;
    // Update toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

// Init language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLang(currentLang);
    // Lang toggle clicks
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
});

// ===== PARTICLES =====
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize(); window.addEventListener('resize', resize);
    class P {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5; this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3; this.opacity = Math.random() * 0.3 + 0.1;
            this.color = ['233,30,140','123,45,206','0,212,232'][Math.floor(Math.random() * 3)];
        }
        update() { this.x += this.speedX; this.y += this.speedY; if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset(); }
        draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = `rgba(${this.color},${this.opacity})`; ctx.fill(); }
    }
    for (let i = 0; i < 50; i++) particles.push(new P());
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x, dy = particles[a].y - particles[b].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) { ctx.beginPath(); ctx.strokeStyle = `rgba(123,45,206,${0.05 * (1 - dist / 120)})`; ctx.lineWidth = 0.5; ctx.moveTo(particles[a].x, particles[a].y); ctx.lineTo(particles[b].x, particles[b].y); ctx.stroke(); }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// ===== CURSOR GLOW =====
function initCursorGlow() {
    const glow = document.getElementById('cursorGlow');
    if (!glow) return;
    document.addEventListener('mousemove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
        const icon = toggle.querySelector('i');
        icon.classList.toggle('fa-bars'); icon.classList.toggle('fa-xmark');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        links.classList.remove('open');
        const icon = toggle.querySelector('i');
        icon.classList.add('fa-bars'); icon.classList.remove('fa-xmark');
    }));
}

// ===== FAQ =====
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const wasOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
            if (!wasOpen) item.classList.add('open');
        });
    });
}

// ===== SCROLL REVEAL =====
function initReveal() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ===== TILT ON CARDS =====
function initTilt() {
    document.querySelectorAll('.service-card, .pricing-card, .testimonial-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = e.clientX - r.left, y = e.clientY - r.top;
            card.style.transform = `perspective(1000px) rotateX(${(y - r.height / 2) / 20}deg) rotateY(${(r.width / 2 - x) / 20}deg) translateY(-8px)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
}

// ===== HERO CAROUSEL =====
function initCarousel() {
    const slides = document.querySelectorAll('.screenshot-slide');
    const dots = document.querySelectorAll('.carousel-dots span');
    if (!slides.length) return;
    let cur = 0;
    function show(i) { slides.forEach(s => s.classList.remove('active')); dots.forEach(d => d.classList.remove('active')); slides[i].classList.add('active'); dots[i].classList.add('active'); }
    setInterval(() => { cur = (cur + 1) % slides.length; show(cur); }, 3000);
    dots.forEach((d, i) => d.addEventListener('click', () => { cur = i; show(i); }));
}

// ===== ACTIVE NAV HIGHLIGHT =====
function initActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
        const href = a.getAttribute('href');
        if (href === path || (path === '' && href === 'index.html') || (path === 'index.html' && href === 'index.html')) {
            a.classList.add('active');
        }
    });
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initCursorGlow();
    initMobileMenu();
    initFAQ();
    initReveal();
    initSmoothScroll();
    initTilt();
    initCarousel();
    initActiveNav();
});
