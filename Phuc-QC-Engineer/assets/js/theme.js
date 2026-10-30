(function () {
  var btn = document.getElementById('themeBtn');
  function cur() { return document.documentElement.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }
  function paint() { if (btn) btn.innerHTML = '<i class="bi ' + (cur() === 'dark' ? 'bi-sun' : 'bi-moon-stars') + '"></i>'; }
  if (!btn) return;
  paint();
  btn.addEventListener('click', function () {
    var next = cur() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    paint();
  });
})();
