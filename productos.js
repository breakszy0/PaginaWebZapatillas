
const productosBase = [
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
  },
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
  },
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
  },
  {
    id: 4,
    nombre: "Puma RS-X",
    precio: 89990,
    imagen: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369666/01/sv01/fnd/PNA/fmt/png/PUMA-RS-X"
  },
  {
    id: 5,
    nombre: "New Balance 550",
    precio: 119990,
    imagen: "https://nb.scene7.com/is/image/NB/m550sgw_nb_02_i?$pdpflexf2$&wid=440&hei=440"
  },
  {
    id: 6,
    nombre: "Converse Chuck Taylor All Star",
    precio: 59990,
    imagen: "https://www.converse.cl/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/1/0/100200_1.jpg"
  },
  {
    id: 7,
    nombre: "Vans Old Skool",
    precio: 64990,
    imagen: "https://images.vans.com/is/image/VansBrand/A4BV5BLK-HERO?wid=800&hei=800&fmt=png-alpha"
  },
  {
    id: 8,
    nombre: "Reebok Classic Leather",
    precio: 69990,
    imagen: "https://assets.reebok.com/images/w_600,f_auto,q_auto/0c7e2e2e7e2e4e2e8e2e8e2e8e2e8e2e_9366/Reebok_Classic_Leather_Shoes_White_GY0955_01_standard.jpg"
  },
  {
    id: 9,
    nombre: "Air Jordan 4RM",
    precio: 82990,
    imagen: "https://nikeclprod.vtexassets.com/arquivos/ids/1385195-800-800?v=638882123132930000&width=800&height=800&aspect=true",
    descripcion: "Las zapatillas Jordan Air 4 RM están diseñadas para acompañarte en cada paso de tu vida activa. Estas icónicas zapatillas son fácilmente reconocibles y se centran en ofrecer la máxima comodidad y durabilidad, sin sacrificar ese estilo tradicional que tanto amas. Con tecnología Max Air en el talón, cada pisada se siente amortiguada y ligera. La parte superior, que combina elementos como el ala, el ojal y el talón, crea una estructura resistente y flexible que abraza tu pie, asegurando que estés listo para cualquier aventura en tu día a día. ¡Prepárate para moverte con estilo y confianza!"
  }
];

let productosLS = JSON.parse(localStorage.getItem("productos")) || [];
const idsBase = new Set(productosBase.map(p => p.id));
let productos = [...productosBase];
if (productosLS.length === 1) {
  // Si solo hay un producto, restaurar catálogo base y sumarlo, y actualizar localStorage
  let productosRestaurados = [...productosBase];
  if (!idsBase.has(productosLS[0].id)) {
    productosRestaurados.push(productosLS[0]);
  }
  localStorage.setItem("productos", JSON.stringify(productosRestaurados));
  productos = productosRestaurados;
  // Forzar recarga visual
  setTimeout(() => window.location.reload(), 100);
} else {
  for (const prod of productosLS) {
    if (!idsBase.has(prod.id)) {
      productos.push(prod);
    }
  }
}

