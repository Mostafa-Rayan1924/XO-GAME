let squares = document.querySelectorAll(".body .square");
let theEnd = false;
let title = document.querySelector(".head");
let reset = document.querySelector(".reset");
let turn = "X";
squares.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    let current = e.currentTarget;
    let indexofElement = index;
    if (current.innerHTML == "" && turn == "X") {
      current.innerHTML = turn;
      turn = "O";
    } else if (current.innerHTML == "" && turn == "O") {
      current.innerHTML = turn;
      turn = "X";
    }
    title.innerHTML = `<span>${turn}</span>TURN`;
    win(squares);
  });
});
// reset the game
reset.onclick = () => {
  window.location.reload();
};
// end of reset

// function check winner
function win(ele) {
  if (
    ele[0].innerHTML === ele[1].innerHTML &&
    ele[1].innerHTML === ele[2].innerHTML &&
    ele[0].innerHTML !== ""
  ) {
    showTheWinner(ele, 0);
  } else if (
    ele[3].innerHTML === ele[4].innerHTML &&
    ele[4].innerHTML === ele[5].innerHTML &&
    ele[3].innerHTML !== ""
  ) {
    showTheWinner(ele, 3);
  } else if (
    ele[6].innerHTML === ele[7].innerHTML &&
    ele[7].innerHTML === ele[8].innerHTML &&
    ele[6].innerHTML !== ""
  ) {
    showTheWinner(ele, 6);
  } else if (
    ele[0].innerHTML === ele[3].innerHTML &&
    ele[3].innerHTML === ele[6].innerHTML &&
    ele[0].innerHTML !== ""
  ) {
    showTheWinner(ele, 0);
  } else if (
    ele[1].innerHTML === ele[4].innerHTML &&
    ele[4].innerHTML === ele[7].innerHTML &&
    ele[1].innerHTML !== ""
  ) {
    showTheWinner(ele, 4);
  } else if (
    ele[2].innerHTML === ele[5].innerHTML &&
    ele[5].innerHTML === ele[8].innerHTML &&
    ele[2].innerHTML !== ""
  ) {
    showTheWinner(ele, 2);
  } else if (
    ele[0].innerHTML === ele[4].innerHTML &&
    ele[4].innerHTML === ele[8].innerHTML &&
    ele[0].innerHTML !== ""
  ) {
    showTheWinner(ele, 8);
  } else if (
    ele[2].innerHTML === ele[4].innerHTML &&
    ele[4].innerHTML === ele[6].innerHTML &&
    ele[2].innerHTML !== ""
  ) {
    showTheWinner(ele, 2);
  }
}
function showTheWinner(ele, numOfEle) {
  alertify.alert(`${ele[numOfEle].innerHTML} WIN`);
  title.innerHTML = `${ele[numOfEle].innerHTML} WIN`;
}
