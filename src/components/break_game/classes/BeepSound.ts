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
    oscillator.type = "sine"; // 사인파 형태의 소리
    oscillator.frequency.setValueAtTime(this.freq, this.audioCtx.currentTime); // 주파수 설정 (1000 Hz)
    oscillator.connect(this.audioCtx.destination); // 출력 설정

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
