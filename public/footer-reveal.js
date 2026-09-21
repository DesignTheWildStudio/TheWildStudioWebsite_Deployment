// Scroll-scrubbed staggered reveal for the curtain footer (GSAP-style, dependency-free)
(function () {
  var ease = function (x) { return 1 - Math.pow(1 - x, 3); };
  function update() {
    var wrap = document.querySelector('.ws-footer-curtain');
    if (!wrap) return;
    var footer = wrap.querySelector('footer');
    if (!footer) return;
    var targets = Array.prototype.filter.call(footer.children, function (el) {
      var cs = getComputedStyle(el);
      return cs.position !== 'fixed';
    });
    var r = wrap.getBoundingClientRect();
    var vh = window.innerHeight;
    var p = (vh - r.top) / Math.min(r.height, vh);
    p = Math.max(0, Math.min(1, p));
    targets.forEach(function (el, i) {
      var local = Math.max(0, Math.min(1, p * 1.6 - i * 0.22));
      var e = ease(local);
      el.style.transform = 'translateY(' + Math.round(50 * (1 - e)) + 'px)';
      el.style.opacity = String(e);
      el.style.willChange = 'transform, opacity';
    });
  }
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; update(); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  var tries = 0;
  var t = setInterval(function () { update(); if (++tries > 20) clearInterval(t); }, 300);
})();
