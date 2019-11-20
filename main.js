// ARRAY OF DIVS IN THE HTML FILES
const divs = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9', 'div0'];
// ARRAY WHERE THE DIVS WILL BE STORED WHEN WE USE [.getElementById()]
const container = [];


divs.forEach(item => {
    container.push(document.getElementById(item)); // PASSES IN EVERY DIV INTO THE [.getElementById()] AND PUSHES INTO EMPTY ARRAY
});

const opacityOff = event => { 
    event.target.style.opacity = 1; // EVENT HANDLER FOR WHEN THE MOUSE IS OVER CONTAINER 
};

const opacityOn = event => {
    event.target.style.opacity = .5; // EVENT HANDLER FOR WHEN THE MOUSE IS OUT OF CONTAINER
};

// HELPER FUNCTION FOR THE EVENT HANDLERS
const evetnAssignment = div => {
    div.onmouseover = opacityOff; 
    div.onmouseout = opacityOn; 
};


container.forEach(evetnAssignment); // PASSES IN EVER ITEM IN [container] INTO [eventAssignment()]