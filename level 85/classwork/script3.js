let seconds = 0;

const interval = setInterval(() => {
  seconds++;
  console.log(`mimidinare second: ${seconds}`);

  if (seconds === 60) {
    clearInterval(interval);
    console.log("intervali has ended!");
  }
}, 1000);