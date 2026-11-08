(() => {
  'use strict';
  const stage = document.querySelector('[data-demo-stage]');
  if (stage) {
    const tablist = stage.querySelector('[data-demo-tabs]');
    const tabs = [...tablist.querySelectorAll('[role=tab]')];
    const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mayAutoplay = () => !motion.matches && !navigator.connection?.saveData;
    let active = 0;
    const play = video => { const result = video.play(); if (result) result.catch(() => {}); };
    const activate = (index, focus = false) => {
      active = index;
      tabs.forEach((tab, i) => {
        tab.setAttribute('aria-selected', String(i === index));
        tab.tabIndex = i === index ? 0 : -1;
        panels[i].hidden = i !== index;
        if (i !== index) panels[i].querySelector('video').pause();
      });
      stage.querySelector('.demo-counter').textContent = `${String(index + 1).padStart(2, '0')} — ${String(tabs.length).padStart(2, '0')}`;
      if (focus) tabs[index].focus();
      if (mayAutoplay()) play(panels[index].querySelector('video'));
    };
    tablist.hidden = false;
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(index));
      tab.addEventListener('keydown', event => {
        const next = {ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index - 1 + tabs.length) % tabs.length, Home: 0, End: tabs.length - 1}[event.key];
        if (next !== undefined) { event.preventDefault(); activate(next, true); }
      });
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        entries.forEach(entry => { if (!entry.isIntersecting) panels.forEach(panel => panel.querySelector('video').pause()); });
      }, {threshold: 0}).observe(stage);
    }
    motion.addEventListener('change', () => { if (motion.matches) panels.forEach(panel => panel.querySelector('video').pause()); });
    document.addEventListener('visibilitychange', () => { if (document.hidden) panels[active].querySelector('video').pause(); });
    activate(0);
  }
  const tools = document.querySelector('[data-publication-tools]');
  if (tools) {
    tools.hidden = false;
    const input = tools.querySelector('input');
    const buttons = [...tools.querySelectorAll('[data-filter]')];
    const cards = [...document.querySelectorAll('[data-publication]')];
    let topic = 'all';
    const update = () => {
      const terms = input.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
      let count = 0;
      cards.forEach(card => {
        const matches = (topic === 'all' || card.dataset.topic === topic) && terms.every(term => card.dataset.search.includes(term));
        card.hidden = !matches;
        if (matches) count++;
      });
      document.querySelectorAll('[data-publication-group]').forEach(group => {
        group.hidden = ![...group.querySelectorAll('[data-publication]')].some(card => !card.hidden);
      });
      tools.querySelector('[data-filter-status]').textContent = `${count} research work${count === 1 ? '' : 's'}`;
      document.querySelector('[data-empty-state]').hidden = count !== 0;
    };
    input.addEventListener('input', update);
    buttons.forEach(button => button.addEventListener('click', () => {
      topic = button.dataset.filter;
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      update();
    }));
    update();
  }
  document.querySelectorAll('[data-copy-citation]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', async () => {
      const citation = button.closest('.citation');
      const code = citation.querySelector('code');
      const status = citation.querySelector('.copy-status');
      try {
        await navigator.clipboard.writeText(code.textContent);
        status.textContent = 'Copied.';
      } catch (_) {
        const range = document.createRange();
        range.selectNodeContents(code);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        status.textContent = 'Text selected. Press Ctrl+C or ⌘C to copy.';
      }
    });
  });
  document.querySelectorAll('[data-print-cv]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => window.print());
  });
  const demoVideos = [...document.querySelectorAll('.research-video video')];
  demoVideos.forEach(video => video.addEventListener('play', () => {
    demoVideos.forEach(other => { if (other !== video) other.pause(); });
  }));
  document.querySelectorAll('.paper-demo').forEach(details => {
    details.addEventListener('toggle', () => {
      if (!details.open) details.querySelectorAll('video').forEach(video => video.pause());
    });
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) demoVideos.forEach(video => video.pause());
  });
})();
