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

  clickKazari('present-l', 'p1');
  clickKazari('present-m', 'p2');
  clickKazari('present-s', 'p3');
  clickKazari('kazari-s', 'p4');
  clickKazari('kazari-l', 'p5');
  clickKazari('bell-s', 'p6');
  clickKazari('bell-l', 'p7');

  function clickKazari(kazariName, id) {
    document.getElementById(kazariName).addEventListener('click', () => {
      hideMessage();
      let result = document.getElementById(id);
      result.classList.add('visible');
    });
  }

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
