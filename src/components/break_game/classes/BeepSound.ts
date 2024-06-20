export default class BeepSound {
  private freq: number;
  private audioCtx: AudioContext;

  constructor(freq: number) {
    const AudioContext = window.AudioContext;
    this.freq = freq;
    this.audioCtx = new AudioContext();
  }

  private getOscillator() {
    const oscillator = this.audioCtx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(this.freq, this.audioCtx.currentTime);
    oscillator.connect(this.audioCtx.destination);

    return oscillator;
  }

  public beep() {
    const oscillator = this.getOscillator();
    oscillator.start();
    setTimeout(() => {
      oscillator.stop();
    }, 100);
  }
}
