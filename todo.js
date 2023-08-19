//These variables can be manipulate or interact with these elements 
var add = document.getElementById('addToDo'); 
var input = document.getElementById('inputField');
var toDoContainer = document.getElementById('toDoContainer');

//The button triggers the addItem function when clicked.
//input triggers the same function when the enter key is pressed
add.addEventListener('click', addItem);
input.addEventListener('keypress', function(e) {
    if(e.key == 'Enter') {
        addItem();
    }
});

function addItem(e) {
    const item_value = input.value;
    
    const item = document.createElement('div');
    item.classList.add('item');

    //creates a new div element. Adds a class to content to it. Appends to item
    const item_content = document.createElement('div');
    item_content.classList.add('content');
    item.appendChild(item_content);

    //creates input element. Adds text to it. sets its type to text. Assigns a value from item_value
    //input is set as read-only = can't be edited by the user
    //when input is double-clicked, changes its text decoration to line-through with crossed-out effect
    const input_item = document.createElement('input');
    input_item.classList.add('text');
    input_item.type = 'text';
    input_item.value = item_value;
    input_item.setAttribute('readonly', 'readonly');
    input_item.addEventListener('dblclick', function() {
        input_item.style.textDecoration = 'line-through';
    })
    item_content.appendChild(input_item);

    //creates a new div and adds a class actions to it
    const item_action = document.createElement('div');
    item_action.classList.add('actions');

    //creates a button element for editing items + adds classes edit btn 
    //btn-success for styling, sets its type as button. Adds the text edit as its content
    const edit_item = document.createElement('button');
    edit_item.classList.add('edit', 'btn', 'btn-success');
    edit_item.type = 'button';
    edit_item.innerHTML = 'Edit';

    //creates a button element for deleting items. Adds classes for styling
    const delete_item = document.createElement('button');
    delete_item.classList.add('delete', 'btn', 'btn-danger', 'fa', 'fa-solid', 'fa-eraser');

    //append the edit_item button and "delete_item" button to tem_action 
    //grouping them together as actions associated with an item
    item_action.appendChild(edit_item);
    item_action.appendChild(delete_item);

    item.appendChild(item_action);

    toDoContainer.appendChild(item);

    //when the edit_item button is clicked = changes it to save, remove the readonly attribute from the input field. And input field for editing.
    //if the button text is already save change it back to edit
    edit_item.addEventListener('click', (e) => {
        if(edit_item.innerText.toLowerCase() == 'edit') {
           edit_item.innerText = 'Save'; 
           input_item.removeAttribute('readonly');
           input_item.focus();
        } else {
            edit_item.innerText = 'Edit';
            input_item.setAttribute('readonly', 'readonly')
        }
    });

    //when clicked, it removes the "item" element from the toDoContainer, deleting the item from the list
    delete_item.addEventListener('click', (e) => {
        toDoContainer.removeChild(item);
    });
};