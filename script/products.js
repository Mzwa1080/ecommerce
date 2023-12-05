let products = [];
let results = document.querySelector('.displayProducts')


let shoeStore = [{
    id: 1,
    img: 'https://i.postimg.cc/zDx4dPyh/image-2.png',
    brandName: 'Nike',
    description: 'NIKE AIR FORCE 1 LV8',
    price: 'R2000',
},
{
    id: 2,
    img: 'https://i.postimg.cc/NfLSZ7Xz/image-1.png',
    brandName: 'Nike',
    description: 'NIKE AIR FORCE 1 NEXT NATURE',
    price: 'R3000',
},
{
    id: 3,
    img: 'https://i.postimg.cc/prc7pywC/image-3.png',
    brandName: 'Nike',
    description: 'AIR  JORDAN 1 LOW',
    price: 'R1800',
},
{
    id: 4,
    img: 'https://i.postimg.cc/D0Q1TJwy/image-8.png',
    brandName: 'Nike',
    description: 'NIKE  AIR FORCE 1 ‘07 WB',
    price: 'R2400',
},
{
    id: 5,
    img: 'https://i.postimg.cc/prc7pywC/image-3.png',
    brandName: 'Nike',
    description: 'AIR  JORDAN 1 LOW',
    price: 'R1800',
}



]

function displayAddedProducts() {
// I can loop through shoe store and push to products.
// products.forEach() 
// From the lessons, spread operator also does the same, what if I assingn the spread to products?
    products = [...shoeStore]
    console.log(products);
    if(products){
        localStorage.setItem('Products', JSON.stringify(products))
        products.forEach(ii => {
            console.log(ii.brandName);
            results.innerHTML += 
            `
            <div class="card mt-5 mb-4" style="width: 18rem;">
            <img src="${ii.img}" class="card-img-top" alt="...">
            <div class="card-body mt-3">
           <h5 class="card-title text-center">${ii.brandName}</h5>
           <p class="card-text text-center">${ii.description}</p>
           <a href="#" class="btn products-btn mt-3 text-center">${ii.price}</a>
            </div>
           </div>
            `
            
        })
    }

}
displayAddedProducts()


