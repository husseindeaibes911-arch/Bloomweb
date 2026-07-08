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
