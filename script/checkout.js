
function displayCheckoutInStorage() {
    let checkedOutItems = JSON.parse(localStorage.getItem('addToCart') || '[]');
    let displayItemsInTable = document.querySelector('.checkout-display');
    displayItemsInTable.innerHTML = '';

    checkedOutItems.forEach(item => {
        console.log(item.brandName);
        console.log(item.description);
        displayItemsInTable.innerHTML +=
            `
            <tr>
                <td>${item.brandName}</td>
                <td>${item.description}</td>
                <td>${item.price}</td>
              <!---  <td>R${item.quantity}</td> --->
            </tr>
            `;
    });
}

displayCheckoutInStorage();
