let displayAminProducts = document.querySelector('[admin-data-output]')
let getStoredProducts = JSON.parse(localStorage.getItem('Products'))
let sortBtn = document.querySelector('[sort-admins]')

function displayProducts(value) {
    // I can loop through LOCALSTORAGE(ON PRODUCTS) and GET DATA THEN DISPLAY IT.
    displayAminProducts.innerHTML = "";

    // console.log(getStoredProducts); 

    if (value) {
        value.forEach((item, i) => {
            displayAminProducts.innerHTML +=
                `
                <tr>
                    <td>${item.brandName}</td>
                    <td>${item.description}</td>
                    <td>${item.price}</td>
                    <td>


                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-success"  data-bs-toggle="modal" data-bs-target="#updateData${item.id}">
                        <i class="bi bi-pencil"></i>
                        </button>
        
                        <!-- Modal -->
                        <div class="modal fade " id="updateData${item.id}" tabindex="-1" aria-labelledby="updateDatalabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-black " >Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body text-black ">
        
                                        <div class="mb-3 col-11">
                                            <label for="brandName${item.id}" class="form-label">Brand Name</label>
                                            <input type="text" class="form-control product-name text-black" value="${item.brandName}" id="brandName${item.id}"
                                                brand-name aria-describedby="emailHelp">
                                        </div>
        
                                        <div class="mb-3 col-11">
                                            <label for="description${item.id}" class="form-label">Brand Description</label>
                                            <input type="text" class="form-control product-description" value="${item.description}" id="description${item.id}"
                                                brand-description aria-describedby="emailHelp">
                                        </div>
                                        <div class="mb-3 col-11">
                                            <label for="price${item.id}" class="form-label">Price</label>
                                            <input type="number" class="form-control product-price" value="${item.price}" id="price${item.id}"
                                                brand-price aria-describedby="emailHelp">
                                        </div>
                                        <div class="mb-3 col-11">
                                        <label for="quantity${item.id}" class="form-label">quantity</label>
                                        <input type="number" class="form-control product-quantity" value="${item.quantity}" id="quantity${item.id}"
                                            brand-quantity aria-describedby="emailHelp">
                                        </div>
                                        <div class="mb-3 col-11">
                                        <label for="quantity${item.id}" class="form-label">Img</label>
                                        <input type="text" class="form-control product-img" value="${item.img}" id="img${item.id}"
                                            brand-quantity aria-describedby="emailHelp">
                                        </div>
                                    
                                    
        
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" onclick='' data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-success " onclick='new EditTheItem(${JSON.stringify(item)}, ${JSON.stringify(i)})' save-btn>Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                        
                        <button class="btn btn-danger" onclick=''>
                            <i class="bi bi-trash3"></i>
                         </button>
                    </td>

                </tr>

                `
        });
    }

}
displayProducts(getStoredProducts)

function EditTheItem(item, index) {
    this.id = item.id
    this.brandName = document.querySelector(`#brandName${item.id}`).value
    this.description = document.querySelector(`#description${item.id}`).value
    this.price = document.querySelector(`#price${item.id}`).value
    this.quantity = document.querySelector(`#quantity${item.id}`).value
    this.img = document.querySelector(`#img${item.id}`).value


    getStoredProducts[index] = Object.assign({}, this)
    // save to the local storage set
    localStorage.setItem('Products', JSON.stringify(getStoredProducts))
    // display
    displayProducts(getStoredProducts)
    location.reload()
}


function deleteEachItem(index) {
    try {
        getStoredProducts.splice(index, 1)
        localStorage.setItem('Products', JSON.stringify(getStoredProducts))
        displayProducts(getStoredProducts)
        location.reload()
    } catch (e) {
        e.message
    }
}

function getValuesFromInputAndPushToStorage() {
    let prod_name = document.querySelector('.product-name').value
    let prod_des = document.querySelector('.product-description').value
    let prod_price = document.querySelector('.product-price').value
    let prod_quantity = document.querySelector('.product-quantity').value
    let prod_img = document.querySelector('.product-image').value


    let adminProduct = {
        id: getStoredProducts.length + 1,
        brandName: prod_name,
        description: prod_des,
        quantity: prod_quantity,
        price: prod_price,
        img: prod_img
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


document.querySelector('[save-btn]').addEventListener('click', getValuesFromInputAndPushToStorage) // call the function that will add this previous image to the list in the local stogar


