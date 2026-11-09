/**
 * SILVERBACK TIMELINE DIRECTOR & STAGE CONTROLLER
 * Implements the 6-stage sequence from the October 23 website discussion:
 * Stage 1 (0.0 - 0.7s): Opening concealed grayscale visual
 * Stage 2 (0.7 - 1.5s): Selective mask & brand accent reveal
 * Stage 3 (1.5 - 2.5s): Sequential headline beats
 * Stage 4 (2.5 - 3.5s): Full Silverback motorcycle reveal
 * Stage 5 (3.5 - 4.5s): Motorcycle + CMO station composition
 * Stage 6 (4.5 - 5.5s): Brand close: Silverback logo + LinkedIn QR "Scan to know more"
 */

class TimelineDirector {
  constructor(options = {}) {
    this.durationMode = options.durationMode || 'standard'; // 'standard' (5.5s) or 'rapid' (3.0s)
    this.totalDuration = this.durationMode === 'standard' ? 5.5 : 3.0;
    this.currentTime = 0;
    this.isPlaying = false;
    this.isLooping = options.isLooping || false;
    this.isStatic = options.isStatic || false;
    this.currentStage = 1;
    this.lastFrameTimestamp = null;
    this.listeners = [];

    // Define stage boundaries
    this.updateStageBoundaries();

    // Bind methods
    this.tick = this.tick.bind(this);
  }

  updateStageBoundaries() {
    if (this.durationMode === 'standard') {
      this.totalDuration = 5.5;
      this.stages = [
        { id: 1, name: 'Concealed Opening', start: 0.0, end: 0.7 },
        { id: 2, name: 'Accent Mask Reveal', start: 0.7, end: 1.5 },
        { id: 3, name: 'Sequential Headline', start: 1.5, end: 2.5 },
        { id: 4, name: 'Motorcycle Reveal', start: 2.5, end: 3.5 },
        { id: 5, name: 'CMO Station Ecosystem', start: 3.5, end: 4.5 },
        { id: 6, name: 'Brand & LinkedIn QR', start: 4.5, end: 5.5 }
      ];
    } else {
      // Rapid 3.0s sequence
      this.totalDuration = 3.0;
      this.stages = [
        { id: 1, name: 'Concealed Opening', start: 0.0, end: 0.38 },
        { id: 2, name: 'Accent Mask Reveal', start: 0.38, end: 0.82 },
        { id: 3, name: 'Sequential Headline', start: 0.82, end: 1.36 },
        { id: 4, name: 'Motorcycle Reveal', start: 1.36, end: 1.91 },
        { id: 5, name: 'CMO Station Ecosystem', start: 1.91, end: 2.45 },
        { id: 6, name: 'Brand & LinkedIn QR', start: 2.45, end: 3.0 }
      ];
    }
  }

  setDurationMode(mode) {
    if (mode !== 'standard' && mode !== 'rapid') return;
    const ratio = this.currentTime / this.totalDuration;
    this.durationMode = mode;
    this.updateStageBoundaries();
    this.seek(ratio * this.totalDuration);
    this.emitChange();
  }

  setLoop(loop) {
    this.isLooping = Boolean(loop);
    this.emitChange();
  }

  setStaticMode(isStatic) {
    this.isStatic = Boolean(isStatic);
    if (this.isStatic) {
      this.pause();
    }
    this.emitChange();
  }

  subscribe(callback) {
    if (typeof callback === 'function') {
      this.listeners.push(callback);
    }
  }

  emitChange() {
    const stageInfo = this.getStageAt(this.currentTime);
    this.currentStage = stageInfo.stage.id;

    const payload = {
      currentTime: this.currentTime,
      totalDuration: this.totalDuration,
      progress: Math.min(1, Math.max(0, this.currentTime / this.totalDuration)),
      stage: stageInfo.stage,
      stageProgress: stageInfo.stageProgress,
      isPlaying: this.isPlaying,
      isLooping: this.isLooping,
      isStatic: this.isStatic,
      durationMode: this.durationMode
    };

    this.listeners.forEach(fn => fn(payload));
  }

  getStageAt(time) {
    const clamped = Math.max(0, Math.min(time, this.totalDuration));
    for (let i = 0; i < this.stages.length; i++) {
      const s = this.stages[i];
      if (clamped >= s.start && (clamped < s.end || i === this.stages.length - 1)) {
        const stageProgress = Math.max(0, Math.min(1, (clamped - s.start) / (s.end - s.start)));
        return { stage: s, stageProgress };
      }
    }
    return { stage: this.stages[this.stages.length - 1], stageProgress: 1 };
  }

  play() {
    if (this.isStatic) return;
    if (this.currentTime >= this.totalDuration) {
      this.currentTime = 0;
    }
    this.isPlaying = true;
    this.lastFrameTimestamp = performance.now();
    requestAnimationFrame(this.tick);
    this.emitChange();
  }

  pause() {
    this.isPlaying = false;
    this.lastFrameTimestamp = null;
    this.emitChange();
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  replay() {
    this.seek(0);
    this.play();
  }

  seek(time) {
    this.currentTime = Math.max(0, Math.min(time, this.totalDuration));
    this.emitChange();
  }

  seekProgress(fraction) {
    this.seek(fraction * this.totalDuration);
  }

  seekToStage(stageId) {
    const found = this.stages.find(s => s.id === stageId);
    if (found) {
      this.seek(found.start + 0.01);
    }
  }

  nextStage() {
    const next = Math.min(6, this.currentStage + 1);
    this.seekToStage(next);
  }

  prevStage() {
    const prev = Math.max(1, this.currentStage - 1);
    this.seekToStage(prev);
  }

  tick(now) {
    if (!this.isPlaying) return;

    if (!this.lastFrameTimestamp) {
      this.lastFrameTimestamp = now;
    }

    const delta = (now - this.lastFrameTimestamp) / 1000;
    this.lastFrameTimestamp = now;

    this.currentTime += delta;

    if (this.currentTime >= this.totalDuration) {
      if (this.isLooping) {
        this.currentTime = 0;
      } else {
        this.currentTime = this.totalDuration;
        this.pause();
        this.emitChange();
        return;
      }
    }

    this.emitChange();

    if (this.isPlaying) {
      requestAnimationFrame(this.tick);
    }
  }
}

window.TimelineDirector = TimelineDirector;

