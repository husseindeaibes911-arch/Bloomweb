/* =========================================================
   HD Ultra Exterior — interactions & animations
   ========================================================= */
(function () {
    'use strict';

    /* ---- Nav: scrolled state + burger ---- */
    var nav = document.querySelector('.nav');
    function onScroll() {
        if (!nav) return;
        nav.classList.toggle('scrolled', window.scrollY > 16);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var burger = document.querySelector('.burger');
    if (burger && nav) {
        burger.addEventListener('click', function () {
            nav.classList.toggle('open');
            burger.classList.toggle('open');
        });
        nav.querySelectorAll('.nav-links a').forEach(function (a) {
            a.addEventListener('click', function () {
                nav.classList.remove('open');
                burger.classList.remove('open');
            });
        });
    }

    /* ---- Scroll progress bar ---- */
    var bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);
    function progress() {
        var h = document.documentElement;
        var max = (h.scrollHeight - h.clientHeight) || 1;
        bar.style.width = (window.scrollY / max * 100) + '%';
    }
    window.addEventListener('scroll', progress, { passive: true });
    progress();

    /* ---- Interactive tilt + pointer glow on cards ---- */
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
        document.querySelectorAll('.svc-card, .glass-card').forEach(function (card) {
            card.addEventListener('pointermove', function (e) {
                var r = card.getBoundingClientRect();
                var px = (e.clientX - r.left) / r.width;
                var py = (e.clientY - r.top) / r.height;
                var rx = (0.5 - py) * 6, ry = (px - 0.5) * 6;
                card.style.transform = 'perspective(800px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-6px)';
                card.style.setProperty('--mx', (px * 100) + '%');
                card.style.setProperty('--my', (py * 100) + '%');
            });
            card.addEventListener('pointerleave', function () { card.style.transform = ''; });
        });
    }

    /* ---- Stagger children: set --i index ---- */
    document.querySelectorAll('.reveal-stagger').forEach(function (group) {
        Array.prototype.forEach.call(group.children, function (child, i) {
            child.style.setProperty('--i', i);
        });
    });

    /* ---- Count-up ---- */
    function countUp(el) {
        var target = parseFloat(el.getAttribute('data-count')) || 0;
        var suffix = el.getAttribute('data-suffix') || '';
        var dur = 1400, start = null;
        function step(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    /* ---- Reveal on scroll ---- */
    var revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (!e.isIntersecting) return;
                e.target.classList.add('in');
                e.target.querySelectorAll('[data-count]').forEach(countUp);
                io.unobserve(e.target);
            });
        }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(function (el) { io.observe(el); });
    } else {
        revealEls.forEach(function (el) {
            el.classList.add('in');
            el.querySelectorAll('[data-count]').forEach(countUp);
        });
    }

    /* ---- FAQ accordion ---- */
    document.querySelectorAll('.faq-item').forEach(function (item) {
        var q = item.querySelector('.faq-q');
        var a = item.querySelector('.faq-a');
        if (!q || !a) return;
        q.addEventListener('click', function () {
            var open = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(function (o) {
                o.classList.remove('open');
                o.querySelector('.faq-a').style.maxHeight = null;
            });
            if (!open) { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
        });
    });

    /* ---- Quote form → FormSubmit.co (emails hdultraexterior@gmail.com) ---- */
    var form = document.querySelector('.quote-form form');
    var action = form && form.getAttribute('action');
    if (form && action && /formsubmit\.co/.test(action)) {
        var EMAIL = action.split('/').pop();               // hdultraexterior@gmail.com
        var AJAX = 'https://formsubmit.co/ajax/' + EMAIL;

        function thanks() {
            var en = document.documentElement.lang === 'en';
            var wrap = form.parentNode;
            wrap.innerHTML = '<div style="text-align:center;padding:2.5rem 1rem">' +
                '<div style="font-size:2.8rem;margin-bottom:.6rem">✅</div>' +
                '<h3 style="font-size:1.5rem;margin-bottom:.5rem">' + (en ? 'Thank you!' : 'Merci !') + '</h3>' +
                '<p style="color:var(--muted)">' + (en
                    ? 'Your request has been received. We\'ll get back to you shortly with your quote.'
                    : 'Votre demande est bien reçue. On vous revient rapidement avec votre soumission.') +
                '</p></div>';
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var ok = true;
            form.querySelectorAll('[required]').forEach(function (f) {
                if (!f.value.trim()) { f.style.borderColor = '#ef4444'; ok = false; }
                else f.style.borderColor = '';
            });
            if (!ok) return;

            var btn = form.querySelector('button[type="submit"]');
            if (btn) { btn.disabled = true; btn.style.opacity = '.65'; btn.style.cursor = 'wait'; }

            var data = {};
            new FormData(form).forEach(function (v, k) { data[k] = v; });

            fetch(AJAX, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                if (res && (res.success === 'true' || res.success === true)) thanks();
                else form.submit();          // e.g. needs one-time activation → normal POST
            })
            .catch(function () { form.submit(); });   // network/CSP fallback → normal POST
        });
    }
})();

