document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { id: 1, name: "Pez Robot", price: 35000 },
        { id: 2, name: "Caña de Pescar", price: 15000 },
        { id: 3, name: "Torre de Tres Niveles", price: 17000 },
    ];

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const updateCartUI = () => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    };

    document.querySelectorAll('.btn-add-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.dataset.id);
            const productName = button.dataset.name;
            const productPrice = parseInt(button.dataset.price);

            const product = { id: productId, name: productName, price: productPrice };
            carrito.push(product);
            updateCartUI();
            alert(`Producto "${productName}" añadido correctamente.`);
        });
    });

    updateCartUI();
});
