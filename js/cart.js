let cartCardContainer = document.querySelector("#cartCardContainer");
function displayCartProducts() {
    clearStorageAndCart();
    cartCardContainer.innerHTML = "";
    if (cart.length > 0) {
        cart.forEach()
    }
}
                `
                <div class="cartCard">
                    <div class="cartCardFlex">
                        <img src="images/shop/thumbnails/ClownUmbrella_Thumb.jpg" alt="Clown with an umbrella.">
                        <p class="cartTitle">CLown Umbrella</p>
                        <p class="cartDescription">A porcelain figurine of a clown holding an umbrella and riding a unicycle</p>
                        <div class="cartQuantity">
                            <input type="number" value="1" min="1" max="5">
                        </div>
                        <p class="cartPrice">&dollar; 29.95</p>
                    </div>          
                    <p class="textAlignRight removeMargins">
                        <a class="removeLink" href="#">Remove</a>
                    </p>
                </div>
                `