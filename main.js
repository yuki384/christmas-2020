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

  document.getElementById('present-l').addEventListener('click', () => {
    hideMessage();
    let result = document.getElementById('p1')
    result.classList.add('visible');
  });
  let close = document.querySelectorAll(".message-close-x");
  close.forEach((target) => {
    target.addEventListener('click', () => {
      hideMessage();
    });
  });

  function hideMessage(){
    let messagebox = document.querySelectorAll(".messagebox");
    messagebox.forEach((target) => {
      target.classList.remove('visible');
    });
  }
};
