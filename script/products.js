let results = document.querySelector('.displayProducts')
let sortBtn = document.querySelector('[sort-products]')

let shoeStore = JSON.parse(localStorage.getItem('Products')) || [{
    id: 1,
    img: 'https://i.ibb.co/dP3YS9w/image-2.png',
    brandName: 'nike',
    description: 'NIKE AIR FORCE 1 LV8',
    price: 2000,
    quantity:1
},
{
    id: 2,
    img: 'https://i.ibb.co/tYDxx57/adidas.png',
    brandName: 'adidas',
    description: 'Originals Junior Retropy F2 J Grey/Navy Sneaker  ',
    price: 3000,
    quantity:1
},
{
    id: 3,
    img: 'https://i.ibb.co/CnD6nHK/Yeezy.png',
    brandName: 'Yeezy',
    description: 'Yeezy Boost 700 Wave Runner',
    price: 1800,
    quantity:1
},
{
    id: 4,
    img: 'https://i.ibb.co/h8ykh2w/image-8.png',
    brandName: 'nike',
    description: 'NIKE  AIR FORCE 1 ‘07 WB',
    price: 2400,
    quantity:1
},
{
    id: 5,
    img: 'https://i.ibb.co/3FZhG4M/lac.png',
    brandName: 'lacoste',
    description: 'L-GUARD BREAKER CT TEXTILE',
    price: 1800,
    quantity:1

}

]
// products = [...shoeStore]
localStorage.setItem('Products',JSON.stringify(shoeStore) ) 
function displayAddedProducts(value) {
    // I can loop through shoe store and push to products.
    // From the lessons, spread operator also does the same, what if I assingn the spread to products?
   
   let test = JSON.parse(localStorage.getItem('Products'))


//    console.log(test);
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
    }else{
    // Else it must display a spinner if there are not products in the localstorage
    
            results.innerHTML =
                `
            <div class=" justify-content-center d-flex">
            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>  
            </div>
            `

    }
}
displayAddedProducts(shoeStore)


let search = document.getElementById('searchInput')
function sortItemsByPrice() {
    let items = shoeStore.sort((i, ii) => {
        return ii.price - i.price
    })
    displayAddedProducts(items)
}

function searchItemByName() {
    let inputSearchValue = search.value;
    if (inputSearchValue) {
        let filterByName = shoeStore.filter((iitem) => {
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
        displayAddedProducts(shoeStore)
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