/* =========================================================
   Digital FX — particle constellation + cursor glow
   ========================================================= */
(function () {
    'use strict';
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    if (reduce) return;

    /* ---- Particle constellation ---- */
    var canvas = document.createElement('canvas');
    canvas.id = 'fx-particles';
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var DPR = Math.min(window.devicePixelRatio || 1, 2);
    var W, H, pts = [], mx = -9999, my = -9999;

    function resize() {
        W = canvas.width = window.innerWidth * DPR;
        H = canvas.height = window.innerHeight * DPR;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    var N = Math.max(28, Math.min(84, Math.floor(window.innerWidth / 17)));
    for (var i = 0; i < N; i++) {
        pts.push({
            x: Math.random() * W, y: Math.random() * H,
            vx: (Math.random() - .5) * .28 * DPR, vy: (Math.random() - .5) * .28 * DPR,
            r: (Math.random() * 1.6 + .6) * DPR
        });
    }
    var LINK = 132 * DPR, LINK2 = LINK * LINK, CUR = 168 * DPR, CUR2 = CUR * CUR;

    function tick() {
        ctx.clearRect(0, 0, W, H);
        for (var i = 0; i < N; i++) {
            var p = pts[i];
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 6.2832);
            ctx.fillStyle = 'rgba(184,156,255,.75)';
            ctx.fill();
        }
        for (var a = 0; a < N; a++) {
            for (var b = a + 1; b < N; b++) {
                var pa = pts[a], pb = pts[b], dx = pa.x - pb.x, dy = pa.y - pb.y, d = dx * dx + dy * dy;
                if (d < LINK2) {
                    var al = (1 - d / LINK2) * .5;
                    ctx.strokeStyle = 'rgba(150,120,246,' + al + ')';
                    ctx.lineWidth = DPR * .6;
                    ctx.beginPath(); ctx.moveTo(pa.x, pa.y); ctx.lineTo(pb.x, pb.y); ctx.stroke();
                }
            }
        }
        if (mx > -9998) {
            for (var k = 0; k < N; k++) {
                var q = pts[k], ex = q.x - mx, ey = q.y - my, e = ex * ex + ey * ey;
                if (e < CUR2) {
                    var al2 = (1 - e / CUR2) * .65;
                    ctx.strokeStyle = 'rgba(216,175,255,' + al2 + ')';
                    ctx.lineWidth = DPR * .8;
                    ctx.beginPath(); ctx.moveTo(q.x, q.y); ctx.lineTo(mx, my); ctx.stroke();
                }
            }
        }
        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    /* ---- Cursor glow (skip on touch) ---- */
    if (!coarse) {
        var glow = document.createElement('div');
        glow.id = 'fx-cursor';
        document.body.appendChild(glow);
        window.addEventListener('pointermove', function (e) {
            mx = e.clientX * DPR; my = e.clientY * DPR;
            glow.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px) translate(-50%,-50%)';
        }, { passive: true });
    }
})();
