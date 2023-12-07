let displayAminProducts = document.querySelector('[admin-data-output]')
let getStoredProducts = JSON.parse(localStorage.getItem('Products'))
let sortBtn = document.querySelector('[sort-admins]')

function displayProducts(value) {
    // I can loop through shoe store and push to products.
    // From the lessons, spread operator also does the same, what if I assingn the spread to products?
    displayAminProducts.innerHTML = "";

    console.log(getStoredProducts);
    // if (value) {
        value.forEach((item) => {
            
            displayAminProducts.innerHTML +=
                `
                <tr>
                    <td>${item.brandName}</td>
                    <td>${item.description}</td>
                    <td>${item.price}</td>
                    <td>${item.quantity}</td>

                </tr>

                `
        });

        // console.log(typeof getStoredProducts[0].quantity);
    // }
}

displayProducts(getStoredProducts)

function getValuesFromInputAndPushToStorage(){
    let prod_name = document.querySelector('.product-name').value
    let prod_des = document.querySelector('.product-description').value
    let prod_price = document.querySelector('.product-price').value
    let prod_quantity = document.querySelector('.product-quantity').value
    let prod_img = document.querySelector('.product-image').value

    let adminProduct = {
        brandName : prod_name,
        description : prod_des,
        quantity : prod_quantity,
        price : prod_price,
        img : prod_img
    }
    console.log(adminProduct);

    getStoredProducts.unshift(adminProduct);
    
    console.log(getStoredProducts);
    displayAminProducts.innerHTML = ''
    displayProducts(getStoredProducts)
    localStorage.setItem('Products', JSON.stringify(getStoredProducts))


}


function sortItemsByPrice() {
    let items = getStoredProducts.sort((item1, item2) => {
        return item1.price - item2.price
    })
    displayProducts(items)
}


sortBtn.addEventListener('click', sortItemsByPrice)


document.querySelector('[save-btn]').addEventListener('click',getValuesFromInputAndPushToStorage) // call the function that will add this previous image to the list in the local stogar