//create button + gets references to different form input elements
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add");
    const taskInput = document.getElementById("new-task");
    const startDateInput = document.getElementById("new-start-date");
    const endDateInput = document.getElementById("new-end-date");
    const listTable = document.getElementById("list");


    //create button to be clicked. When clicked, it gets the values entered by the user (task/ start & end date)
    //these values will create a new row in the table
    addButton.addEventListener("click", function () {
        const task = taskInput.value;
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;

        //creates a new row in the table and inserts cells for the task information, creation date, start date, end date, and actions related to the task.
        if (task && startDate && endDate) {
            const newRow = listTable.insertRow(-1);
            const taskCell = newRow.insertCell(0);
            const dateCreatedCell = newRow.insertCell(1);
            const startDateCell = newRow.insertCell(2);
            const endDateCell = newRow.insertCell(3);
            const actionsCell = newRow.insertCell(4);

            //these are the actions for the tasks described above
            taskCell.innerHTML = task;
            dateCreatedCell.innerHTML = new Date().toLocaleDateString();
            startDateCell.innerHTML = startDate;
            endDateCell.innerHTML = endDate;
            actionsCell.innerHTML = '<button class="btn btn-danger btn-sm delete">Delete</button>';

            //clears the input fields after a new task has been added 
            taskInput.value = "";
            startDateInput.value = "";
            endDateInput.value = "";

            //When a delete button is clicked, it finds its row and deletes it from the table
            const deleteButtons = document.querySelectorAll(".delete");
            deleteButtons.forEach(function (button) {
                button.addEventListener("click", function () {
                    const row = button.closest("tr");
                    listTable.deleteRow(row.rowIndex);
                });
            });
        }
    });
});