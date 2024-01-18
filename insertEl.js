let add_btn=document.createElement("button");
add_btn.innerText="Click me!"; //the value of button will be Click me!

//now what we are going to do is that we are just simply call the node where we wants to add the button 
//so we wants to add the button in div tag so we just simply call it

let div=document.querySelector("div");
div.append(add_btn)//for adding the element at the end
div.prepend(add_btn)//for adding the element at the start of the node
div.before(add_btn)//before the node started
div.after(add_btn)//after the node ends and outside the node

//if i wants to create a new heading 

let new_heading=document.createElement("h1");
new_heading.innerHTML="<i>This heading has involke without using html !<i>";

document.querySelector("body").prepend(new_heading)

//now if we wants to remove a specific node using javascript we can also do that

let divs=document.querySelector("div")
divs.remove();