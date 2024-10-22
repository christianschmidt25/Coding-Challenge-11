//Task 1: Create HTML structure
//This was done in HTML, where I created the dropdown menu, a place for them to type how many, and a calculated total price.

//Check index.html for html code


//Task 2 & 3: Add Event Listener for Product Selection & Calculate Price
//I will now update the total price after a user selects a product and how many they are going to buy.

const productSelection = document.getElementById("product-selection"); //variable for the product dropdown
const totalPrice = document.getElementById("total-price"); //variable for the total price calculation
const quantityField = document.getElementById("quantity"); //variable for the quantity field

function updateTotalPrice() {
    const selectedPrice = parseFloat(productSelection.value); //gets the value from the selected product dropdown
    const productQuantity = parseInt(quantityField.value); //gets the value from the integer typed into quantity field
    const totalOrderPrice = selectedPrice * productQuantity;
    totalPrice.textContent = `$${totalOrderPrice}`
}

productSelection.addEventListener("change", updateTotalPrice);
quantityField.addEventListener("input", updateTotalPrice);


//Task 4: Handle Order Submission
// I will add a pop-up after clicking purchase, to include what was bought, the quantity, and the total price.

const purchaseButton = document.getElementById("purchase-button"); //variable for purchase button
purchaseButton.addEventListener("click", (event) => {
    const selectedProduct = productSelection.options[productSelection.selectedIndex].text; //figures out which dropdown is selected, and converts that option to text.
    const quantity = quantityField.value; //gets the value from the quantity field as a number
    const totalPriceValue = totalPrice.textContent; 
    alert(`You have successfully purchased ${quantity} ${selectedProduct} for a total of ${totalPriceValue}.`);
})