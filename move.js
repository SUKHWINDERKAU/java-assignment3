let text = document.getElementById('text');  //  Get the input field where we'll write our message
let treeLeft = document.getElementById('tree-left');  // left subtree 
let treeRight = document.getElementById('tree-right');//  right subtree
let gateLeft = document.getElementById('gate-left');   //  Left gate of the binary search tree
let gateRight = document.getElementById('gate-right'); // Right gate of the binary search tree
window.addEventListener("scroll",() => {                    //  Add an event listener to listen for scroll events on 

    let value= window.scrollY;       //  Value that will be inserted in the tree, initially set to zero

    text.style.marginTop= value * 2.5+ "px";  //changing the margin-top property of the element according to scroll position
    treeLeft.style.left= value * -1.5+ "px";   //  Set position for the left subtree
    treeRight.style.left= value * 1.5+ "px";    //   Set  position for the right subtree
    gateLeft.style.left= value * 0.5+ "px";     //   Set  position for the left gate
    gateRight.style.left= value * -0.5+ "px";   //   Set  position for the right gate
  
});

 