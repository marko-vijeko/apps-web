// Zeigt die Sprache aus ?lang=…, sonst die Sprache des Geräts, sonst Englisch.
// Sprungmarken (#4ears, #krise …) zeigen auf data-anker in der sichtbaren Sprache.
(function () {
  var erlaubt = ['de', 'en', 'es'];
  var aus = new URLSearchParams(location.search).get('lang');
  var geraet = (navigator.language || 'en').slice(0, 2);
  var lang = erlaubt.indexOf(aus) >= 0 ? aus : erlaubt.indexOf(geraet) >= 0 ? geraet : 'en';
  document.documentElement.classList.add('js');
  function zeigen(l) {
    document.documentElement.lang = l;
    document.querySelectorAll('[data-lang]').forEach(function (el) { el.classList.toggle('aktiv', el.dataset.lang === l); });
    document.querySelectorAll('.sprachen button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.value === l)); });
    var t = document.querySelector('[data-lang="' + l + '"] h1');
    if (t) document.title = t.textContent + ' – marko-vijeko';
    springen(l);
  }
  function springen(l) {
    var anker = decodeURIComponent(location.hash.slice(1));
    if (!anker) return;
    var ziel = document.querySelector('[data-lang="' + l + '"] [data-anker="' + anker + '"]');
    if (ziel) ziel.scrollIntoView();
  }
  window.addEventListener('hashchange', function () { springen(document.documentElement.lang); });
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sprachen button').forEach(function (b) {
      b.addEventListener('click', function () { zeigen(b.value); history.replaceState(null, '', '?lang=' + b.value + location.hash); });
    });
    zeigen(lang);
  });
})();
