export function getRandomDuration() {
  let randomNumber = 0;
  while (randomNumber < 0.3) {
    randomNumber = Math.random();
  }

  return randomNumber;
}

export function getRandomPosition() {
  let position = Math.random() * 2 - 1;
  while (Math.abs(position) < 0.3) {
    position = Math.random() * 2 - 1;
  }
  return position;
}
