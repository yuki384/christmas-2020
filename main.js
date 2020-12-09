window.onload = (event) => {
  let el = document.getElementById('greeting');
  let date = new Date();
  let hours = date.getHours();
  let greet = 'こんにちは。';
  if (5 <= hours && hours < 12) {
    greet = 'おはようございます。';
  } else if (18 <= hours || hours <  5) {
    greet = 'こんばんは。';
  }
  el.innerHTML = greet;
};
