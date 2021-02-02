var progess = document.getElementsByClassName("progess");
// console.log(progess);
for (i = 0; i < progess.length; i++) {
  this.appDiv = document.createElement("div");
  this.appDiv.setAttribute("class", "before");
  this.appDiv.style.animationDelay = -i + "s";
  this.appDiv2 = document.createElement("div");
  this.appDiv2.setAttribute("class", "after");
  this.appDiv2.style.animationDelay = -i + "s";
  this.appDiv3 = document.createElement("div");
  this.appDiv3.setAttribute("class", "data");
  //   document.body.appendChild(this.mainAppDiv); //Inserted the div into <body>

  var data = parseInt(progess[i].innerHTML);
  console.log(data);
  progess[i].innerHTML = "";
  this.appDiv3.innerHTML = data;
  this.appDiv.style.top = data;
  this.appDiv2.style.top = data;
  progess[i].appendChild(appDiv);
  progess[i].appendChild(appDiv2);
  progess[i].appendChild(appDiv3);
  //   progess[i].setAttribute("progress", data);
  // progess[i].pseudoStyle("before","top",data+"px");
  // progess[i].pseudoStyle("after","top",data+"px");
  // // window.alert(data);
}

var changeScheme = function () {
  document.body.toggleAttribute("dark");
};
var activate = function (who) {
  var all = document.getElementsByClassName("skill");
//   who.classList.toggle("show");
//   console.log(who);
  for (i = 0; i < all.length; i++) {
    if (all[i].id == who) {
      all[i].classList.toggle("show");
        console.log("Hello");
    } else all[i].classList.remove("show");
    // console.log(all[i]);
  }
};
