//////// Changing of Text

// Accessing an Element by its Id
const titleElement = document.getElementById("title");
console.log(titleElement);
// will return entire element including tags
console.log(titleElement.textContent);
// will return only text content as .textcontent method is used.

// Accessing elements by className
const descriptionElements = document.getElementsByClassName("description");
console.log(descriptionElements);
// will return the className with tag as it is accessed by className.
// to get entire element or content within element id should be used while accessing elements
console.log(descriptionElements.textContent);
// (line 13) elements accessed by classname wont return anything as there might be many elements with same class.


// Adding an Event Listener to a Button
const button = document.getElementById("changeTextBtn");
button.addEventListener("click", () => {
    titleElement.innerHTML = `My <span>Profile</span>`;
    // inner html will take <span> </span> as a tag. else if we take textContent as above it will consider tags as text.
});

//////// Creating and Inserting the New Elements

// Accessing and inserting new elements
const itemList = document.getElementById("itemList");
const addItemBtn = document.getElementById("addItemBtn");

// to add elements after the existing elements until the user clicks on add button, a simple loop concept is used.
let i = 4;
    addItemBtn.addEventListener("click", () => {

        // creating a new list element when ever button is clicked
        const newItem = document.createElement("li");

        // assigning text content to  the created element
        newItem.textContent = `added Item ${i++}`;
    
        // Appending the New Item to the existing list item
        itemList.appendChild(newItem);
        
    });


//////// Modify Styles
const paragraph = document.getElementById("paragraph");
const toggleHightlightBtn = document.getElementById("toggleHighlightBtn");

toggleHightlightBtn.addEventListener("click", () => {
    paragraph.classList.toggle("highlight");
    //  toggle --> an interactive component that allows users to switch btw 2 states i.e on/off
    // that means it will execute a seperate thing (which is specified) when selected and undoes the action when unselected.

});


//////// removing elements
// accessing and removing existing elements
const itemList2 = document.getElementById("itemList2");
const removeItemBtn = document.getElementById("removeItemBtn");
removeItemBtn.addEventListener("click", () => {
    // removing (last- bydefault) item from the list
    if (itemList2.lastChild) {
        itemList2.removeChild(itemList2.lastChild);
    }
});



//////// traversing the dom
//  its a process of navigating thru the diff elements in a html doc
// dom is a hierarchical tree-like structure with different elements represnting a node of a tree.
const container = document.getElementById("container");

// Accessing the Child Nodes
// here container is the class of a parent node with p as its children.
const paragraphs = container.children;
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].textContent);
    // returns the text content in each child node that is assigned to the paragraphs var
}

// Accessing the Parent Node
// parent node is the first paragraph
const firstParagraph = container.firstElementChild;
console.log(firstParagraph.parentNode.id);
// returns id of the parent class

// Accessing Sibbling Nodes
const secondParagraph = firstParagraph.nextElementSibling;
console.log(secondParagraph.textContent);
// here, sec para or next element sibling to parent class/first child is secon para--> para 2


//////// Handling Events with Forms `onfocus` and `onblur` (here in input form)
function handleFocus(event) {
    event.target.style.backgroundColor = 'lightblue';
}

function handleBlur(event) {
    event.target.style.backgroundColor = '';
}


////////  'onclick' with Radio Button
function handleRadioClick(event) {
    console.log(`selected value: ${event.target.value}`)
}

// event.target.value returns the value among the selected options

////////  'onclick' with Checkboxes
function handleCheckboxClick(event) {
    if (event.target.checked) {
        console.log(`checked: ${event.target.value}`);
    } else {
        console.log(`un-checked: ${event.target.value}`);
    }
}


////////  'onchange' with select dropdown
function handleSelectChange(event) {
    console.log(`the selected option: ${event.target.value}`);
}

////////  'onselect' with textarea
function handleSelect(event) {
    console.log(`the selected text: ${window.getSelection()}`);
    // getSelection returns the selected text within html file
    // toString- used when objects need to be used/displayed as a string/text
}