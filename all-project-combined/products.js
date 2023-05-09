document.querySelectorAll(".darkmode").forEach((dark) => {
    dark.addEventListener("click", function () {

        document.body.classList.toggle("dark")


        let bodyState;

        if (document.body.classList.contains("dark")) {
            bodyState = "DARK"
        }
        else {
            bodyState = "light"
        }
        localStorage.setItem("theme", JSON.stringify(bodyState))
    })

    let fromLocalStorage = JSON.parse(localStorage.getItem("theme"))

    if (fromLocalStorage === "DARK") {
        document.body.classList.add("dark")
        document.body.classList.add("transition")
    }
    else {
        document.body.classList.add("transition")
    }

})

//function for toggling the navigation-bar
document.querySelector(".navigation-bar-container").addEventListener("click", function () {
    document.querySelector(".pages-container-800px").classList.toggle("display")
    document.querySelector(".navigation-bar-container").classList.toggle("transition-2")
})


///jQueryCode for toggling the search bar
   $(document).ready(function(){
       $("#search").click(function(){
           $("#input").toggle(1000)
       })
   })

//scroll effect
window.addEventListener("scroll", function () {
    let scrollHeight = this.window.pageYOffset
    if (scrollHeight >= 100) {
        document.querySelector(".idk").classList.add("fixed-nav")
        this.document.querySelector(".idk").classList.add("transition")
    }
    else {
        this.document.querySelector(".idk").classList.remove("fixed-nav")
        this.document.querySelector(".idk").classList.add("transition")
    }
})


// displaying all products

function displayProducts() {
    let result = ""
    products.map((product) => {
        const { id, img, title, price, description, item } = product
        return (
            result +=
            `
            <div class="products">
            <div class="image-container">
                <img src=${img} alt="" class="product-image">
            </div>
            <div class="price-title-container">
                <div class="title-container">
                    <h2>${title}</h2>
                </div>
                <div class="price-container">
                    <h2>₦${price}</h2>
                </div>
            </div>
            <div>
                <h2 class="description">${description}</h2>
            </div>

            <button onclick="addToCart(${id},(${price}))" id=${id} class="addToCart">Add to cart</button>
        </div>
    </div>
            `
        )
    })
    document.querySelector(".product-container").innerHTML = result
}
window.addEventListener("DOMContentLoaded", function () {
    this.setTimeout(displayProducts, 2000)
    calulateTotalBill()
})

let cartItems = []
function addToCart(id, price) {
    let search = cartItems.find((item) => item.id === id)
    if (search === undefined) {
        cartItems.push({
            id: id,
            price: price,
            item: 1
        })
        document.querySelectorAll(".cart-notification").forEach((cartNotification)=>{
            cartNotification.classList.add("display")
        })
        localStorage.setItem("cart", JSON.stringify(cartItems))
     $(document).ready(function(){
     $(".state-content").text("Successfully added to the cart.Please Refresh to see changes!")
     .css({color: "green"}).fadeToggle(4000).hide(4000)

    })
    }
    else {
        document.getElementById(id).innerHTML = "Item Already in cart"
        document.querySelectorAll(".cart-notification").forEach((cartNotification)=>{
            cartNotification.classList.remove("display")
        })
        $(document).ready(function(){
         $(".state-content").text("Item Already in cart")
         .css({color: "red"}).fadeToggle(4000).hide(4000)

        })
    }

}


let itemsInCart = JSON.parse(localStorage.getItem("cart"))
let displayItemsInCartDOM = document.querySelector(".display-cart")
//console.log(itemsInCart)

