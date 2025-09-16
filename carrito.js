// Cargar o inicializar carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function renderCarrito() {
  const tabla = document.getElementById("tabla-carrito");
  const vacio = document.getElementById("carrito-vacio");
  const tbody = document.getElementById("carrito-body");

  if (!carrito.length) {
    tabla.classList.add("d-none");
    vacio.classList.remove("d-none");
    return;
  }

  vacio.classList.add("d-none");
  tabla.classList.remove("d-none");
  tbody.innerHTML = "";
  let total = 0;

  carrito.forEach((p, idx) => {
    const sub = p.precio * p.cantidad;
    total += sub;
    tbody.innerHTML += `
      <tr>
        <td><img src="${p.imagen}" alt="${p.nombre}" width="50"> ${p.nombre}</td>
        <td>$${p.precio.toLocaleString()}</td>
        <td>${p.cantidad}</td>
        <td>$${sub.toLocaleString()}</td>
        <td><button class="btn btn-sm btn-danger" onclick="eliminarProducto(${idx})">🗑️</button></td>
      </tr>
    `;
  });

  tbody.innerHTML += `
    <tr class="table-dark">
      <th colspan="3">TOTAL</th>
      <th>$${total.toLocaleString()}</th>
      <th></th>
    </tr>
  `;
}

function eliminarProducto(idx) {
  carrito.splice(idx, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
}

function vaciarCarrito() {
  if (confirm("¿Vaciar carrito?")) {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
  }
}

document.addEventListener("DOMContentLoaded", renderCarrito);