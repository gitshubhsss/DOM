//for accessing the tags or making any changes first
//access the index and then makes the changes
const divs = document.getElementsByTagName("div");
const p = document.getElementsByTagName("p");
p[0].innerHTML = "Original para = " + p[0].innerHTML + "& this  new para";
