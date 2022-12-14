// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        // Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        // Using the "cartlist" array that contains all the items in the shopping cart, 
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (i = 0; i < products.length; i++) {
        if (id == products[i].id) {
            cartList.push(products[i]);
        }
    }
    console.log(cartList);
}

// Exercise 2
function cleanCart() {
    cartList.length = 0;
    console.log(cleanCart);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for (i = 0; i < cartList.length; i++) {
        total += cartList[i].price;
        //console.log(total);
    }
}

// Exercise 4
function generateCart() {

    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    // Crear bucle en carList y hemos de validar cada elemento si existe en el array cart.
    // Si no existe: a??adimos ese elemento al array cart y le agregamos la propietat quantity amb valor 1, despu??s hacer push).   
    // Si existe el elemento.id en el array cart, lo ??nico que tenemos que hacer es incrementar la propiedad quantity + 1 (en el array cart).

    for (i = 0; i < cartList.length; i++) {
        let validate = false;
        for (j = 0; j < cart.length; j++) {
            if (cartList[i].id == cart[j].id) {
                validate = true;
                break;
            }
        }
        if (!validate) {
            cartList[i].quantity = 1;
            cart.push(cartList[i]);
        }
    }

    if (validate) {
        cart[j].quantity += 1;
    }
    console.log(cart)
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (i = 0; i < cart.length; i++) {
        const validateOffer = cart[i].offer;

        if (validateOffer && cart[i].quantity >= cart[i].offer.number) {
            let discount = cart[i].price * (cart[i].offer.percent / 100);
            cart[i].subtotalWithDiscount = cart[i].price - discount;

        } else {
            cart[i].subtotalWithDiscount = cart[i].price;
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    const table = document.getElementById("cart_list");

    table.innerHTML = "";

    for (i = 0; i < cart.length; i++) {
        let row = `<tr>
                    <td>${cart[i].name}</td>
                    <td>${cart[i].price}</td>
                    <td>${cart[i].quantity}</td>
                    <td>${cart[i].subtotalWithDiscount}</td>
        </tr>`
        if (cart[i] === cart.id) {

        } else {
            `<tr>
            <td>${cart[i].name}</td>
        <td>${cart[i].price}</td>
        <td>${cart[i].quantity}</td>
        <td>${cart[i].subtotal}</td>
</tr>`
        }

        table.innerHTML += row;
        console.log(cart)
    }

}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}