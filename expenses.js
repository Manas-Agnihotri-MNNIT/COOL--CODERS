let totalAmount = 0;
const ctx = document.getElementById('mychart');
function charts(){
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function addrow() {

    const expensinp = document.getElementById("expensinp");
    const amountinp = document.getElementById("amountinp");
    const dateinp = document.getElementById("dateinp");
    const categoryinp = document.querySelector("select[name='Category']"); 
    const tableBody = document.querySelector("#mytable tbody");

    const expense = expensinp.value.trim();
    const amount = parseFloat(amountinp.value); 
    const date = dateinp.value.trim();
    const category = categoryinp.value;

    if (expense === "" || isNaN(amount) || date === "" || category === "") {
        alert("Please enter valid expense, amount, description, and category.");
        return;
    }

    // Create a new row
    const newRow = tableBody.insertRow();

    // Insert four separate cells in correct order
    newRow.insertCell().textContent = expense;
    newRow.insertCell().textContent = `₹${amount.toFixed(2)}`;
    newRow.insertCell().textContent = category;
    newRow.insertCell().textContent = date;

    console.log(newRow, "new row inserted"); // Debug: Check if 4 cells are added

    // Update total amount
    totalAmount += amount;
    document.getElementById("totalAmount").textContent = `₹${totalAmount.toFixed(2)}`;

    //Clear input fields
    expensinp.value = "";
    amountinp.value = "";
    date.value = "";
    categoryinp.value = "Food"; 
}

charts()

