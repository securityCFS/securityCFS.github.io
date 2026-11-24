(() => {
  'use strict';

  // Color theme toggle (Light / Dark)
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const themeMeta = document.querySelector('meta[data-theme-color]');
  const applyTheme = (theme, persist = false) => {
    const isDark = theme === 'dark';
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    if (themeMeta) {
      themeMeta.setAttribute('content', isDark ? '#131311' : '#f6f5f0');
    }
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      themeToggle.setAttribute('aria-pressed', String(isDark));
    }
    if (persist) {
      try { localStorage.setItem('site-theme', theme); } catch (_) {}
    }
  };
  if (themeToggle) {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
    themeToggle.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next, true);
    });
  }

  // Copy email micro-button in sidebar
  document.querySelectorAll('[data-copy-email]').forEach(btn => {
    let resetTimer = null;
    btn.addEventListener('click', async () => {
      const email = btn.dataset.copyEmail;
      try {
        await navigator.clipboard.writeText(email);
        btn.classList.add('is-copied');
        btn.setAttribute('aria-label', 'Email copied');
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          btn.classList.remove('is-copied');
          btn.setAttribute('aria-label', 'Copy email address');
        }, 1800);
      } catch (_) {
        window.location.href = `mailto:${email}`;
      }
    });
  });

  // Centered minimal \/ chevron expand widget for Earlier News
  const earlierNews = document.querySelector('[data-earlier-news]');
  const newsExpandRow = document.querySelector('[data-news-expand-row]');
  const newsToggle = document.querySelector('[data-news-toggle]');
  if (earlierNews && newsExpandRow && newsToggle) {
    const count = earlierNews.querySelectorAll('li').length;
    earlierNews.hidden = true;
    newsExpandRow.hidden = false;
    newsToggle.addEventListener('click', () => {
      const expanded = newsToggle.getAttribute('aria-expanded') === 'true';
      const next = !expanded;
      earlierNews.hidden = !next;
      newsToggle.setAttribute('aria-expanded', String(next));
      const label = next ? 'Collapse earlier news' : `Show ${count} earlier news items`;
      newsToggle.setAttribute('aria-label', label);
      newsToggle.setAttribute('title', label);
    });
  }

  // Single-row inline drawer toggles (replaces stacked dropdown boxes on cards)
  const drawers = [...document.querySelectorAll('[data-card-drawer]')];
  if (drawers.length) {
    drawers.forEach(drawer => drawer.classList.add('is-managed'));
    document.querySelectorAll('[data-drawer-ui]').forEach(el => { el.hidden = false; });
    const toggleButtons = [...document.querySelectorAll('[data-drawer-target]')];
    const buttonByDrawer = new Map();
    toggleButtons.forEach(btn => {
      btn.hidden = false;
      const targetId = btn.dataset.drawerTarget;
      const target = document.getElementById(targetId);
      if (!target) return;
      buttonByDrawer.set(target, btn);
      btn.setAttribute('aria-expanded', String(target.open));
      btn.addEventListener('click', () => {
        const willOpen = !target.open;
        if (willOpen) {
          const card = target.closest('[data-publication]');
          if (card) {
            card.querySelectorAll('[data-card-drawer]').forEach(other => {
              if (other !== target && other.open) other.open = false;
            });
          }
        }
        target.open = willOpen;
      });
    });
    drawers.forEach(drawer => {
      drawer.addEventListener('toggle', () => {
        const btn = buttonByDrawer.get(drawer);
        if (btn) btn.setAttribute('aria-expanded', String(drawer.open));
      });
    });
  }

  // Publications search & topic filtering with live counts
  const tools = document.querySelector('[data-publication-tools]');
  if (tools) {
    tools.hidden = false;
    const input = tools.querySelector('input');
    const buttons = [...tools.querySelectorAll('[data-filter]')];
    const cards = [...document.querySelectorAll('[data-publication]')];
    let topic = 'all';

    const counts = { all: cards.length };
    cards.forEach(card => {
      const t = card.dataset.topic || '';
      counts[t] = (counts[t] || 0) + 1;
    });
    buttons.forEach(button => {
      const key = button.dataset.filter;
      const n = counts[key] || 0;
      const span = document.createElement('span');
      span.className = 'filter-count';
      span.textContent = String(n);
      button.appendChild(span);
    });

    const update = () => {
      const terms = input.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
      let count = 0;
      cards.forEach(card => {
        const matches = (topic === 'all' || card.dataset.topic === topic) && terms.every(term => (card.dataset.search || '').includes(term));
        card.hidden = !matches;
        if (matches) count++;
      });
      document.querySelectorAll('[data-publication-group]').forEach(group => {
        group.hidden = ![...group.querySelectorAll('[data-publication]')].some(card => !card.hidden);
      });
      tools.querySelector('[data-filter-status]').textContent = `Showing ${count} of ${cards.length} research work${cards.length === 1 ? '' : 's'}`;
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

  // Personal Blog tag filtering (auto-activates when posts exist)
  const blogFilters = document.querySelector('[data-blog-filters]');
  if (blogFilters) {
    const buttons = [...blogFilters.querySelectorAll('[data-blog-tag]')];
    const posts = [...document.querySelectorAll('[data-blog-post]')];
    buttons.forEach(button => button.addEventListener('click', () => {
      const selected = button.dataset.blogTag;
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      posts.forEach(post => {
        const tags = (post.dataset.tags || '').split('|').filter(Boolean);
        post.hidden = selected !== 'all' && !tags.includes(selected);
      });
    }));
  }

  // Copy BibTeX citations
  document.querySelectorAll('[data-copy-citation]').forEach(button => {
    button.hidden = false;
    let resetTimer = null;
    button.addEventListener('click', async () => {
      const citation = button.closest('.citation');
      const code = citation.querySelector('code');
      const status = citation.querySelector('.copy-status');
      try {
        await navigator.clipboard.writeText(code.textContent);
        status.textContent = 'Copied';
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => { status.textContent = ''; }, 2000);
      } catch (_) {
        const range = document.createRange();
        range.selectNodeContents(code);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        status.textContent = 'Selected — press Ctrl+C / ⌘C';
      }
    });
  });

  // Print CV
  document.querySelectorAll('[data-print-cv]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => window.print());
  });

  // Video demos: exclusive playback & pause on collapse / tab hide
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

  // Native <dialog> figure zoom lightbox on paper detail pages
  const lightbox = document.querySelector('[data-figure-lightbox]');
  if (lightbox && typeof lightbox.showModal === 'function') {
    const img = lightbox.querySelector('[data-lightbox-img]');
    const caption = lightbox.querySelector('[data-lightbox-caption]');
    const closeBtn = lightbox.querySelector('[data-lightbox-close]');
    document.querySelectorAll('[data-zoom-src]').forEach(trigger => {
      trigger.addEventListener('click', () => {
        img.src = trigger.dataset.zoomSrc;
        img.alt = trigger.dataset.zoomAlt || '';
        caption.textContent = trigger.dataset.zoomCaption || '';
        caption.hidden = !caption.textContent;
        lightbox.showModal();
      });
    });
    closeBtn.addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', event => {
      if (event.target === lightbox) lightbox.close();
    });
  }
})();
