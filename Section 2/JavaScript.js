//The function below is responsible for SUBMISSION of data into the form

function onFormSubmit() {
    let formData = readFormData();
    insertNewRecord(formData);

}

// The function below is responsible for the lecturer's INPUT on the form

function readFormData() {
    let formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["studentNumber"] = document.getElementById("studentNumber").value;
    formData["studentCourse"] = document.getElementById("studentCourse").value;
    return formData;
}


// This function below is responsible for INSERTING new data and rows into the table

function insertNewRecord(data) {
    let table = document.getElementById("studentList").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.studentNumber;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.studentCourse;
    cell4 = newRow.insertCell(3);


}