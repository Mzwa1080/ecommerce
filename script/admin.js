let displayAminProducts = document.querySelector('[admin-data-output]')
let getStoredProducts = JSON.parse(localStorage.getItem('Products'))

function displayProducts(value) {
    // I can loop through shoe store and push to products.
    // From the lessons, spread operator also does the same, what if I assingn the spread to products?
    displayAminProducts.innerHTML = "";

    console.log(getStoredProducts);
    // if (value) {
        value.forEach((item) => {
            displayAminProducts.innerHTML +=
                `
            <div class="card text-center mt-3" style="width: 18rem;">
                <img src="${item.img}" class=" text-center card-img-top" alt="...">
                    <div class="card-body">
                        
                        <div class="card-header align-items-center mt-4">${item.brandName.toUpperCase()}</div>

                        <p class="card-text">${item.description}</p>
                        <div class="card-header align-items-center mb-4">R${item.price}</div>
                        <button class="btn btn-primary" onclick='addItemToCart(${JSON.stringify(item)})'>Add to Cart</button>


                    </div>
                </div>
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


document.querySelector('[save-btn]').addEventListener('click',getValuesFromInputAndPushToStorage) // call the function that will add this previous image to the list in the local stogar