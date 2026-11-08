(() => {
  'use strict';
  const question = document.querySelector('[data-vqa-question]');
  if (question) {
    question.querySelector('.vqa-answers').hidden = false;
    const buttons = [...question.querySelectorAll('[data-vqa-answer]')];
    buttons.forEach(button => button.addEventListener('click', () => {
      buttons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
      const correct = button.dataset.vqaAnswer === 'Top';
      question.querySelector('[data-vqa-feedback]').textContent = correct
        ? 'Matches the simulator reference: top. Image-region reward: 1.'
        : 'The simulator reference is top. Image-region reward for this answer: 0.';
    }));
  }
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
