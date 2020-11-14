function changeImage()
{
element=document.getElementById('myCars')
if (element.src.match("images/my_wagon.jpg"))
  {
  element.src="images/my_eos.jpg";
  }
else
  {
  element.src="images/my_wagon.jpg";
  }
}

function regularDolly(x) {
  x.style.height = null;
  x.style.width = null;
}

function smallDolly(x) {
  x.style.height = "75%";
  x.style.width = "50%";
}
