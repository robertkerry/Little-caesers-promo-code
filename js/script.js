// Little Caesars Coupons — script.js
// Vanilla JS only. No frameworks, no build step.

document.addEventListener('DOMContentLoaded', function () {

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
