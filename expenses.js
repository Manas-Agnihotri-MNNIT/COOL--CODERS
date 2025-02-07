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

    const newRow = tableBody.insertRow();
    newRow.insertCell().textContent = expense;
    newRow.insertCell().textContent = `₹${amount.toFixed(2)}`;
    newRow.insertCell().textContent = category;
    newRow.insertCell().textContent = description;

    console.log(newRow, "new row inserted"); 

    totalAmount += amount;
    document.getElementById("totalAmount").textContent = `₹${totalAmount.toFixed(2)}`;

    expensinp.value = "";
    amountinp.value = "";
    descriptioninp.value = "";
    categoryinp.value = "Food"; 

}
let modebtn=document.querySelector("#mode");
let currmode="light";
modebtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").classList.add("dark");
    }else{
        currmode="light";
        document.querySelector("body").classList.add("white");

    }
    console.log("currmode");
})