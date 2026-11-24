for (const launcher of document.querySelectorAll('[data-abi-playground]')) {
  function revealFragment() {
    if (location.hash === '#abi-demo' || location.hash === '#abi-antmaze-replay') launcher.open = true;
  }
  window.addEventListener('hashchange', revealFragment);
  revealFragment();

  const dialog = launcher.querySelector('dialog');
  if (typeof dialog.showModal !== 'function') continue;
  const stage = dialog.querySelector('.abi-live-stage');
  const full = dialog.querySelector('[data-abi-full]');
  const scenes = [...launcher.querySelectorAll('[data-abi-scene]')];
  let opener;

  function fullPageLink(scene) {
    full.href = scene.href;
    full.textContent = 'Open ' + scene.dataset.abiScene + ' in a new tab';
  }

  for (const scene of scenes) {
    scene.setAttribute('aria-haspopup', 'dialog');
    scene.addEventListener('click', event => {
      if (event.button || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      dialog.showModal();
      event.preventDefault();
      opener = scene;
      const video = (launcher.closest('article') || launcher.closest('main')).querySelector('video');
      if (video) video.pause();
      fullPageLink(scene);
      const frame = document.createElement('iframe');
      frame.title = 'ABI live robot simulation';
      frame.allowFullscreen = true;
      // On the public site the frame shares our origin. Follow switches made with its own scene picker.
      frame.addEventListener('load', () => {
        try {
          const current = new URL(frame.contentWindow.location.href);
          const active = scenes.find(link => link.href === current.href);
          if (active) fullPageLink(active);
        } catch {
          // A preview on another origin can still open the scene named in the link.
        }
      });
      frame.src = scene.href;
      stage.replaceChildren(frame);
    });
  }
  dialog.querySelector('[data-abi-close]').addEventListener('click', () => dialog.close());
  full.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    stage.replaceChildren();
    if (opener) opener.focus({ preventScroll: true });
  });
}
