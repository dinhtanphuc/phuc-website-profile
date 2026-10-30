(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Mobile menu
  var btn = document.getElementById('menuBtn'), menu = document.getElementById('menu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
    });
  }

  // Scroll progress bar + nav shadow
  var bar = document.getElementById('progress'), nav = document.querySelector('.site-nav');
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? h.scrollTop / max : 0) + ')';
    if (nav) nav.classList.toggle('scrolled', h.scrollTop > 8);
  }
  var toTop = document.getElementById('toTop');
  if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });
  function toggleTop() { if (toTop) toTop.classList.toggle('show', document.documentElement.scrollTop > 700); }
  window.addEventListener('scroll', toggleTop, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll, with stagger inside grids
  var items = document.querySelectorAll('.reveal');
  items.forEach(function (el) {
    var sibs = el.parentElement ? Array.prototype.filter.call(el.parentElement.children, function (c) { return c.classList.contains('reveal'); }) : [];
    el.style.transitionDelay = Math.min(sibs.indexOf(el), 5) * 80 + 'ms';
  });
  if (!('IntersectionObserver' in window) || reduce) {
    items.forEach(function (i) { i.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .12 });
    items.forEach(function (i) { io.observe(i); });
  }

  // Tenure (e.g. "4 yrs 8 mos") computed from a start month
  document.querySelectorAll('[data-since]').forEach(function (el) {
    var p = el.getAttribute('data-since').split('-'), now = new Date();
    var m = (now.getFullYear() - +p[0]) * 12 + (now.getMonth() + 1 - +p[1]);
    if (m < 1) return;
    var y = Math.floor(m / 12), r = m % 12, out = [];
    if (y) out.push(y + (y > 1 ? ' yrs' : ' yr'));
    if (r) out.push(r + (r > 1 ? ' mos' : ' mo'));
    el.textContent = out.join(' ');
  });

  // Count-up numbers
  function countUp(el) {
    var end = parseFloat(el.getAttribute('data-count')), suffix = el.getAttribute('data-suffix') || '', prefix = el.getAttribute('data-prefix') || '';
    if (reduce) { el.textContent = prefix + end + suffix; return; }
    var t0 = null, dur = 1200;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(end * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); co.unobserve(e.target); } });
    }, { threshold: .6 });
    counters.forEach(function (c) { co.observe(c); });
  } else { counters.forEach(countUp); }

  // QA sample tabs
  var tabBtns = document.querySelectorAll('.tabs button');
  tabBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      tabBtns.forEach(function (x) { x.classList.toggle('on', x === b); x.setAttribute('aria-selected', x === b); });
      document.querySelectorAll('.tab-panel').forEach(function (p) {
        var on = p.getAttribute('data-panel') === b.getAttribute('data-tab');
        p.classList.toggle('on', on);
        if (on) p.classList.add('in');
      });
    });
  });

  // Contact form: Formspree when configured, otherwise open the visitor's mail app
  var form = document.getElementById('contactForm'), fs = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      if (d.get('_gotcha')) return;
      if (!d.get('name') || !d.get('email') || !d.get('message')) { fs.className = 'form-status err'; fs.textContent = form.getAttribute('data-err-required') || 'Please fill in all fields.'; return; }
      if (form.action.indexOf('YOUR_FORM_ID') > -1) {
        var body = d.get('message') + '\n\n- ' + d.get('name') + ' (' + d.get('email') + ')';
        window.location.href = 'mailto:dinhtanphuc47@gmail.com?subject=' + encodeURIComponent('Message from ' + d.get('name')) + '&body=' + encodeURIComponent(body);
        return;
      }
      fs.className = 'form-status'; fs.textContent = form.getAttribute('data-sending') || 'Sending...';
      fetch(form.action, { method: 'POST', body: d, headers: { 'Accept': 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error(); fs.className = 'form-status ok'; fs.textContent = form.getAttribute('data-ok') || 'Thanks! Your message has been sent.'; form.reset(); })
        .catch(function () { fs.className = 'form-status err'; fs.textContent = form.getAttribute('data-fail') || 'Could not send. Please email me directly.'; });
    });
  }

  // Auto-playing article banner (infinite loop via a cloned first slide)
  document.querySelectorAll('.banner').forEach(function (bn) {
    var track = bn.querySelector('.banner-track'), n = track.children.length, DUR = 3000;
    track.appendChild(track.children[0].cloneNode(true));
    var dotsBox = bn.querySelector('.banner-dots'), barSpan = bn.querySelector('.banner-bar span');
    bn.style.setProperty('--dur', DUR + 'ms');
    var bi = 0, timer = null, dots = [];
    for (var d = 0; d < n; d++) {
      (function (k) {
        var b = document.createElement('button');
        b.type = 'button'; b.setAttribute('aria-label', 'Go to article ' + (k + 1));
        b.addEventListener('click', function () { go(k); manual(); });
        dotsBox.appendChild(b); dots.push(b);
      })(d);
    }
    function paint() { dots.forEach(function (b, k) { b.classList.toggle('on', k === bi % n); }); }
    function place(k, anim) { track.style.transition = anim ? '' : 'none'; track.style.transform = 'translateX(-' + k * 100 + '%)'; }
    function go(k) { bi = k; place(bi, true); paint(); }
    function next() { if (bi < n) go(bi + 1); }
    function manual() { if (!finePointer) play(); }
    function prev() { if (bi === 0) { bi = n; place(n, false); void track.offsetWidth; } go(bi - 1); }
    track.addEventListener('transitionend', function (e) {
      if (e.target === track && bi === n) { bi = 0; place(0, false); void track.offsetWidth; paint(); }
    });
    function bar() { barSpan.classList.remove('run'); void barSpan.offsetWidth; barSpan.classList.add('run'); }
    function play() { clearInterval(timer); if (reduce) return; bar(); timer = setInterval(function () { next(); bar(); }, DUR); }
    function pause() { clearInterval(timer); bn.classList.add('paused'); }
    function resume() { bn.classList.remove('paused'); play(); }
    bn.querySelector('.next').addEventListener('click', function () { next(); manual(); });
    bn.querySelector('.prev').addEventListener('click', function () { prev(); manual(); });
    bn.setAttribute('tabindex', '0');
    bn.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') { next(); } else if (e.key === 'ArrowLeft') { prev(); } });
    bn.addEventListener('mouseenter', pause); bn.addEventListener('mouseleave', resume);
    bn.addEventListener('focusin', pause); bn.addEventListener('focusout', resume);
    document.addEventListener('visibilitychange', function () { if (document.hidden) pause(); else resume(); });
    var sx = null;
    bn.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; pause(); }, { passive: true });
    bn.addEventListener('touchend', function (e) {
      if (sx !== null) { var dx = e.changedTouches[0].clientX - sx; if (dx < -40) next(); else if (dx > 40) prev(); }
      sx = null; resume();
    });
    paint();
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { es[0].isIntersecting ? resume() : pause(); }, { threshold: .25 }).observe(bn);
    } else { play(); }
  });

  // Dark / light toggle (remembered)
  var themeBtn = document.getElementById('themeBtn');
  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function paintThemeIcon() {
    if (themeBtn) themeBtn.innerHTML = '<i class="bi ' + (currentTheme() === 'dark' ? 'bi-sun' : 'bi-moon-stars') + '"></i>';
  }
  if (themeBtn) {
    paintThemeIcon();
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      paintThemeIcon();
    });
  }

  // Scroll-spy: highlight the nav link of the section in view
  var spyLinks = Array.prototype.filter.call(document.querySelectorAll('#menu a[href*="#"]'), function (a) {
    return a.hash && document.querySelector(a.hash) && a.getAttribute('href').charAt(0) === '#';
  });
  if (spyLinks.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        spyLinks.forEach(function (a) { a.classList.toggle('active', a.hash === '#' + e.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    spyLinks.forEach(function (a) { spy.observe(document.querySelector(a.hash)); });
  }

  // Hero word rotator
  var rot = document.querySelector('.rotator');
  if (rot && !reduce) {
    var wi = 0;
    setInterval(function () {
      rot.classList.add('swap');
      setTimeout(function () { var words = rot.getAttribute('data-words').split('|'); wi = (wi + 1) % words.length; rot.textContent = words[wi]; rot.classList.remove('swap'); }, 350);
    }, 2800);
  }

  // Article slider: arrows + drag to scroll
  document.querySelectorAll('.posts.slider').forEach(function (track) {
    var ctrl = document.createElement('div');
    ctrl.className = 'slider-ctrl';
    ctrl.innerHTML = '<button type="button" aria-label="Previous"><i class="bi bi-arrow-left"></i></button><button type="button" aria-label="Next"><i class="bi bi-arrow-right"></i></button><span class="hint">Drag or use the arrows</span>';
    track.parentNode.insertBefore(ctrl, track);
    var prev = ctrl.children[0], next = ctrl.children[1];
    function step() { var c = track.querySelector('.post'); return c ? c.getBoundingClientRect().width + 20 : 300; }
    function sync() {
      prev.disabled = track.scrollLeft < 8;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    }
    prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
    track.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    sync();
    var down = false, sx = 0, sl = 0, moved = false;
    track.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse') return;
      down = true; moved = false; sx = e.clientX; sl = track.scrollLeft;
    });
    window.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - sx;
      if (Math.abs(dx) > 4) { moved = true; track.classList.add('drag'); }
      track.scrollLeft = sl - dx;
    });
    window.addEventListener('pointerup', function () {
      if (!down) return;
      down = false; track.classList.remove('drag');
    });
    track.addEventListener('click', function (e) { if (moved) { e.preventDefault(); moved = false; } }, true);
  });

  if (!finePointer || reduce) return;

  // Spotlight that follows the cursor inside cards
  document.querySelectorAll('.card, .post, .step, .stat').forEach(function (el) {
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  // Gentle tilt on the portrait + parallax on hero glows
  var hero = document.querySelector('.hero'), portrait = document.querySelector('.portrait');
  if (hero) {
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      hero.style.setProperty('--px', (x * 40).toFixed(1) + 'px');
      hero.style.setProperty('--py', (y * 40).toFixed(1) + 'px');
      if (portrait) portrait.style.transform = 'perspective(900px) rotateY(' + (x * 8).toFixed(2) + 'deg) rotateX(' + (-y * 8).toFixed(2) + 'deg)';
    });
    hero.addEventListener('pointerleave', function () { if (portrait) portrait.style.transform = ''; });
  }

  // Magnetic primary buttons
  document.querySelectorAll('.btn').forEach(function (b) {
    b.addEventListener('pointermove', function (e) {
      var r = b.getBoundingClientRect();
      b.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * .12).toFixed(1) + 'px,' + ((e.clientY - r.top - r.height / 2) * .2).toFixed(1) + 'px)';
    });
    b.addEventListener('pointerleave', function () { b.style.transform = ''; });
  });
})();
