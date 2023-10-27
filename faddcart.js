
const cart = [];

function addToCart(productName,price){

    function findProduct(itme){
        return itme.productName === productName;
    }

    const product = cart.find(findProduct);

    if (product){
        product.quantity++;
    } else{
        cart.push({productName,price,quantity: 1});
    }

    updateCart();
}


function removeFromCart(productName){
    const index = cart.findIndex(item.productName === productName);

if (index !== -1){
    if (cart[index].quantity>1){
        cart[index].quantity--;
    } else {
        cart.splice(index,1);
    }
    updateCart();
}
}

function updateCart(){
    const cartItmes = document.getElementById("cartItems");
    cartItmes.innerHTML = "";
    
    let total = 0;

    cart.forEach(itme =>{
        const cartItme = document.createElement("li");
        const removerButton = document.createElement("button");
        removerButton.textContent ="Remove";
        removerButton.className = "remove";
        removerButton.onclick = () => removeFromCart(itme.productName);

        cartItme.textContent = `${item.productName} x${item.quantity}-$${(item.price* item.quantity).toFixed(2)}`;

        cartItme.appendChild(removeButton);
        cartItmes.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    const cartTotal = document.getElementById("cartTotal");
    cartTotal.textContent = total.toFixed(2);
}

function checkout(){

    alert("Checkout is not implemented in this example.");
}