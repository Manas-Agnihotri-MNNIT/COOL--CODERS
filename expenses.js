let totalAmount = 0;
function addrow() {
    const expensinp = document.getElementById("expensinp");
    const amountinp = document.getElementById("amountinp");
    const descriptioninp = document.getElementById("descriptioninp");
    const categoryinp = document.querySelector("select[name='Category']"); 
    const tableBody = document.querySelector("#mytable tbody");

    const expense = expensinp.value.trim();
    const amount = parseFloat(amountinp.value); 
    const description = descriptioninp.value.trim();
    const category = categoryinp.value;

    if (expense === "" || isNaN(amount) || description === "" || category === "") {
        alert("Please enter valid expense, amount, description, and category.");
        return;
    }

    // Create a new row
    const newRow = tableBody.insertRow();

    // Insert four separate cells in correct order
    newRow.insertCell().textContent = expense;
    newRow.insertCell().textContent = `₹${amount.toFixed(2)}`;
    newRow.insertCell().textContent = category;
    newRow.insertCell().textContent = description;

    console.log(newRow, "new row inserted"); // Debug: Check if 4 cells are added

    // Update total amount
    totalAmount += amount;
    document.getElementById("totalAmount").textContent = `₹${totalAmount.toFixed(2)}`;

    // Clear input fields
    expensinp.value = "";
    amountinp.value = "";
    descriptioninp.value = "";
    categoryinp.value = "Food"; 
}
