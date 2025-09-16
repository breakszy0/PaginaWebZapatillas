const productos = [
  {
    id: 1,
    nombre: "Air Jordan 3 Retro Black Cat",
    precio: 280000,
    imagen: "https://newcop.com/cdn/shop/files/01_ff7c9471-f6f5-470f-960b-08a527f6e8bf.png?height=600&v=1736528666"
  },
  {
    id: 2,
    nombre: "Adidas Campus 00S",
    precio: 94990,
    imagen: "https://newcop.com/cdn/shop/files/adidas-campus-00s-core-black-1_2000x_f891c99f-d7be-41e6-aa92-9000abde32d0.webp?v=1682784882"
  },
  {
    id: 3,
    nombre: "Nike Air Max 97",
    precio: 159990,
  imagen: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6a3671b8-f115-44f6-9ab6-3798d55210eb/custom-nike-air-max-97-shoes-by-you.png"
  }
];

const contenedor = document.getElementById("productos-destacados");
contenedor.classList.add("row", "g-4", "justify-content-center");
contenedor.innerHTML = productos.map(producto => `
  <div class="col-md-4 d-flex align-items-stretch">
    <div class="card card-producto h-100 w-100 d-flex flex-column">
      <div class="d-flex align-items-center justify-content-center" style="min-height:260px;">
        <img src="${producto.imagen}" class="card-img-top" style="max-height:220px; object-fit:contain;" alt="${producto.nombre}">
      </div>
      <div class="card-body text-center d-flex flex-column justify-content-end flex-grow-1">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text fw-bold">$${producto.precio.toLocaleString()}</p>
        <button class="btn btn-primary btn-sm w-100 mb-2" onclick="agregarCarrito(${producto.id}, '${producto.nombre}', ${producto.precio}, '${producto.imagen}')">Agregar al carrito</button>
        <a href="detalle-producto.html?id=${producto.id}" class="btn btn-primary btn-sm mt-auto">Ver más</a>
      </div>
    </div>
  </div>
`).join("");

// Función para agregar productos al carrito
function agregarCarrito(id, nombre, precio, imagen) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const existente = carrito.find(p => p.id === id);
  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ id, nombre, precio, imagen, cantidad: 1 });
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`Producto (${nombre}) agregado al carrito`);
}