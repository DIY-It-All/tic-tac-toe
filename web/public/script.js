console.log("hi");
var turn = 1;
all_btns = [...document.querySelectorAll("button")];
function btn_click_mngr(e) {
  visualise();
  console.log(e.srcElement);
  e.srcElement.innerText = "O";
  turn = 1 - turn;
}
all_btns.forEach((val) => {
  val.onclick = btn_click_mngr;
});

function visualise() {
  let table = all_btns.map((val) => {
    return val.innerText;
  });
  console.table([table.slice(0, 3), table.slice(3, 6), table.slice(6)]);
}

function cmp_move() {
  visualise();
  found = false;
  while (!found) {
    let no = (Math.random() * 9 - 1) | 1;
    let point = all_btns[no];
    console.log(`btn: ${no}, has value: ${point.innerText} `);
    if (point.innerText == "") {
      point.innerText = "X";
      turn = 1 - turn;
      found = true;
    }
  }
  visualise();
}

function ctrls() {
  if (turn == 0) {
    all_btns.forEach((val) => {
      val.disabled = false;
    });
  } else if (turn == 1) {
    cmp_move();
  }
}
setInterval(() => {
  ctrls();
}, 10);
