//----------------------------------------------//
//  TopBar
//----------------------------------------------//
//  Last Edit 27.08.2022
//----------------------------------------------//
function ForBar() {
  // TODO 4 BarScript
  const sinput = document.getElementById("inpsrh");
  const sbutton = document.getElementById("butsrh");
  const gitbutton = document.getElementById("gitbbt");

  const BarScript = () => {
    var sival = sinput.value;

    if (sinput.className == "inp_after") {
      sinput.className = "inp_bef";
    } else if (sinput.className == "inp_bef") {
      if (sival == "") {
        sinput.className = "inp_after";
      } else {
      }
    }
  };
  const GitButScript = () => {
    alert("Are  you sure?");
    window.open("https://github.com/Natrexq");
  };

  // TODO 4 GitButScript

  sbutton.addEventListener("click", BarScript);
  gitbutton.addEventListener("click", GitButScript);
}

window.addEventListener("load", ForBar, false);
