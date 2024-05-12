var selectedRow = null;

function onFormSubmit(event) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}
// change 1


function readFormData() {
    var formData = {};
    formData["studentName"] = document.getElementById("studentName").value;
    formData["parents"] = document.getElementById("parents").value;
    formData["cls"] = document.getElementById("cls").value;
    formData["dob"] = document.getElementById("dob").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.studentName;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.parents;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cls;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.dob;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("studentName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("parents").value = selectedRow.cells[1].innerHTML;
    document.getElementById("cls").value = selectedRow.cells[2].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.studentName;
    selectedRow.cells[1].innerHTML = formData.parents;
    selectedRow.cells[2].innerHTML = formData.cls;
    selectedRow.cells[3].innerHTML = formData.dob;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm() {
    document.getElementById("studentName").value = '';
    document.getElementById("parents").value = '';
    document.getElementById("cls").value = '';
    document.getElementById("dob").value = '';
}
