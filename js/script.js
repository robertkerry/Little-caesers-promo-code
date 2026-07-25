// Little Caesars Coupons — script.js
// Vanilla JS only. No frameworks, no build step.

document.addEventListener('DOMContentLoaded', function () {

  // ---- Filter chips ----
  var chips = document.querySelectorAll('.filter-chip');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var pressed = chip.getAttribute('aria-pressed') === 'true';
      chip.setAttribute('aria-pressed', String(!pressed));
      var filter = chip.getAttribute('data-filter');
      document.querySelectorAll('.deal-card').forEach(function (card) {
        if (filter === 'all') { card.style.display = ''; return; }
        var tags = (card.getAttribute('data-tags') || '').split(' ');
        card.style.display = tags.indexOf(filter) !== -1 ? '' : 'none';
      });
    });
  });

  // ---- Reveal-and-copy code control ----
  document.querySelectorAll('.code-control button[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var code = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(code).then(function () {
        var original = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = original; }, 1500);
      });
    });
  });

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-question').forEach(function (q) {
    q.addEventListener('click', function () {
      var expanded = q.getAttribute('aria-expanded') === 'true';
      q.setAttribute('aria-expanded', String(!expanded));
      var panel = document.getElementById(q.getAttribute('aria-controls'));
      if (panel) panel.hidden = expanded;
    });
  });

});
