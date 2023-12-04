let products = [];
let results = document.querySelector('.displayProducts')

function displayProducts() {

    // create object with objects
    let shoeStore = {
        id: products.length + 1,
        img: 'https://i.postimg.cc/zDx4dPyh/image-2.png',
        brandName: 'Nike',
        description: 'NIKE AIR FORCE 1 LV8',
        price: 'R2000',
    }

    // add this item to the products array
    products.push(shoeStore)
    localStorage.setItem('Products', JSON.stringify(products))
    getProducts()
}
displayProducts()

let emptyList = [];

function displayMultipleProducts() {
    shoeStore2 = [
        {
            id: products.length + 1,
            img: 'https://i.postimg.cc/zDx4dPyh/image-2.png',
            brandName: 'Nike',
            description: 'NIKE AIR FORCE 1 LV8',
            price: 'R2000',
        },
        {
            id: products.length + 1,
            img: 'https://i.postimg.cc/zDx4dPyh/image-2.png',
            brandName: 'Nike',
            description: 'NIKE AIR FORCE 1 LV8',
            price: 'R2000',
        },
        {
            id: products.length + 1,
            img: 'https://i.postimg.cc/zDx4dPyh/image-2.png',
            brandName: 'Nike',
            description: 'NIKE AIR FORCE 1 LV8',
            price: 'R2000',
        },

    ]
}

function getProducts() {
    results.innerHTML = " "
    console.log()
    products.forEach(item => {
        console.log(item.brandName)

        results.innerHTML +=
            `
        <div class="card mt-5" style="width: 18rem;">
      <img src="${item.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.brandName}</h5>
        <p class="card-text">${item.description}</p>
        <a href="#" class="btn btn-primary text-center">${item.price}</a>
      </div>
    </div>
        
        `
    })
}

// 
