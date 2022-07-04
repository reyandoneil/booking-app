function Delay(duration) {
  // eslint-disable-next-line consistent-return
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line prefer-promise-reject-errors
    if (!duration) return reject('Duration is not set!');
    setTimeout(() => resolve(), duration);
  });
}

export default Delay;
