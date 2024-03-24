var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
document.querySelector("img").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
  });

  let myImage = document.querySelector("img");

  myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "box4.gif" ||mySrc==="qq.png") {
      myImage.setAttribute("src", "gg.webp");
    } else {
      myImage.setAttribute("src", "qq.png");
    }
  };

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function func()
{
    alert("666666");

};

myButton.onclick = function () {
etUserName();
};
  