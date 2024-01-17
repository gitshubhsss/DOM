const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML =
  "This paragraph is deditacateed to id demo the element at the zero index div tag is = " +
  y[0].innerHTML;
