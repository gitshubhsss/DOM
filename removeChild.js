let cnt = 0;
let len=document.getElementById("fruits").getElementsByTagName("li").length;
let removeElement = () => {
  let del_node = document.getElementById("fruits");
  del_node.removeChild(del_node.firstElementChild);
  cnt++;
  if (cnt === len) {
    document.getElementById("message").innerText = "no more fruits to deleted";
  }
};