function renderProductosDestacados() {
  let productos = JSON.parse(localStorage.getItem("productos"));
  if (!productos || !productos.length) {
    productos = [
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
  }
  const contenedor = document.getElementById("productos-destacados");
  contenedor.classList.add("row", "g-4", "justify-content-center");
  contenedor.innerHTML = productos.map((producto, idx) => `
    <div class="col-md-4 d-flex align-items-stretch">
      <div class="card card-producto h-100 w-100 d-flex flex-column">
        <div class="d-flex align-items-center justify-content-center" style="min-height:260px;">
          <img src="${producto.imagen}" class="card-img-top" style="max-height:220px; object-fit:contain;" alt="${producto.nombre}">
        </div>
        <div class="card-body text-center d-flex flex-column justify-content-end flex-grow-1">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text fw-bold">$${producto.precio.toLocaleString()}</p>
          <button class="btn btn-primary btn-sm w-100 mb-2" onclick="agregarCarrito(${producto.id || idx+1}, '${producto.nombre}', ${producto.precio}, '${producto.imagen}')">Agregar al carrito</button>
          <a href="detalle-producto.html?id=${producto.id || idx+1}" class="btn btn-primary btn-sm mt-auto">Ver más</a>
        </div>
      </div>
    </div>
  `).join("");
}

renderProductosDestacados();

window.addEventListener("storage", function(e) {
  if (e.key === "productos") renderProductosDestacados();
});

// Función para agregar productos al carrito
function agregarCarrito(id, nombre, precio, imagen) {
  const productosIniciales = [
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
    },
    {
      id: 4,
      nombre: "Puma RS-X",
      precio: 89990,
      imagen: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369666/01/sv01/fnd/PNA/fmt/png/PUMA-RS-X"
    },
    {
      id: 5,
      nombre: "New Balance 550",
      precio: 119990,
      imagen: "https://nb.scene7.com/is/image/NB/m550sgw_nb_02_i?$pdpflexf2$&wid=440&hei=440"
    },
    {
      id: 6,
      nombre: "Converse Chuck Taylor All Star",
      precio: 59990,
      imagen: "https://www.converse.cl/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/1/0/100200_1.jpg"
    },
    {
      id: 7,
      nombre: "Vans Old Skool",
      precio: 64990,
      imagen: "https://images.vans.com/is/image/VansBrand/A4BV5BLK-HERO?wid=800&hei=800&fmt=png-alpha"
    },
    {
      id: 8,
      nombre: "Reebok Classic Leather",
      precio: 69990,
      imagen: "https://assets.reebok.com/images/w_600,f_auto,q_auto/0c7e2e2e7e2e4e2e8e2e8e2e8e2e8e2e_9366/Reebok_Classic_Leather_Shoes_White_GY0955_01_standard.jpg"
    },
    {
      id: 9,
      nombre: "Air Jordan 4RM",
      precio: 82990,
      imagen: "https://nikeclprod.vtexassets.com/arquivos/ids/1385195-800-800?v=638882123132930000&width=800&height=800&aspect=true",
      descripcion: "Las zapatillas Jordan Air 4 RM están diseñadas para acompañarte en cada paso de tu vida activa. Estas icónicas zapatillas son fácilmente reconocibles y se centran en ofrecer la máxima comodidad y durabilidad, sin sacrificar ese estilo tradicional que tanto amas. Con tecnología Max Air en el talón, cada pisada se siente amortiguada y ligera. La parte superior, que combina elementos como el ala, el ojal y el talón, crea una estructura resistente y flexible que abraza tu pie, asegurando que estés listo para cualquier aventura en tu día a día. ¡Prepárate para moverte con estilo y confianza!"
    }
  ];

  let productos = JSON.parse(localStorage.getItem("productos"));
  const idsBase = new Set(productosIniciales.map(p => p.id));
  let productosAdmin = Array.isArray(productos) ? productos.filter(p => !idsBase.has(p.id)) : [];
  let productosFinal = [...productosIniciales, ...productosAdmin];
  // Eliminar duplicados de Air Jordan 4RM
  productosFinal = productosFinal.filter((p, idx, arr) =>
    !(p.nombre === "Air Jordan 4RM" && arr.findIndex(x => x.nombre === "Air Jordan 4RM") !== idx)
  );
  // Si faltan zapatillas base, forzar restauración y actualizar localStorage
  const nombresBase = productosIniciales.map(p => p.nombre);
  if (!productosFinal.some(p => p.nombre === nombresBase[0]) ||
      !productosFinal.some(p => p.nombre === nombresBase[1]) ||
      !productosFinal.some(p => p.nombre === nombresBase[2])) {
    productosFinal = [...productosIniciales, ...productosAdmin];
    localStorage.setItem("productos", JSON.stringify(productosFinal));
  }
  productos = productosFinal;
}