
let checkedOutItems = JSON.parse(localStorage.getItem('addToCart') || '[]');
let displayItemsInTable = document.querySelector('.checkout-display');

let groupedItemsInTheCheckoutStorage = Object.groupBy(checkedOutItems, itemId => {
    // console.log(itemId.id); //This got the id of a specific added to checkout/cart item. and it got it 8x
    // console.log(itemId);
    return itemId.id
})
function displayCheckoutInStorage() {

    displayItemsInTable.innerHTML = '';
    // console.log('this is the length of the checkout - ' + checkedOutItems.length);


    for (let keyId in groupedItemsInTheCheckoutStorage) {
        // What do you want to do with the ID? - I want to add items by id, one by one in a row!

        let totalPrice = 0;
        let itemQuantity = 0;
        let sumOfAllItems = 0;

    // to get prices and quantity, i need to loop through groupedItems each item and then add together, update to price and quantity
        groupedItemsInTheCheckoutStorage[keyId].forEach(item => {
    //  I want to update the ttotal price, and itemQuantity when an item is selected multiple times 
            totalPrice += item.price * item.quantity;
            itemQuantity += item.quantity;

            console.log(item.price);
        });

   

        // console.log(groupedItemsInTheCheckoutStorage[keyId][0]);
        displayItemsInTable.innerHTML +=
            `
        <tr>    
            <td>${groupedItemsInTheCheckoutStorage[keyId][0].brandName.toUpperCase()}</td>
            <td>${groupedItemsInTheCheckoutStorage[keyId][0].description.toUpperCase()}</td>
            <td>R${groupedItemsInTheCheckoutStorage[keyId][0].price}</td>
            <td>${itemQuantity}</td> 
            <td>R${totalPrice}</td>
            

           

        </tr>


        `
    }

}

displayCheckoutInStorage();

// I must be able to clear an Item in the groupedObject- so the question is 
// Your Delete Item should take in a specific item that u want it to be deleted and call it in the button

function clear(){
    displayItemsInTable.innerHTML = " "
    localStorage.removeItem("addToCart")
}
document.querySelector('[clear-items]').addEventListener('click', clear)
