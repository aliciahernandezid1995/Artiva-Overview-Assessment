function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5swOr6z1RLn":
        Script1();
        break;
      case "5mmalLgSsNJ":
        Script2();
        break;
      case "6fm6ITWVKBJ":
        Script3();
        break;
      case "6hy4y0Ad486":
        Script4();
        break;
  }
}

function Script1()
{
  var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 250);
}

function Script2()
{
  var confettiScript = document.createElement('script');
confettiScript.setAttribute('src','https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js');
document.head.appendChild(confettiScript);
}

function Script3()
{
  var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 250);
}

function Script4()
{
  var confettiScript = document.createElement('script');
confettiScript.setAttribute('src','https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js');
document.head.appendChild(confettiScript);
}

