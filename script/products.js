let products = [];
let results = document.querySelector('.displayProducts')


let shoeStore = [{
    id: 1,
    img: 'https://i.postimg.cc/zDx4dPyh/image-2.png',
    brandName: 'nike',
    description: 'NIKE AIR FORCE 1 LV8',
    price: '2000',
},
{
    id: 2,
    img: 'https://i.postimg.cc/NfLSZ7Xz/image-1.png',
    brandName: 'nike',
    description: 'NIKE AIR FORCE 1 NEXT NATURE',
    price: '3000',
},
{
    id: 3,
    img: 'https://i.postimg.cc/prc7pywC/image-3.png',
    brandName: 'nike',
    description: 'AIR  JORDAN 1 LOW',
    price: '1800',
},
{
    id: 4,
    img: 'https://i.postimg.cc/D0Q1TJwy/image-8.png',
    brandName: 'nike',
    description: 'NIKE  AIR FORCE 1 ‘07 WB',
    price: '2400',
},
{
    id: 5,
    img: 'https://i.postimg.cc/prc7pywC/image-3.png',
    brandName: 'nike',
    description: 'AIR  JORDAN 1 LOW',
    price: '1800',
}

]

function displayAddedProducts(products) {
    // I can loop through shoe store and push to products.
    // products.forEach() 
    // From the lessons, spread operator also does the same, what if I assingn the spread to products?
    
    products = [...shoeStore]
    // console.log(products);
    if (products) {
        localStorage.setItem('Products', JSON.stringify(products))
        products.forEach(ii => {
            // console.log(ii.brandName);
            results.innerHTML +=
                `
            <div class="card mt-5 mb-4" style="width: 18rem;">
            <img src="${ii.img}" class="card-img-top" alt="...">
            <div class="card-body mt-3">
           <h5 class="card-title text-center">${ii.brandName}</h5>
           <p class="card-text text-center">${ii.description}</p>
           <a href="#" class="btn products-btn mt-3 text-center ">ADD TO CART</a>
            </div>
           </div>
            `

        })
    }

}
displayAddedProducts(products )

// I think I should have a get function, that gets the data from the arr and then that get function I will use it to 
// I will use it to display inside the one that add items
