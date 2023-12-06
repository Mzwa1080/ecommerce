
document.getElementById('year').textContent = new Date().getFullYear()

// // Current date
// let currentDate = new Date().getUTCFullYear();
// document.querySelector('#currentDate').textContent = currentDate;
// // products
// let products = JSON.parse(localStorage.getItem('products'))
// // Input element, search laptop by make
// let searchByMake = document.querySelector('#searchByMake');
// // Sorting by price
// let sortingByPrice = document.querySelector('#sortingByPrice');
// // Products wrapper
// let productCard = document.querySelector('[data-productCard]');
// // CheckOutList
// let CheckOutList = [];
// // Number of products loaded into a cart.
// let cartSize = JSON.parse(localStorage.getItem('checkout'))?.length || 0
// // Display data to the index.html
/*function displayProducts(args) {
    try {
        // Clear 
        productCard.innerHTML = "";
        // Display
        if (args) {
            args?.forEach((item) => {
                productCard.innerHTML += `
                <div class="card">
                    <div class="card-header bg-gradient bg-transparent">
                        <h3>${item.make} ${item.spec.split(' ')[0].slice(0, item.spec.indexOf(' '))}</h3> 
                    </div>
                    <div class="card-body">
                        <img class="img-fluid" src="${item.image}" loading="lazy"/>
                        <div>                    
                            <span>Spec: 
                                <li>${item.spec}</li>
                            </span>
                        </div>
                        <button class="btn btn-success" onclick='checkoutProducts(${JSON.stringify(item)})'>Add to cart</button>
                    </div>
                    <div class="card-footer bg-gradient bg-transparent">
                        <p class="product-amount">Price: R${item.amount}</p>
                    </div>
                </div>
                `
            })
        } else {
            args = JSON.parse(localStorage.getItem("products"))
            productCard.innerHTML =
                `
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            `
            displayProducts(args)
        }
    } catch (e) {
        console.error(`Error message: ${e.message}`);
    }
};
displayProducts(products);
//
function checkoutProducts(item) {
    try {
        // Save the selected product into an array.
        CheckOutList.push(item);
        if(Object.hasOwn(localStorage, 'checkout')){
            localStorage.setItem('checkout', JSON.stringify(
               CheckOutList.concat(JSON.parse( 
                        localStorage.getItem('checkout') ))
            ))
        }else {
            localStorage.setItem('checkout', JSON.stringify(CheckOutList));
        }
        document.querySelector('[cartSize]').textContent = cartSize
    } catch (e) {
        console.log(`Error message: ${e.message}`);
    }
}
searchByMake.addEventListener('keyup', () => {
    try {
        if (!searchByMake.value.length) {
            displayProducts(products);
        }
        let filterByMake = products.filter((item) => {
            return item.make.toLowerCase().
                includes(searchByMake.value.toLowerCase())
        })
        // Display
        displayProducts(filterByMake)
        if (!filterByMake.length) throw new Error("This product is not available");
    } catch (e) {
        productCard.innerHTML = e.message;
    }
})
// Sorting by price
let isToggle = false;
sortingByPrice.addEventListener('click', () => {
    try {
        if (!products) throw new Error("Please try again later.")
        if (!isToggle) {
            products.sort((a, b) => b.amount - a.amount);
            sortingByPrice.textContent = "Sorted by highest price";
            isToggle = true;
        } else {
            products.sort((a, b) => a.amount - b.amount);
            sortingByPrice.textContent = "Sorted by lowest price";
            isToggle = false;
        }
        displayProducts(products);
    } catch (e) {
        productCard.innerHTML = e.message;
    }
})
// Disable ctrl, f2, right click
window.onkeydown = (e) => {
    let keyCodes = [16, 17, 18, 73]
    return keyCodes.some(a => a === e.keyCode) ? false : true
}
window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
})
*/
