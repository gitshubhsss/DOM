let clickAppend = () => {
  let node = document.createElement("li");

  let textNode = document.createTextNode("new fruit");

  node.appendChild(textNode);

  document.getElementById("fruits").appendChild(node);
};
