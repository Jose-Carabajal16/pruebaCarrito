const listaProductos = [
    {
        id: 1,
        imagen: "../images/mesadetrabajo2.jpg",
        titulo: "Aros Colgantes Rufina", 
        descripcion: "Aros de oro alargados envuelto en perlas. Elegancia real para resaltar tu belleza.",
        precio: 3000
    },
    {
        id: 2,
        imagen: "../images/mesadetrabajo3.jpg",
        titulo: "Argollas Kika", 
        descripcion: "Argollas simples, elegantes, de plata fina. Un toque de distinción para tu estilo diario.",
        precio: 3000
    },
    {
        id: 3,
        imagen: "../images/mesadetrabajo4.jpg",
        titulo: "Aros Colgantes Luna", 
        descripcion: "Oro brillante abraza perlas grandes. Aros que deslumbran con encanto atemporal.",
        precio: 3000
    },
    {
        id: 4,
        imagen: "../images/mesadetrabajo5.jpg",
        titulo: "Pulceras Isabella", 
        descripcion: "Dos pulseras, infinitas posibilidades. Dijes delicados en oro para un toque de armonía.",
        precio: 3000
    },
    {
        id: 5,
        imagen: "../images/mesadetrabajo6.jpg",
        titulo: "Collar con dije Marte", 
        descripcion: "Collar único de oro con perlas grandes. Glamour y sofisticación que roban miradas.",
        precio: 3000
    },
    {
        id: 6,
        imagen: "../images/mesadetrabajo7.jpg",
        titulo: "Pack de anillos Afrodita", 
        descripcion: "Elegancia en cada dedo con este pack de 5 anillos de oro. Estilo versátil y radiante.",
        precio: 3000
    },
    {
        id: 7,
        imagen: "../images/produ@3x-8.png",
        titulo: "Aros Colgantes Paris", 
        descripcion: "Aros colgantes de oro radiante con perlas grandes. Sofisticación y estilo en ada detalle.",
        precio: 3000
    },
    {
        id: 8,
        imagen: "../images/produc@3x-8.png",
        titulo: "Pulceras Roma", 
        descripcion: "Pulsera refinada con dije de oro, fusionando elegancia y estilo. Tu historia, tu joya.",
        precio: 3000
    },

];
//variables dom
const cardsContainer = document.querySelector("#cards-container");
//console.log(cardContainer)
let botonAgregarCarrito = document.querySelectorAll(".agregar-carrito");
//console.log(agregarCarrito)

// div card container
function agregarProductos(todosProductos){
    // Verificamos si cardsContainer no es null antes de agregar productos
    if (cardsContainer !== null) {
        // Recorrer los productos del array
        todosProductos.forEach(producto => {
            // Contenedor de cada tarjeta
            // Creamos el div
            const contenedorCard = document.createElement("div")
            // Le agregamos la clase
            contenedorCard.classList.add("card");
            contenedorCard.innerHTML = `
                <img src="${producto.imagen}" class="card-img-top" alt="aros colgantes">
                <div class="card-body">
                    <h5 class="card-title">${producto.titulo}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-precio">$${producto.precio}</p>
                    <a href="#" id="${producto.id}" class="agregar-carrito btn btn-primary">Agregar a Carrito</a>
                </div>
            `;

            // Agregamos la tarjeta al contenedor solo si cardsContainer no es null
            cardsContainer.append(contenedorCard);
        });
    } else {
        console.log("El elemento cardsContainer no está presente en esta página.");
    }

    // Después de agregar los productos al DOM, actualizamos los botones
    botonAgregar();
}

// Llamamos a la función para agregar los productos
agregarProductos(listaProductos);


// Actualizar botones cada vez que los productos se carguen
function botonAgregar(){
    botonAgregarCarrito = document.querySelectorAll(".agregar-carrito");
    //console.log(botonAgregarCarrito);
    botonAgregarCarrito.forEach(boton => {
        boton.addEventListener("click", productosAlCarrito);
    })
}
//todos los productos se agregaran en un array vacio
const productosAlArray = [];
function productosAlCarrito(evento){
    evento.preventDefault();//evitamos el comportamiento predeterminado del a
    const id = parseInt(evento.currentTarget.id);
    const productoAgregado = listaProductos.find(producto => producto.id === id);
    //console.log(productoAgregado);
    //verificar si existe el producto en el array
    //console.log(productosAlArray.some(producto => producto.id === id));
    if(productosAlArray.some(producto => producto.id === id)){
        const i = productosAlArray.findIndex(producto => producto.id === id)
        //console.log(i)
        productosAlArray[i].cantidad+=1;

    }else{
        productoAgregado.cantidad = 1;
        productosAlArray.push(productoAgregado);
        //console.log(productosAlArray);
    }
    console.log(productosAlArray)
    //guardar en localStorage
    localStorage.setItem("productos", JSON.stringify(productosAlArray));

}


//ALMACENAMIENTO CARRITO DE COMPRAS
const productosGuardadosEnCarrito = JSON.parse(localStorage.getItem("productos"));
//console.log(productosEnCarrito);

    const carritoVacio = document.querySelector("#carrito-vacio");
    const carritoProductos = document.querySelector("#carrito-productos");
    const carritoAcciones = document.querySelector("#carrito-acciones");
    const carritoComprado = document.querySelector(".carritoComprado");
    console.log(carritoVacio);
    if(productosGuardadosEnCarrito){
        carritoVacio.classList.add("ocultar")
    }


