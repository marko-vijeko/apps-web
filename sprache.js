// Zeigt die Sprache aus ?lang=…, sonst die Sprache des Geräts, sonst Englisch.
// Erlaubt ist jede Sprache, für die es auf der Seite einen Abschnitt (data-lang) gibt – so kann eine
// Seite Französisch haben (Datenschutz, seit 04.11.2026), während eine andere es noch nicht hat.
// Sprungmarken (#4ears, #krise …) zeigen auf data-anker in der sichtbaren Sprache.
(function () {
  var aus = new URLSearchParams(location.search).get('lang');
  var geraet = (navigator.language || 'en').slice(0, 2);
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
    var erlaubt = Array.prototype.map.call(document.querySelectorAll('article[data-lang]'), function (a) { return a.dataset.lang; });
    zeigen(erlaubt.indexOf(aus) >= 0 ? aus : erlaubt.indexOf(geraet) >= 0 ? geraet : 'en');
  });
})();
