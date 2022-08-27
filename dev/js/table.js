function TableFunc() {
  const filefo = document.querySelector("#filefo");
  const foru = document.querySelector("#foru");
  const bmical = document.querySelector("#bmical");
  const thisite = document.querySelector("#thisite");

  const ShowPr = (butid) => {
    let da = butid;
    switch (da) {
      case 1:
        da = 1;
        window.open("https://github.com/Natrexq/FileFormatChanger-Website");
        break;
      case 2:
        da = 2;
        window.open("https://github.com/Natrexq/4UShop-Online-Shop");
        break;
      case 3:
        da = 3;
        window.open("https://github.com/Natrexq/BMI-Calculator-HTML-CSS-JS");
        break;
      case 4:
        da = 4;
        window.open("https://github.com/Natrexq/Projects-site");
        break;
    }
  };
  filefo.addEventListener("click", function () {
    ShowPr(1);
  });
  foru.addEventListener("click", function () {
    ShowPr(2);
  });
  bmical.addEventListener("click", function () {
    ShowPr(3);
  });
  thisite.addEventListener("click", function () {
    ShowPr(4);
  });
}
window.addEventListener("load", TableFunc);
