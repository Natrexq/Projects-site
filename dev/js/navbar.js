//----------------------------------------------//
//  NavBar
//----------------------------------------------//
//  Last Edit 27.08.2022
//----------------------------------------------//

function NavBar() {
  const bh = document.querySelector("#bthome");
  const ba = document.querySelector("#btinfo");
  const bi = document.querySelector("#btauth");
  const bc = document.querySelector("#btcont");

  function CheckNav(x) {
    if (x == 1) {
      location.reload();
    } else if (x == 2) {
      const info = document.getElementById("info");
      info.scrollIntoView();
    } else if (x == 3) {
      const author = document.getElementById("aut");
      author.scrollIntoView();
    } else if (x == 4) {
      const contact = document.getElementById("conedn");
      contact.scrollIntoView();
    }
  }

  bh.addEventListener(
    "click",
    function () {
      CheckNav(1);
    },
    false
  );
  ba.addEventListener(
    "click",
    function () {
      CheckNav(2);
    },
    false
  );
  bi.addEventListener(
    "click",
    function () {
      CheckNav(3);
    },
    false
  );
  bc.addEventListener(
    "click",
    function () {
      CheckNav(4);
    },
    false
  );
}

window.addEventListener("load", NavBar, false);
