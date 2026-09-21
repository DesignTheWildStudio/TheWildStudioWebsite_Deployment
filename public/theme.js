// Shared light/dark theme for The Wildstudio
(function(){
  if (window.__wsThemeInit) return; window.__wsThemeInit = true;
  try { if (localStorage.getItem('ws-theme') === 'dark') document.documentElement.classList.add('ws-dark'); } catch(e){}
  document.addEventListener('click', function(e){
    var b = e.target && e.target.closest ? e.target.closest('.ws-theme-btn') : null;
    if (!b) return;
    e.preventDefault();
    var dark = document.documentElement.classList.toggle('ws-dark');
    try { localStorage.setItem('ws-theme', dark ? 'dark' : 'light'); } catch(e2){}
  });
})();

