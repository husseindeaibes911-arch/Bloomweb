/* =========================================================
   HD Ultra Exterior — i18n (FR default · EN toggle)
   FR text lives in the HTML; EN comes from the dict below.
   ========================================================= */
(function () {
    'use strict';

    var EN = {
        /* nav */
        'nav.home':'Home','nav.services':'Services','nav.gallery':'Our Work',
        'nav.reviews':'Reviews','nav.contact':'Quote','nav.cta':'Free Quote','nav.about':'About',

        /* about page */
        'ab.crumb':'— About —','ab.h1':'Who we <span class="gtext">are</span>',
        'ab.sub':'A local Montreal crew, meticulous and passionate about work done right — and about a cleaner, greener way to clean your home.',
        'ab.story.eyebrow':'— Our story —','ab.story.h2':'Built on <span class="gtext">attention to detail</span>',
        'ab.story.p1':'HD Ultra Exterior started with a simple idea: exterior cleaning should be done thoroughly, tidily, and with real pride in the result. Too many homeowners were used to streaky windows and crews that left a mess behind.',
        'ab.story.p2':'So we invested in a proper pure filtered-water system and we clean gutters by hand — scooping and bagging every bit of debris. More than 500 Montreal homes later, that care is still what sets us apart.',
        'ab.green.eyebrow':'— Our green commitment —','ab.green.h2':'We keep it <span class="gtext">eco-friendly</span>',
        'ab.green.sub':'Our method is better for your home — and for the planet. We rely on pure water instead of chemicals.',
        'ab.g1.t':'Pure water, zero chemicals','ab.g1.p':'We wash with pure filtered water — no soap or detergent running off onto your plants, your lawn or into the storm drains.',
        'ab.g2.t':'Safe for family &amp; pets','ab.g2.p':'No toxic residue on your sills or frames — better for your kids, your pets and your garden.',
        'ab.g3.t':'We bag it, we don\'t blow it','ab.g3.p':'Gutter debris is scooped and bagged — never blown into the bushes or waterways. Your property stays clean.',
        'ab.g4.t':'Less waste','ab.g4.p':'Efficient filtration and careful work: we use what\'s needed, without over-using water or products.',
        'ab.val.eyebrow':'— Our values —','ab.val.h2':'What matters to us',
        'ab.val.local.n':'Local','ab.val.local.l':'Proudly from Montreal',
        'ab.cta.h2':'A local crew you can <span class="gtext">trust</span>','ab.cta.p':'Ready to see the difference? Request your free quote today.',

        /* hero */
        'hero.eyebrow':'Montreal &amp; surrounding areas · Residential',
        'hero.line1':'Ultra-clear','hero.line2':'windows.',
        'hero.lead':'Pure-water window washing, gutter cleaning and gutter guards. 100% filtered water, a streak-free finish and zero mess left behind — careful work, guaranteed.',
        'wv.badge':'Streak-free',

        /* trust bar */
        'tb.rating':'happy clients','tb.homes':'homes cleaned','tb.insured':'Fully insured','tb.local':'Local · Montreal',
        'top.hours':'Mon–Sat · 8am to 6pm','top.area':'Montreal &amp; surrounding areas',

        /* advantages */
        'adv.eyebrow':'— Our advantages —','adv.title':'Why people choose <span class="gtext">HD Ultra</span>',
        'adv.sub':'Careful work, a local crew and a satisfaction guarantee — that\'s what sets us apart.',
        'adv1.t':'Fully insured','adv1.p':'An insured, professional crew you can trust from start to finish.',
        'adv2.t':'Pure filtered water','adv2.p':'Our filtration system leaves brilliant glass that dries without a single streak.',
        'adv3.t':'No mess left behind','adv3.p':'We bag every bit of debris and leave your property as clean as we found it.',
        'adv4.t':'Local Montreal crew','adv4.p':'We know our homes and our weather, and we show up on time, as promised.',
        'adv5.t':'Satisfaction guaranteed','adv5.p':'Not happy? We come back and make it right, free of charge. That\'s our guarantee.',
        'adv6.t':'Free quotes','adv6.p':'A clear, no-surprise price with no obligation. Request your quote in seconds.',
        'hero.cta1':'Get a quote','hero.cta2':'Our services',
        'hero.t1.n':'500+','hero.t1.l':'Homes cleaned',
        'hero.t2.n':'100%','hero.t2.l':'Streak-free',
        'hero.t3.n':'Pure water','hero.t3.l':'Filtration system',
        'hero.scroll':'Scroll',
        'glass.badge.t':'Streak-free finish','glass.badge.s':'Pure filtered-water rinse',

        /* services trio */
        'svc.eyebrow':'— Our services —','svc.title':'Your whole exterior, <span class="gtext">spotless</span>',
        'svc.sub':'Three specialties, one meticulous crew. From the ground to the roofline, we handle it all.',
        'svc.w.name':'Window Washing','svc.w.desc':'A pure-water pole and soft brush lift the ground-in grime, then a filtered-water rinse. The glass dries on its own — brilliant and completely streak-free.',
        'svc.w.f1':'Interior &amp; exterior','svc.w.f2':'Filtered water, zero soap','svc.w.f3':'Frames &amp; sills included',
        'svc.g.name':'Gutter Cleaning','svc.g.desc':'We empty the gutters by hand, bag the debris, check every downspout and rinse. Water flows the way it should — with no mess left on your property.',
        'svc.g.f1':'Debris removed by hand','svc.g.f2':'Downspouts checked','svc.g.f3':'Full inspection included',
        'svc.p.name':'Gutter Guards','svc.p.desc':'Quality gutter guards, precisely installed, to block leaves and debris. Far less maintenance, and no winter blockages.',
        'svc.p.f1':'Supply &amp; installation','svc.p.f2':'Fewer cleanings','svc.p.f3':'Guards against ice &amp; blockages',
        'svc.link':'Learn more',

        /* gutter guard options */
        'gg.eyebrow':'— Gutter guards —','gg.title':'Three options, <span class="gtext">to fit your budget</span>',
        'gg.sub':'We recommend the best one for your roof and the trees around it. Here are the three we install — and how long each one lasts.',
        'gg.foam.name':'Foam','gg.foam.tier':'Budget-friendly','gg.foam.life':'3–5 years',
        'gg.foam.desc':'A porous foam insert that sits inside the gutter. It blocks leaves and debris while water passes through. The most affordable option.',
        'gg.pvc.tag':'Best value','gg.pvc.name':'PVC Mesh','gg.pvc.tier':'Net-style · balanced','gg.pvc.life':'5–7 years',
        'gg.pvc.desc':'A net-style mesh screen that clips over the gutter. It keeps out even small debris while water flows freely. The best value for money.',
        'gg.alu.name':'Aluminum','gg.alu.tier':'Premium · longest-lasting','gg.alu.life':'8–10 years',
        'gg.alu.desc':'A rigid aluminum guard. It won\'t rust or sag and stands up to Quebec winters year after year. The most durable option.',

        /* feature: windows */
        'f1.eyebrow':'— Window washing —','f1.h2':'The pure-water pole, <span class="gtext">the streak-free finish</span>',
        'f1.p':'Our filtration system strips the minerals out of the water. The result: no drying spots, no residue — just perfectly clear glass, upper floors included, with no ladders against your walls.',
        'f1.li1':'No ladders against your walls — we reach upper floors from the ground.',
        'f1.li2':'No chemicals: better for your plants and your family.',
        'f1.li3':'Screens, frames and sills wiped along the way.',

        /* feature: gutters */
        'f2.eyebrow':'— Gutters —','f2.h2':'We scoop, we inspect, <span class="gtext">we rinse</span>',
        'f2.p':'No blower flinging mud everywhere. We remove debris by hand, bag it, then water-test every downspout to confirm it runs free.',
        'f2.li1':'Debris bagged and removed — your yard stays clean.',
        'f2.li2':'Downspouts cleared and water-tested.',
        'f2.li3':'We flag any issue before it gets expensive.',

        /* process */
        'proc.eyebrow':'— Our method —','proc.title':'How we <span class="gtext">work</span>',
        'proc.s1.t':'Free quote','proc.s1.p':'Describe your home — we come back with a clear price, no surprises.',
        'proc.s2.t':'We prep','proc.s2.p':'We protect the area, ready the filtered water and check the gear.',
        'proc.s3.t':'The cleaning','proc.s3.p':'Panes brushed and rinsed; gutters emptied and inspected.',
        'proc.s4.t':'Final walk-through','proc.s4.p':'We review every detail with you — satisfaction guaranteed.',

        /* stats */
        'stats.eyebrow':'— Why HD Ultra —','stats.title':'Care, not shortcuts',
        'stats.1.l':'Residential clients','stats.2.l':'Streak-free finish',
        'stats.3.n':'Pure water','stats.3.l':'Filtration system',
        'stats.4.n':'Insured','stats.4.l':'Work guaranteed',

        /* banner */
        'ban.h2':'Not happy? <span class="gtext">We come back.</span>',
        'ban.p':'If a window or gutter isn\'t up to par, tell us and we\'ll make it right, free of charge. That\'s our guarantee.',
        'ban.cta':'Request my quote',

        /* area */
        'area.eyebrow':'— Service area —','area.title':'We serve <span class="gtext">Greater Montreal</span>',
        'area.sub':'Montreal and surrounding areas. Don\'t see your area? Just write us.',

        /* reviews */
        'rev.eyebrow':'— Client reviews —','rev.title':'What <span class="gtext">our clients</span> say',
        'rev.sub':'A few words from homeowners in the region. (Google reviews coming soon.)',
        'rev.rating.sub':'Based on the experience of our residential clients',
        'rev.1.t':'"My windows have never been this clear."','rev.1.n':'Client · Montreal','rev.1.w':'Window washing',
        'rev.2.t':'"They cleaned my gutters without making any mess."','rev.2.n':'Client · Laval','rev.2.w':'Gutter cleaning',
        'rev.3.t':'"Fast service, fair price and a flawless result."','rev.3.n':'Client · South Shore','rev.3.w':'Windows + gutters',
        'rev.4.t':'"Gutter guard installation was spotless."','rev.4.n':'Client · West Island','rev.4.w':'Gutter guards',
        'rev.5.t':'"A professional crew that takes the time to do it right."','rev.5.n':'Client · Longueuil','rev.5.w':'Full exterior',
        'rev.6.t':'"Easy to deal with, careful and clean work."','rev.6.n':'Client · Montreal','rev.6.w':'Window washing',

        /* faq */
        'faq.eyebrow':'— Frequently asked —','faq.title':'Good to <span class="gtext">know</span>',
        'faq.q1':'Why does pure water leave no streaks?','faq.a1':'Tap water contains minerals that dry into rings. Our filtration system removes those minerals, so glass dries perfectly clear.',
        'faq.q2':'Will you make a mess in my yard?','faq.a2':'No. We don\'t blow anything around. Debris is scooped by hand and bagged.',
        'faq.q3':'How often should I have it cleaned?','faq.a3':'Generally windows twice a year, and gutters in spring and fall.',
        'faq.q4':'Do you offer free quotes?','faq.a4':'Yes, always. Fill out the form or give us a call.',

        /* footer */
        'ft.about':'Window washing, gutter cleaning and gutter guards — Montreal and surrounding areas.',
        'ft.nav':'Navigation','ft.services':'Services','ft.contact':'Contact',
        'ft.copy':'© 2026 HD Ultra Exterior','ft.by':'Free quote, no obligation',

        /* page heroes */
        'pg.gal.crumb':'— Our work —','pg.gal.h1':'Before / <span class="gtext">after</span>','pg.gal.p':'A few examples of our work. (Your photos will be added here.)',
        'gal.upload':'Your photo here','gal.video':'In action','gal.full':'Full exterior',
        'pg.rev.crumb':'— Reviews —','pg.rev.h1':'Your <span class="gtext">testimonials</span>','pg.rev.p':'What homeowners in the region think of our work.',
        'pg.ct.crumb':'— Quote —','pg.ct.h1':'Get your <span class="gtext">free quote</span>','pg.ct.p':'Fill out the form — we\'ll get back to you quickly with a clear price.',
        'pg.sv.crumb':'— Services —','pg.sv.h1':'Everything your <span class="gtext">exterior</span> needs','pg.sv.p':'Window washing, gutter cleaning and gutter guards — done carefully, done right.',

        /* quote form */
        'q.title':'Quote request','q.sub':'Tell us what you need. Reply within 24 h.',
        'q.name':'Full name','q.phone':'Phone','q.email':'Email','q.addr':'Address / area','q.service':'Service needed',
        'q.s.win':'Window washing','q.s.gut':'Gutter cleaning','q.s.guard':'Gutter guards','q.s.all':'Full package','q.s.other':'Other / not sure',
        'q.msg':'Details (floors, number of windows, etc.)','q.send':'Send my request',
        'q.note':'By submitting, you agree to be contacted about your request. No spam.',
        'ct.call.label':'Phone','ct.mail.label':'Email','ct.area.label':'Service area','ct.area.val':'Montreal &amp; surrounding areas',
        'ct.hours.label':'Availability','ct.hours.val':'Mon – Sat · 8am to 6pm'
    };

    /* Inject the franchise top utility bar (before capturing text) */
    var topbar = document.createElement('div');
    topbar.className = 'topbar';
    topbar.innerHTML =
      '<span class="ti"><svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2.1z"/></svg><a href="tel:+14388748757">(438) 874-8757</a></span>' +
      '<span class="dot-sep ti-hide">·</span>' +
      '<span class="ti ti-hide"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span data-i18n="top.hours">Lun–Sam · 8h à 18h</span></span>' +
      '<span class="dot-sep ti-hide">·</span>' +
      '<span class="ti"><svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="2.6"/></svg><span data-i18n="top.area">Montréal &amp; environs</span></span>';
    document.body.insertBefore(topbar, document.body.firstChild);
    document.body.classList.add('has-topbar');

    var nodes = document.querySelectorAll('[data-i18n]');
    var fr = new Map();
    nodes.forEach(function (el) { fr.set(el, el.innerHTML); });

    /* Inject FR/EN toggle into the nav (before the CTA) */
    var nav = document.querySelector('.nav');
    var toggle = document.createElement('div');
    toggle.className = 'lang';
    toggle.innerHTML = '<button data-lang="fr" class="active">FR</button><button data-lang="en">EN</button>';
    if (nav) {
        var cta = nav.querySelector('.nav-cta');
        nav.insertBefore(toggle, cta || null);
    }

    function setLang(lang) {
        document.documentElement.lang = lang;
        nodes.forEach(function (el) {
            var k = el.getAttribute('data-i18n');
            if (lang === 'en' && EN[k] != null) el.innerHTML = EN[k];
            else el.innerHTML = fr.get(el);
        });
        toggle.querySelectorAll('button').forEach(function (b) {
            b.classList.toggle('active', b.getAttribute('data-lang') === lang);
        });
        document.querySelectorAll('.faq-item.open .faq-a').forEach(function (a) {
            a.style.maxHeight = a.scrollHeight + 'px';
        });
        try { localStorage.setItem('hdlang', lang); } catch (e) {}
    }

    toggle.querySelectorAll('button').forEach(function (b) {
        b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });

    var saved = 'fr';
    try { saved = localStorage.getItem('hdlang') || 'fr'; } catch (e) {}
    if (saved === 'en') setLang('en');

    window.__setLang = setLang;
})();
