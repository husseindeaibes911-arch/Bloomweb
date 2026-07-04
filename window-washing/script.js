/* =========================================================
   Lumière Window Washing — interactions & i18n
   ========================================================= */
(function () {
    'use strict';

    /* ---------- Year ---------- */
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- Navbar scroll state ---------- */
    var navbar = document.getElementById('navbar');
    function onScroll() {
        if (window.scrollY > 20) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Mobile menu ---------- */
    var toggle = document.getElementById('mobileToggle');
    var navLinks = document.getElementById('navLinks');
    if (toggle) {
        toggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
            var icon = toggle.querySelector('i');
            icon.className = navLinks.classList.contains('open') ? 'fas fa-xmark' : 'fas fa-bars';
        });
        navLinks.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                navLinks.classList.remove('open');
                toggle.querySelector('i').className = 'fas fa-bars';
            });
        });
    }

    /* ---------- Reveal on scroll ---------- */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add('in');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(function (el) { io.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('in'); });
    }

    /* ---------- FAQ accordion ---------- */
    document.querySelectorAll('.faq-item').forEach(function (item) {
        var q = item.querySelector('.faq-q');
        var a = item.querySelector('.faq-a');
        q.addEventListener('click', function () {
            var isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(function (o) {
                o.classList.remove('open');
                o.querySelector('.faq-a').style.maxHeight = null;
            });
            if (!isOpen) {
                item.classList.add('open');
                a.style.maxHeight = a.scrollHeight + 'px';
            }
        });
    });

    /* ---------- Quote form (front-end only) ---------- */
    var form = document.getElementById('quoteForm');
    var success = document.getElementById('formSuccess');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var required = form.querySelectorAll('[required]');
            var ok = true;
            required.forEach(function (f) {
                if (!f.value.trim()) { f.style.borderColor = '#ef4444'; ok = false; }
                else { f.style.borderColor = ''; }
            });
            if (!ok) return;
            // NOTE: wire this up to a real backend / email service (Formspree, etc.)
            form.style.display = 'none';
            success.classList.add('show');
            success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    /* =========================================================
       i18n — English / French
       ========================================================= */
    var I18N = {
        fr: {
            navServices: 'Services', navProcess: 'Notre méthode', navGuards: 'Protège-gouttières',
            navWhy: 'Pourquoi nous', navFaq: 'FAQ', navQuote: 'Soumission',

            heroPill: '500+ maisons', heroBadge: 'La confiance de Montréal et de l\'Ouest-de-l\'Île',
            heroTitle1: 'Des vitres sans traces.', heroTitle2: 'Des gouttières propres, sans dégât.',
            heroSub: 'Nettoyage à la perche alimentée en eau pure qui décolle toute la saleté du verre, des cadres et des joints — puis rinçage à l\'eau filtrée pour ne laisser aucune trace. Un entretien de gouttières soigné par une équipe locale de Montréal.',
            heroCta1: 'Soumission gratuite', heroCta2: 'Voir nos services',
            heroT1: 'Maisons servies', heroT2b: 'Pure', heroT2: 'Rinçage à l\'eau filtrée',
            heroT3b: 'Entièrement', heroT3: 'Assurés et locaux',

            hcTitle: 'La différence Lumière', hcSub: 'Fait comme il faut, de haut en bas',
            hc1: 'Décolle la saleté du verre, des cadres et des joints',
            hc2: 'Rinçage à l\'eau pure filtrée — zéro trace',
            hc3: 'Débris de gouttières ensachés, jamais éparpillés',
            hc4: 'Descentes vérifiées et débouchées',
            hcFoot: 'Estimation gratuite, sans pression', hcFootV: 'Réservez',
            floatb1: 'Sans traces', floats1: 'chaque vitre',
            floatb2: 'Aucun dégât', floats2: 'on ensache et on part',

            strip1: 'Montréal et environs', strip2: 'Perche alimentée en eau',
            strip3: 'Gouttières nettoyées et ensachées', strip4: 'Satisfaction garantie',

            svcEyebrow: 'Nos services', svcTitle: 'Tout ce dont vos vitres et gouttières ont besoin',
            svcSub: 'Une équipe locale de confiance pour les détails extérieurs qui font une maison bien entretenue.',
            svc1Title: 'Lavage de vitres',
            svc1Desc: 'Notre perche alimentée en eau décolle toute la saleté du verre, des cadres et des joints, puis rince à l\'eau pure filtrée pour un séchage parfaitement clair.',
            svc1a: 'Saleté décollée du verre, des cadres et des joints',
            svc1b: 'Rinçage à l\'eau filtrée — sans traces ni taches',
            svc1c: 'Atteint les vitres en hauteur en toute sécurité, du sol',
            svc1d: 'Options intérieur et extérieur disponibles',
            svc2Title: 'Nettoyage de gouttières',
            svc2Desc: 'Nous retirons tous les débris et les ensachons — jamais soufflés partout sur votre maison et votre terrain. Puis nous rinçons les gouttières et vérifions que l\'eau s\'écoule bien.',
            svc2a: 'Débris retirés à la main et ensachés — aucun dégât',
            svc2b: 'Gouttières rincées à l\'eau',
            svc2c: 'Drains et descentes vérifiés pour un bon écoulement',
            svc2d: 'Descentes bouchées démontées, débouchées et remontées',
            svc3Title: 'Installation de protège-gouttières',
            svc3Desc: 'Arrêtez les bouchons avant qu\'ils commencent. Nous fournissons et installons trois types de protège-gouttières pour garder les feuilles dehors.',
            svc3a: 'Trois options : mousse, filet PVC et aluminium',
            svc3b: 'Fourniture et installation professionnelles',
            svc3c: 'Moins de nettoyages, moins de débordements',
            svc3d: 'Conseils sur le bon choix pour votre toit',
            svc4Title: 'Blanchiment extérieur des gouttières',
            svc4Desc: 'Offert séparément — nous nettoyons la face extérieure de vos gouttières pour qu\'elles paraissent propres et éclatantes vues du sol, en enlevant les traces noires.',
            svc4a: 'Enlève les traces et la saleté de la face de gouttière',
            svc4b: 'Redonne un aspect propre et éclatant',
            svc4c: 'Excellent complément au nettoyage complet',
            svc4d: 'Disponible comme service autonome',

            prEyebrow: 'Notre méthode', prTitle: 'Soigné, propre et bien fait',
            prSub: 'Une méthode rigoureuse qui protège votre maison et ne laisse que de l\'éclat.',
            step1Title: 'Brosser et décoller', step1Desc: 'La brosse de la perche décolle toute la saleté du verre, des cadres et des joints.',
            step2Title: 'Rinçage à l\'eau pure', step2Desc: 'Nous rinçons à l\'eau filtrée pour un séchage sans traces ni taches.',
            step3Title: 'Retirer et ensacher', step3Desc: 'Les débris de gouttières sont retirés et ensachés — jamais soufflés sur la maison ou le terrain.',
            step4Title: 'Rincer et déboucher', step4Desc: 'Nous rinçons le tout et vérifions l\'écoulement — les descentes bouchées sont démontées, débouchées à l\'outil et remontées.',

            gdEyebrow: 'Protège-gouttières', gdTitle: 'Trois options, installées par des pros',
            gdSub: 'Gardez les feuilles et débris dehors pour de bon. On vous aide à choisir selon votre maison et votre budget.',
            gd1Title: 'Mousse', gd1Type: 'Économique',
            gd1Desc: 'Des inserts en mousse poreuse se placent dans la gouttière et bloquent les débris tout en laissant passer l\'eau. Simple et abordable.',
            gd1a: 'L\'option la moins chère', gd1b: 'Installation rapide et sans tracas', gd1c: 'Bloque feuilles et gros débris',
            gd2Tag: 'Populaire', gd2Title: 'Filet PVC', gd2Type: 'Type filet',
            gd2Desc: 'Un filet durable qui se fixe sur la gouttière, gardant dehors feuilles et débris fins pendant que l\'eau passe.',
            gd2a: 'Le filet fin bloque les petits débris', gd2b: 'Bon équilibre prix et performance', gd2c: 'Léger et durable',
            gd3Title: 'Aluminium', gd3Type: 'Haut de gamme et durable',
            gd3Desc: 'Les protège-gouttières rigides en aluminium sont le choix le plus durable — sans rouille ni affaissement, ils résistent aux hivers de Montréal.',
            gd3a: 'L\'option la plus solide et durable', gd3b: 'Anti-rouille et résistant aux intempéries', gd3c: 'Meilleure protection pour les zones à feuilles',

            whyEyebrow: 'Pourquoi choisir Lumière', whyTitle: 'Des pros locaux qui traitent votre maison comme la leur',
            why1Title: 'Aucun dégât laissé', why1Desc: 'Les débris sont ensachés et emportés — jamais soufflés sur votre toit, vos murs et votre pelouse.',
            why2Title: 'Vraiment sans traces', why2Desc: 'L\'eau pure filtrée ne laisse aucun minéral, les vitres sèchent claires sans essuyage.',
            why3Title: 'On rétablit l\'écoulement', why3Desc: 'Les descentes bouchées sont démontées, débouchées avec le bon outil et remontées correctement.',
            why4Title: 'Fièrement de Montréal', why4Desc: 'Une équipe locale qui connaît notre climat, nos maisons, et qui se présente à l\'heure.',
            whyPanelTitle: '500+ maisons et ça continue', whyPanelSub: 'Les propriétaires de Montréal nous confient leurs vitres claires et leurs gouttières fonctionnelles.',
            whyStat1: 'Maisons nettoyées', whyStat2: 'Rinçage à l\'eau filtrée', whyStat3: 'Options de protège-gouttières', whyStat4: 'Dégât laissé',

            areaEyebrow: 'Zone de service', areaTitle: 'Au service de Montréal et des environs',
            areaSub: 'Basés à Montréal, nous couvrons l\'île et les communautés voisines. Vous ne savez pas si vous êtes dans notre zone? Demandez-nous, avec plaisir.',
            areaCta: 'Vérifier mon adresse', areaCardTitle: 'Quartiers desservis', areaMore: 'et plus',

            revEyebrow: 'Clients satisfaits', revTitle: 'Ce que disent les propriétaires de Montréal',
            rev1: '« Mes vitres n\'ont pas été aussi claires depuis des années — pas une seule trace. Ils ont atteint les fenêtres du deuxième étage facilement et tout était impeccable. »',
            rev2: '« Enfin une équipe qui nettoie les gouttières sans faire de dégât. Ils ont tout ensaché et débouché une descente complètement bloquée. »',
            rev3: '« Ils ont installé des protège-gouttières en aluminium et nettoyé l\'extérieur — elles ont l\'air neuves depuis la rue. Pros, ponctuels et sympathiques. »',

            faqEyebrow: 'FAQ', faqTitle: 'Vos questions, nos réponses',
            faq1q: 'Comment fonctionne la perche alimentée en eau?',
            faq1a: 'Une brosse au bout d\'une perche télescopique frotte la saleté sur le verre, les cadres et les joints, pendant que l\'eau pure filtrée coule pour rincer. Comme l\'eau est sans minéraux, les vitres sèchent claires d\'elles-mêmes — sans traces, sans taches, et sans échelle contre la maison.',
            faq2q: 'Allez-vous faire un dégât en nettoyant mes gouttières?',
            faq2a: 'Jamais. Nous retirons les débris à la main et les ensachons plutôt que de les souffler partout. Ensuite nous rinçons les gouttières et vérifions que les drains et descentes s\'écoulent bien.',
            faq3q: 'Que faites-vous si une descente est bouchée?',
            faq3a: 'Si une descente est bloquée, nous démontons la pièce, utilisons le bon outil pour s\'assurer que rien n\'est coincé, puis la remontons pour que l\'eau s\'écoule comme il faut.',
            faq4q: 'Quel protège-gouttière choisir?',
            faq4a: 'Nous en offrons trois : mousse (le plus économique), filet PVC (un écran durable de type filet, notre plus populaire) et aluminium (le plus solide et durable). Nous évaluons votre toit et votre situation de feuilles pour recommander le bon.',
            faq5q: 'Pouvez-vous nettoyer seulement l\'extérieur de mes gouttières?',
            faq5a: 'Oui. Nous offrons le blanchiment extérieur comme service séparé — nous nettoyons la face extérieure pour que vos gouttières paraissent propres du sol, même si l\'intérieur n\'a pas besoin de travail.',
            faq6q: 'Desservez-vous mon secteur?',
            faq6a: 'Nous sommes basés à Montréal et couvrons l\'île ainsi que les communautés voisines, dont l\'Ouest-de-l\'Île et Laval. Envoyez-nous votre adresse dans le formulaire et nous confirmerons rapidement.',

            qEyebrow: 'Soumission', qTitle: 'Prêt pour des vitres claires et des gouttières propres?',
            qSub: 'Parlez-nous un peu de votre maison et de vos besoins. Nous vous reviendrons avec une estimation gratuite et sans pression.',
            qc1: 'Appelez ou textez — réponse rapide', qc2: 'Écrivez-nous en tout temps',
            qc3: 'Au service de l\'île et des environs', qc4b: 'Lun–Sam, 8h–18h', qc4: 'Horaire flexible disponible',
            fName: 'Nom complet', fPhone: 'Téléphone', fEmail: 'Courriel', fAddress: 'Adresse / quartier',
            fService: 'De quoi avez-vous besoin?', fServiceOpt0: 'Choisir un service…',
            fServiceOpt1: 'Lavage de vitres', fServiceOpt2: 'Nettoyage de gouttières',
            fServiceOpt3: 'Installation de protège-gouttières', fServiceOpt4: 'Blanchiment extérieur des gouttières',
            fServiceOpt5: 'Une combinaison / pas certain', fMessage: 'Autre chose? (facultatif)',
            fSubmit: 'Demander ma soumission gratuite', fNote: 'Sans engagement. Vos coordonnées restent confidentielles.',
            fSuccessTitle: 'Merci!', fSuccessMsg: 'Votre demande est reçue. Nous vous contacterons sous peu avec votre soumission gratuite.',

            ctaTitle: 'Faisons briller votre maison',
            ctaSub: 'Rejoignez plus de 500 propriétaires de Montréal qui font confiance à Lumière pour des vitres sans traces et des gouttières sans dégât.',
            ctaBtn1: 'Obtenir ma soumission gratuite',

            footBrand: 'Lavage de vitres et entretien de gouttières professionnels à Montréal. Nettoyage à l\'eau filtrée sans traces, gouttières sans dégât et installation de protège-gouttières. Plus de 500 maisons servies.',
            footServices: 'Services', footS1: 'Lavage de vitres', footS2: 'Nettoyage de gouttières', footS3: 'Protège-gouttières', footS4: 'Blanchiment de gouttières',
            footCompany: 'Entreprise', footC1: 'Pourquoi nous', footC2: 'Notre méthode', footC3: 'FAQ', footC4: 'Soumission',
            footContact: 'Contact', footHours: 'Lun–Sam, 8h–18h',
            footRights: 'Tous droits réservés.', footMade: 'Fièrement au service de Montréal et des environs.'
        }
    };

    // Store the original English markup once (Map, since keys are DOM elements)
    var enMap = new Map();
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        enMap.set(el, el.innerHTML);
    });

    function setLang(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (lang === 'fr' && I18N.fr[key]) {
                el.innerHTML = I18N.fr[key];
            } else {
                el.innerHTML = enMap.get(el);
            }
        });
        // Recompute any open FAQ height after text swap
        document.querySelectorAll('.faq-item.open .faq-a').forEach(function (a) {
            a.style.maxHeight = a.scrollHeight + 'px';
        });
    }

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.lang-btn').forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            setLang(btn.getAttribute('data-lang'));
        });
    });

})();
