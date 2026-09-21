// Mobile hamburger nav for The Wildstudio. Injects a toggle + full-screen drawer into the
// fixed header on every page. Visible only ≤900px via responsive.css; desktop is untouched.
(function () {
  if (window.__wsMobileNavInit) return; window.__wsMobileNavInit = true;
  var LINKS = [
    ['Work', 'work.html'],
    ['Services', 'services.html'],
    ['Branding', 'services.html#branding', true],
    ['UI/UX', 'services.html#uiux', true],
    ['Social Media', 'services.html#social-media', true],
    ['Development', 'services.html#development', true],
    ['About us', 'about.html'],
    ['Get in touch', 'contact.html']
  ];
  function build() {
    var header = document.querySelector('header[data-screen-label="Header"]');
    if (!header || header.querySelector('.ws-burger')) return !!header;
    var btn = document.createElement('button');
    btn.className = 'ws-burger'; btn.type = 'button';
    btn.setAttribute('aria-label', 'Open menu'); btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><span></span><span></span>';
    var drawer = document.createElement('nav');
    drawer.className = 'ws-drawer'; drawer.setAttribute('aria-hidden', 'true');
    var list = document.createElement('div'); list.className = 'ws-drawer-list';
    LINKS.forEach(function (l) {
      var a = document.createElement('a');
      a.href = l[1]; a.textContent = l[0];
      if (l[2]) a.className = 'ws-drawer-sub';
      if (l[0] === 'Get in touch') a.className = 'ws-drawer-cta';
      list.appendChild(a);
    });
    drawer.appendChild(list);
    var open = false;
    function set(v) {
      open = v;
      btn.classList.toggle('is-open', v);
      drawer.classList.toggle('is-open', v);
      btn.setAttribute('aria-expanded', String(v));
      btn.setAttribute('aria-label', v ? 'Close menu' : 'Open menu');
      drawer.setAttribute('aria-hidden', String(!v));
      document.documentElement.classList.toggle('ws-nav-open', v);
    }
    btn.addEventListener('click', function () { set(!open); });
    drawer.addEventListener('click', function (e) { if (e.target.tagName === 'A') set(false); });
    window.addEventListener('keydown', function (e) { if (e.key === 'Escape' && open) set(false); });
    window.addEventListener('resize', function () { if (open && window.innerWidth > 900) set(false); });
    var right = document.createElement('div'); right.className = 'ws-mobile-right';
    var themeBtn = header.querySelector('.ws-theme-btn');
    if (themeBtn) {
      // Mirror the real toggle so theme.js's binding keeps working.
      var mirror = document.createElement('button');
      mirror.className = 'ws-theme-mirror'; mirror.type = 'button';
      mirror.setAttribute('aria-label', 'Toggle light and dark mode');
      mirror.innerHTML = themeBtn.innerHTML;
      mirror.addEventListener('click', function () { themeBtn.click(); });
      right.appendChild(mirror);
    }
    right.appendChild(btn);
    header.appendChild(right);
    header.appendChild(drawer);
    var logo = header.querySelector('a[href="#top"], a[href$="Wildstudio.dc.html"], a:first-child');
    if (logo) logo.classList.add('ws-mobile-logo');
    return true;
  }
  var tries = 0;
  var t = setInterval(function () { if (build() || ++tries > 40) clearInterval(t); }, 250);
  document.addEventListener('DOMContentLoaded', build);
})();
