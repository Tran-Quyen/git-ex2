function changeColor() {
  var boxList = document.getElementsByClassName('box');
  var color1 = boxList[0].style.backgroundColor;
  var color2 = boxList[1].style.backgroundColor;
  var color3 = boxList[2].style.backgroundColor;

  boxList[0].style.backgroundColor = color3;
  boxList[1].style.backgroundColor = color1;
  boxList[2].style.backgroundColor = color2;
}

