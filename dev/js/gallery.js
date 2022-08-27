//----------------------------------------------//
//  Script who I write to make simple gallery
//----------------------------------------------//
//  Last Edit 27.08.2022
//----------------------------------------------//

function Gallery() {
  var but1 = document.querySelector("#galbut1");
  var but2 = document.querySelector("#galbut2");
  var but3 = document.querySelector("#galbut3");

  function ImgFunc(call) {
    var newimg = document.createElement("div");
    var pos = document.getElementById("gallery");

    newimg.className = "message";
    newimg.style.opacity = "0";
    pos.appendChild(newimg);

    setTimeout(function () {
      newimg.style.transition = "ease-in 300ms";
      if (call == 1) {
        newimg.style.backgroundImage = "url('/dev/css/image1.png')";
      } else if (call == 2) {
        newimg.style.backgroundImage = "url('/dev/css/image2.png')";
      } else {
        newimg.style.backgroundImage = "url('/dev/css/image3.png')";
      }

      newimg.style.backgroundSize = "cover";
      newimg.className = "st2";

      newimg.style.opacity = "1";

      var exitbut = document.createElement("button");
      newimg.appendChild(exitbut);
      exitbut.className = "exbut";
      exitbut.textContent = "X";

      const Exit = () => {
        newimg.style.transition = "ease-in 300ms";
        newimg.className = "message";
        newimg.style.opacity = "0";

        setTimeout(function () {
          pos.removeChild(newimg);
        }, 300);
      };
      exitbut.addEventListener("click", Exit, false);
    }, 300);
  }

  but1.addEventListener(
    "click",
    function () {
      ImgFunc(1);
    },
    false
  );
  but2.addEventListener(
    "click",
    function () {
      ImgFunc(2);
    },
    false
  );
  but3.addEventListener(
    "click",
    function () {
      ImgFunc(3);
    },
    false
  );
}

window.addEventListener("load", Gallery);
