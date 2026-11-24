// Display paired XY traces recorded with the public ABI Playground worker.
function prepareMaze(canvas, data) {
  const ctx = canvas.getContext('2d');
  const palette = getComputedStyle(canvas);
  const margin = 0.65;
  const scale = canvas.width / (data.maze[0].length - 2 * margin);
  const toGrid = ([x, y]) => [
    (x + data.offset[0]) / data.cellSize + 0.5,
    (y + data.offset[1]) / data.cellSize + 0.5
  ];
  const baseline = data.baseline.map(toGrid);
  const paths = data.runs.map(run => run.path.map(toGrid));
  const goals = data.runs.map(run => toGrid(run.goal));
  ctx.setTransform(scale, 0, 0, scale, -margin * scale, -margin * scale);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  function trail(points, step, color, dashed) {
    const end = Math.min(step, points.length - 1);
    ctx.beginPath();
    ctx.moveTo(...points[0]);
    for (let i = 1; i <= end; i++) ctx.lineTo(...points[i]);
    ctx.lineWidth = 0.10;
    ctx.strokeStyle = color;
    ctx.setLineDash(dashed ? [0.15, 0.15] : []);
    ctx.stroke();
    ctx.setLineDash([]);
    const [x, y] = points[end];
    ctx.fillStyle = color;
    if (dashed) {
      ctx.fillRect(x - 0.10, y - 0.10, 0.20, 0.20);
    } else {
      ctx.beginPath();
      ctx.arc(x, y, 0.13, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  return function draw(runIndex, step) {
    ctx.fillStyle = '#fafbfd';
    ctx.fillRect(0, 0, data.maze[0].length, data.maze.length);
    ctx.fillStyle = '#d3dce4';
    data.maze.forEach((row, y) => row.forEach((wall, x) => {
      if (wall) ctx.fillRect(x, y, 1.005, 1.005);
    }));
    trail(baseline, step, palette.getPropertyValue('--base').trim(), true);
    trail(paths[runIndex], step, palette.getPropertyValue('--guided').trim(), false);

    ctx.lineWidth = 0.055;
    ctx.strokeStyle = '#273a4a';
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(...baseline[0], 0.13, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    const [gx, gy] = goals[runIndex];
    ctx.beginPath();
    ctx.moveTo(gx, gy - 0.25);
    ctx.lineTo(gx + 0.25, gy);
    ctx.lineTo(gx, gy + 0.25);
    ctx.lineTo(gx - 0.25, gy);
    ctx.closePath();
    ctx.stroke();
  };
}

function showReplay(panel, data) {
  const canvas = panel.querySelector('canvas');
  const draw = prepareMaze(canvas, data);
  const goal = panel.querySelector('select');
  const slider = panel.querySelector('input[type="range"]');
  const play = panel.querySelector('[data-play]');
  const guided = panel.querySelector('[data-guided]');
  const base = panel.querySelector('[data-base]');
  const stepLabel = panel.querySelector('[data-step]');
  const limit = data.baseline.length - 1;
  let step = limit;
  let frame = 0;
  let playing = false;

  data.runs.forEach((run, index) => goal.add(new Option(run.label, index)));
  slider.max = limit;

  function drawFrame() {
    const index = goal.selectedIndex;
    const run = data.runs[index];
    const distance = ([x, y]) => Math.hypot(x - run.goal[0], y - run.goal[1]).toFixed(1) + ' units away';
    draw(index, step);
    guided.textContent = run.reachedAt !== null && step >= run.reachedAt
      ? 'Reached at step ' + run.reachedAt
      : distance(run.path[Math.min(step, run.path.length - 1)]);
    base.textContent = distance(data.baseline[step]);
    stepLabel.textContent = step + ' / ' + limit;
    slider.value = step;
    slider.setAttribute('aria-valuetext', 'Step ' + step + ' of ' + limit);
    canvas.setAttribute('aria-label', run.label + ' goal at step ' + step + '. ABI-guided: ' +
      guided.textContent + '. Unguided: ' + base.textContent + '.');
    play.textContent = playing ? 'Pause' : step === limit ? 'Replay' : 'Play';
  }

  function pause() {
    cancelAnimationFrame(frame);
    playing = false;
    drawFrame();
  }
  play.addEventListener('click', () => {
    if (playing) { pause(); return; }
    if (step === limit) step = 0;
    playing = true;
    const start = performance.now();
    const from = step;
    drawFrame();
    function tick(now) {
      const elapsedSteps = Math.floor(Math.max(0, now - start) * 30 / 1000);
      const next = Math.min(limit, from + elapsedSteps);
      if (next !== step) { step = next; drawFrame(); }
      if (step === limit) pause();
      else frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
  });
  goal.addEventListener('change', pause);
  slider.addEventListener('input', () => { step = Number(slider.value); pause(); });
  panel.addEventListener('toggle', () => { if (!panel.open) pause(); });
  const launcher = panel.closest('[data-abi-playground]');
  launcher?.addEventListener('toggle', () => { if (!launcher.open && playing) pause(); });
  launcher?.addEventListener('click', event => {
    if (playing && event.target.closest('[data-abi-scene]')) pause();
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden && playing) pause(); });
  drawFrame();
  panel.querySelector('.abi-interactive').hidden = false;
}

for (const panel of document.querySelectorAll('[data-abi-tracks]')) {
  const message = panel.querySelector('.abi-message');
  let loading = false;
  let ready = false;
  async function loadWhenOpen() {
    if (!panel.open || ready || loading) return;
    loading = true;
    message.textContent = 'Loading recorded paths…';
    message.hidden = false;
    try {
      const response = await fetch(panel.dataset.abiTracks);
      if (!response.ok) throw new Error('Paths unavailable');
      showReplay(panel, await response.json());
      ready = true;
      message.hidden = true;
    } catch {
      message.textContent = 'The recorded paths could not be displayed. You can open the live maze below.';
    } finally {
      loading = false;
    }
  }
  function openLinkedDemo() {
    if (location.hash === '#abi-antmaze-replay') panel.open = true;
  }
  window.addEventListener('hashchange', openLinkedDemo);
  panel.addEventListener('toggle', loadWhenOpen);
  openLinkedDemo();
  loadWhenOpen();
}
