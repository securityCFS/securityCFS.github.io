(() => {
  'use strict';
  const example = document.querySelector('[data-skill-example]');
  if (example) {
    const buttons = [...example.querySelectorAll('[data-skill-target]')];
    const panels = [...example.querySelectorAll('[data-skill-panel]')];
    const select = button => {
      buttons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
      panels.forEach(panel => { panel.hidden = panel.id !== button.dataset.skillTarget; });
    };
    example.querySelector('.skill-controls').hidden = false;
    buttons.forEach(button => button.addEventListener('click', () => select(button)));
    select(buttons[0]);
  }
})();