function displayItemsInCart() {
    let cartDOM = ""
    itemsInCart.map((items) => {
        const { id, price, item } = items
        return cartDOM += `
       <div class="cart-container">
        <div class="image-container">
            <img src="./pexels-pixabay-461431.jpg"alt="problem" class="cart-image">
        </div>
        <div class="item-content">
            <h2>Cake</h2>
            <h3>₦${price * item}</h3>
            <button onclick="removeItem(${id})" style="cursor:pointer;">remove Item</button>
        </div>
        <div class="quantity">
            <p>Qty: </p><br>
            <h2 class=${id}>${item}</h2>
        </div>
       </div>
        `

    })
    displayItemsInCartDOM.innerHTML = cartDOM
}

displayItemsInCart()
// localStorage.clear()


// function for removing each item in the cart
function removeItem(id) {
    let deleteItem = itemsInCart.filter((item) => item.id !== id)
    displayItemsInCart(id)
    localStorage.setItem("cart", JSON.stringify(deleteItem))
    $(".state-content").text("Item successfully removed.Please Refresh to see changes!")
    .css({color: " #8e7fc0"}).fadeToggle(4000).hide(4000)

}
//end of function


// function for clearing the cart
// function clearAllItemsInCart() {
// itemsInCart = []
// localStorage.removeItem("cart")
//  displayItemsInCartDOM = ""
// }
//end of function


function calulateTotalBill() {
    let amount = itemsInCart.map((item) => {
       return item.item * item.price
    }).reduce((x, y) => x + y, 0)

    document.querySelector("#total-amount").innerHTML =  "₦" +amount
}


//the date for the footer
date = new Date().getFullYear()
document.querySelector(".current-date").innerHTML = date
//end of function



//functions for toggling the cart
document.querySelectorAll("#cart").forEach((btn) => {
    btn.addEventListener("click", function () {
        document.querySelector(".all-cart-items").classList.toggle("display")
        document.querySelector(".container-store").classList.toggle("display-none")
        document.querySelector(".footer-all-container").classList.toggle("display-none")
         document.querySelectorAll(".cart-notification").forEach((cartNotification)=>{
            cartNotification.classList.remove("display")
        })
    })
})

document.querySelectorAll(".view-cart").forEach((btn) => {
    btn.addEventListener("click", function () {
        document.querySelector(".all-cart-items").classList.toggle("display")
        document.querySelector(".container-store").classList.toggle("display-none")
        document.querySelector(".footer-all-container").classList.toggle("display-none")
        document.querySelector(".main-form-container").classList.toggle("display-none")
         document.querySelectorAll(".cart-notification").forEach((cartNotification)=>{
            cartNotification.classList.remove("display")
        })
    })
})

document.querySelector(".close-cart").addEventListener("click", function () {
    document.querySelector(".all-cart-items").classList.remove("display")
    document.querySelector(".footer-all-container").classList.remove("display-none")
    document.querySelector(".container-store").classList.remove("display-none")
    document.querySelectorAll(".cart-notification").forEach((cartNotification)=>{
        cartNotification.classList.remove("display")
    })
})
//end of function


document.querySelectorAll(".form-check-out").forEach((textBox) =>{
  textBox.addEventListener("click",function(){
    textBox.previousElementSibling.classList.toggle("display-none")
    textBox.classList.toggle("special")
  })
})

function checkOut(){
    document.querySelector(".main-form-container").classList.toggle("display")
       $(document).ready(function(){
             $(".state-content").text("Please fill in the form")
             .css({color: " #8e7fc0"}).fadeToggle(4000).hide(4000)

            })
}

document.querySelector(".close-form").addEventListener("click",function(){
    document.querySelector(".main-form-container").classList.remove("display")
})

let userDetailsForDelivery = []
document.querySelector(".check-out-btn").addEventListener("click",function(){
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let address = document.getElementById("address").value
  let phone = document.getElementById("phone").value

  if(name && email && address && phone){
    userDetailsForDelivery.push({
        name,
        email,
        address,
        phone
    })
  }
  else{
     $(document).ready(function(){
             $(".state-content").text("Please fill out all input field")
             .css({color: "red"}).fadeToggle(4000).hide(4000)

        })
  }
})

