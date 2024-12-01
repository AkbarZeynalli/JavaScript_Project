document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Linkin varsayılan davranışını durdur

        const productName = this.getAttribute('data-product-name');
        const productPrice = this.getAttribute('data-product-price');

        // Sepet detaylarını güncelle
        document.getElementById('product-name').innerText = productName;
        document.getElementById('product-price').innerText = productPrice;

        // Sepet kutusunu göster
        document.getElementById('shopping-bag').style.display = 'flex'; // veya 'block' kullanabilirsiniz
    });
});