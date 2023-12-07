let products = [];
let results = document.querySelector('.displayProducts')
let sortBtn = document.querySelector('[sort-products]')

let shoeStore = [{
    id: 1,
    img: 'https://i.postimg.cc/zDx4dPyh/image-2.png',
    brandName: 'nike',
    description: 'NIKE AIR FORCE 1 LV8',
    price: '2000',
    quantity:1
},
{
    id: 2,
    img: 'https://i.postimg.cc/jjp7FYSy/Screenshot-2023-12-06-092205.pngg',
    brandName: 'adidas',
    description: 'ROADRUNNER  ',
    price: '3000',
    quantity:1
},
{
    id: 3,
    img: 'https://i.postimg.cc/sg0S5hF6/Screenshot-2023-12-06-092049.png',
    brandName: 'Yeezy',
    description: 'WALK IN THE OCEAN',
    price: '1800',
    quantity:1
},
{
    id: 4,
    img: 'https://i.postimg.cc/D0Q1TJwy/image-8.png',
    brandName: 'nike',
    description: 'NIKE  AIR FORCE 1 ‘07 WB',
    price: '2400',
    quantity:1
},
{
    id: 5,
    img: 'https://i.postimg.cc/JzhZyQFH/Screenshot-2023-12-06-092228.png',
    brandName: 'lacoste',
    description: 'L-GUARD BREAKER CT TEXTILE',
    price: '1800',
    quantity:1

}

]
products = [...shoeStore]
function displayAddedProducts(value) {
    // I can loop through shoe store and push to products.
    // From the lessons, spread operator also does the same, what if I assingn the spread to products?
   localStorage.setItem('Products',JSON.stringify(products) ) || []
    results.innerHTML = "";
    if (value) {
        // forEach(item, i)   - - - the i-> will come in handy for deleting or updating the value
        value.forEach((eachItem) => {
            results.innerHTML +=
                `
            <div class="card text-center mt-3" style="width: 18rem;">
                <img src="${eachItem.img}" class=" text-center card-img-top" alt="...">
                    <div class="card-body">
                        
                        <div class="card-header align-items-center mt-4">${eachItem.brandName.toUpperCase()}</div>

                        <p class="card-text">${eachItem.description}</p>
                        <div class="card-header align-items-center mb-4">R${eachItem.price}</div>
                        <button class="btn btn-primary" onclick='addItemToCart(${JSON.stringify(eachItem)})'>Add to Cart</button>


                    </div>
                </div>
            `
        });
    }
}
displayAddedProducts(products)

let search = document.getElementById('searchInput')
function sortItemsByPrice() {
    let items = products.sort((i, ii) => {
        return ii.price - i.price
    })
    displayAddedProducts(items)
}

function searchItemByName() {
    let inputSearchValue = search.value;
    if (inputSearchValue) {
        let filterByName = products.filter((iitem) => {
            return iitem.brandName.toLowerCase().includes(inputSearchValue.toLowerCase())
        })
        displayAddedProducts(filterByName)
        if (filterByName.length > 0) {
            displayAddedProducts(filterByName)
        }
        else {
            results.innerHTML = ''
            results.innerHTML =
                `
            <h2 class="text-center">${inputSearchValue}  is not found! </h2>
            `
        }
    } else {
        results.innerHTML = ''
        displayAddedProducts(products)
    }

}



let addToCart = []
function addItemToCart(item) {
    if (item) {
        // push item into an array
        addToCart.push(item)
        // Save array on your localstorage
        localStorage.setItem('addToCart', JSON.stringify(addToCart))
    }
}




search.addEventListener('keyup', searchItemByName)
sortBtn.addEventListener('click', sortItemsByPrice)
