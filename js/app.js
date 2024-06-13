let cart = [];

let sideBarContainer = document.querySelector('#sideBarContainer');

function clearStorageAndCart() {
    cart = [];
    let currentStorage = JSON.parse(localStorage.getItem('CART'));
    if(currentStorage) {
        cart = currentStorage;
    }
}

function removeFromCart() {
    let removeLink = document.getElementsByClassName('removeLink')
    for (let i = 0; i < removeLink.length; i++) {
        removeLink[i].addEventListener('click', function(event) {
            clearStorageAndCart();
            let selectedProduct = cart.find((cartItem) => cartItem.id == event.target.id);
            let itemIndex = '';
            for (let j = 0; j < cart.length; j++) {
                if (cart[j].id == selectedProduct.id) {
                    itemIndex = cart.indexOf(cart[j]);
                }
            }
            cart.splice(itemIndex);
            localStorage.setItem('CART', JSON.stringify(cart));
            displayCart();
            if (cart.length == 0) {
                localStorage.clear();
            }
        });
    }
}

function clearCart() {
    let clearCartButton = document.getElementById('clearCartButton');
    clearCartButton.addEventListener('click', function() {
        cart = [];
        localStorage.clear();
        displayCart();
    });
}
clearCart();