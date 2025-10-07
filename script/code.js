let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    function agregarAlCarrito(nombre, precio) {
      carrito.push({ nombre, precio });
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito();
    }

    function mostrarCarrito() {
      const contenedor = document.getElementById("carrito");
      contenedor.innerHTML = "";
      let total = 0;

      carrito.forEach((item, index) => {
        contenedor.innerHTML += `
          <p>${item.nombre} - $${item.precio} 
          <button onclick="eliminarDelCarrito(${index})">❌</button></p>`;
        total += item.precio;
      });

      contenedor.innerHTML += `<h3>Total: $${total}</h3>`;
    }

    function eliminarDelCarrito(index) {
      carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito();
    }

    // Mostrar el carrito al cargar la página
    mostrarCarrito();