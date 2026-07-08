/* =========================================================
   HD Ultra Exterior — i18n (FR default · EN toggle)
   FR text lives in the HTML; EN comes from the dict below.
   ========================================================= */
(function () {
    'use strict';

    var EN = {
        /* nav */
        'nav.home':'Home','nav.services':'Services','nav.gallery':'Our Work',
        'nav.reviews':'Reviews','nav.contact':'Quote','nav.cta':'Free Quote',

        /* hero */
        'hero.eyebrow':'Montreal &amp; surrounding areas · Residential',
        'hero.line1':'Ultra-clear','hero.line2':'windows.',
        'hero.lead':'Pure-water window washing, gutter cleaning and gutter guards. 100% filtered water, a streak-free finish and zero mess left behind — careful work, guaranteed.',
        'wv.badge':'Streak-free',
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
        'gal.upload':'Your photo here',
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
