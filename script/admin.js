let displayAminProducts = document.querySelector('[admin-data-output]')
let getStoredProducts = JSON.parse(localStorage.getItem('Products'))
let sortBtn = document.querySelector('[sort-admins]')

function displayProducts(value) {
    // I can loop through LOCALSTORAGE(ON PRODUCTS) and GET DATA THEN DISPLAY IT.
    displayAminProducts.innerHTML = "";

    // console.log(getStoredProducts); 

    if (value) {
        value.forEach((item) => {
            console.log(item.brandName);
            displayAminProducts.innerHTML +=
                `
                <tr>
                    <td>${item.brandName}</td>
                    <td>${item.description}</td>
                    <td>${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>


                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-success"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="bi bi-pencil"></i>
                        </button>
        
                        <!-- Modal -->
                        <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-black " id="">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body text-black ">
        
                                        <div class="mb-3 col-11">
                                            <label for="exampleInputEmail1" class="form-label">Brand Name</label>
                                            <input type="text" class="form-control product-name text-black" value="" id="exampleInputEmail1"
                                                brand-name aria-describedby="emailHelp">
                                        </div>
        
                                        <div class="mb-3 col-11">
                                            <label for="exampleInputEmail1" class="form-label">Description</label>
                                            <input type="text" class="form-control product-description" id="exampleInputEmail1"
                                                brand-description aria-describedby="emailHelp">
                                        </div>
                                        <div class="mb-3 col-11">
                                            <label for="exampleInputEmail1" class="form-label">Price</label>
                                            <input type="number" class="form-control product-price" id="exampleInputEmail1"
                                                brand-price aria-describedby="emailHelp">
                                        </div>
                                        <div class="mb-3 col-11">
                                            <label for="exampleInputEmail1" class="form-label">Quantity</label>
                                            <input type="number" class="form-control product-quantity" id="exampleInputEmail1"
                                                brand-quantity aria-describedby="emailHelp">
                                        </div>
                                        <div class="mb-3 col-11">
                                            <label for="exampleInputEmail1" class="form-label">Image</label>
                                            <input type="text" class="form-control product-image" id="exampleInputEmail1"
                                                brand-quantity aria-describedby="emailHelp">
                                        </div>
        
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-success " save-btn>Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>











                        
                        <button class="btn btn-danger">
                        <i class="bi bi-trash3"></i>
                   </button>
                    </td>

                </tr>

                `
        });
    } 

}
displayProducts(getStoredProducts)

// function editTheItem(...value){
//     value.forEach(item => {
//         item.forEach(item => {
//             // item.brandName = 
//             console.log(item.brandName);
//         })
//     });
// }
// editTheItem(getStoredProducts)


function getValuesFromInputAndPushToStorage(){
    let prod_name = document.querySelector('.product-name').value
    let prod_des = document.querySelector('.product-description').value
    let prod_price = document.querySelector('.product-price').value
    let prod_quantity = document.querySelector('.product-quantity').value
    let prod_img = document.querySelector('.product-image').value


    let adminProduct = {
        id:getStoredProducts.length + 1,
        brandName : prod_name,
        description : prod_des,
        quantity : prod_quantity,
        price : prod_price,
        img : prod_img
    }
    // console.log(adminProduct);
    displayAminProducts.innerHTML = ''

    getStoredProducts.unshift(adminProduct);
    localStorage.setItem('Products', JSON.stringify(getStoredProducts))
    
    // console.log(getStoredProducts);
    displayProducts(getStoredProducts)

}






function sortItemsByPrice() {
    let items = getStoredProducts.sort((item1, item2) => {
        return item1.price - item2.price
    })
    displayProducts(items)
}


sortBtn.addEventListener('click', sortItemsByPrice)


document.querySelector('[save-btn]').addEventListener('click',getValuesFromInputAndPushToStorage) // call the function that will add this previous image to the list in the local stogar