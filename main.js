/*
Tema elegido, tienda de e-commerce de venta de cactus y articulos
varios de jardineria, por el momento se realizo el listar productos,
crear producto, buscar producto en donde se aplicaron los contenidos
vistos hasta el momento. 
*/

let productos = [
    {
        categoriaProducto : "cactus",
        nombreProducto: "Opuntia",
        imagenProducto: "./img/cactus.png",
        precioProducto : 1000
    },
    {
        categoriaProducto : "cactus",
        nombreProducto: "Echinocactus",
        imagenProducto: "./img/cactus.png",
        precioProducto : 800
    },
    {
        categoriaProducto: "cactus",
        nombreProducto: "Epiphyllum",
        imagenProducto: "./img/cactus.png",
        precioProducto : 300
    }

];


localStorage.setItem("productos",JSON.stringify(productos));
productos = JSON.parse(localStorage.getItem("productos")) || [] ; 

const agregarProducto = (categoriaProducto,nombreProducto,precioProducto,imagenProducto,)=>{
    const producto = {
        categoriaProducto,
        nombreProducto,
        imagenProducto,
        precioProducto
    }
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
    return producto;
}

const crearCard = (producto)=>{
    const app = document.getElementById("contenidoPagina");
    const element = document.createElement("div");
    element.className = "estilosContenedor"
    element.innerHTML = `
                        <div class="card" style="width: 18rem;">
                            <img src="${producto.imagenProducto}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h2 class="card-title">${producto.nombreProducto}</h2>
                                <h3>Categoria:  ${producto.categoriaProducto}</h3>
                                <h3> $ ${producto.precioProducto}</h3>
                            </div>
                        </div>
                        `
    app.append(element)
}

const crearCardMensaje = (mensaje)=>{
    const app = document.getElementById("contenidoPagina");
    app.innerHTML = '';
    const element = document.createElement("div");
    element.className = "estilosContenedor"
    element.innerHTML = `
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h2 class="card-title">No se encontro el producto ${mensaje.value}</h2>
                            </div>
                        </div>
                        `
    app.append(element)
}


const mostrarProductos = (productos) => {
    const app = document.getElementById("contenidoPagina");
    app.innerHTML = '';

    productos.forEach((producto) => {
        crearCard(producto);
    });
}

const main = () =>{
  
    
    const botones = document.getElementById("botonera");
    botones.className = "estilosCentrado";

    const listarProductos = document.getElementById("listarProductos");
    listarProductos.addEventListener("click",()=>{
        mostrarProductos(productos)
    }) 
     
    const app = document.getElementById("contenidoPagina");
    const element = document.createElement("div");
    element.className = "estilosCentrado";
    element.innerHTML = `
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h2 class="card-title">Se aplicaron los siguientes contenidos: </h2>
                                <ul>
                                <li>Tipos de datos numericos, bolleanos, objetos, etc.</li>
                                <li>variables cost y let.</li>
                                <li>Ciclos Foreach</li>
                                <li>Condicionales if else</li>
                                <li>Se utilizó el paradigma funcional</li>
                                <li>Se utilizó array</li>
                                <li>Métodos de busqueda como filter</li>
                                <li>Se manipulo el DOM con getElementById, createElemet, innerText, append, value, className</li>
                                <li>LocalStorage</li>
                                <li>Evento click</li>
                                </ul>
                            </div>
                        </div>
                        `
    app.append(element)

    
    /**Se utiliza ClassName para mostrar y ocultar el input para buscar Producto */
    const mostrarInputFiltrado = document.getElementById("btnFiltrarProducto");
    const busquedaProducto = document.getElementById("inputBusqueda");
    busquedaProducto.className= "ocultar";
    mostrarInputFiltrado.addEventListener("click", ()=>{
        mostrarProductos(productos);
        if(mostrarInputFiltrado.value == "Buscar Producto"){
            busquedaProducto.className = "mostrar";
            busquedaProducto.className = "estilosCentrado";
            mostrarInputFiltrado.innerText = "Cerrar boton busqueda";
            mostrarInputFiltrado.value=  "Cerrar boton busqueda";
        }else{
            busquedaProducto.className ="ocultar";
            mostrarInputFiltrado.innerText = "Buscar Producto";
            mostrarInputFiltrado.value=  "Buscar Producto";
            const app = document.getElementById("contenidoPagina");
            app.innerHTML = '';
        }
    })

    const botonBuscarProducto = document.getElementById("btnBuscar");
    
    botonBuscarProducto.addEventListener("click", ()=>{
        busquedaProducto.className= "ocultar";
        mostrarInputFiltrado.innerText = "Buscar Producto";
        mostrarInputFiltrado.value=  "Buscar Producto";
        const valorBuscado = document.getElementById("textoABuscar");
        let valoresEncontrados = productos.filter((valor) => valor.categoriaProducto.includes(valorBuscado.value) || valor.nombreProducto.includes(valorBuscado.value));

        if(valoresEncontrados.length > 0){
           mostrarProductos(valoresEncontrados);
        }else{
            crearCardMensaje(valorBuscado)
        }
      
    })


    /**Se utiliza ClassName para mostrar y ocultar formulario de agregar Producto */
    const mostrarFormularioAgregarProducto = document.getElementById("mostrarFomulario");
    const formularioAgregar = document.getElementById("formularioAgregar");
    formularioAgregar.className= "ocultar";
    mostrarFormularioAgregarProducto.addEventListener("click", ()=>{
        const app = document.getElementById("contenidoPagina");
        app.innerHTML = '';
        if(mostrarFormularioAgregarProducto.value == "Agregar Producto"){
            formularioAgregar.className= "formularioAgregarProducto";
            mostrarFormularioAgregarProducto.innerText ="Cerrar Formulario";
            mostrarFormularioAgregarProducto.value="Cerrar Formulario";
        } else{
            formularioAgregar.className="ocultar";
            mostrarFormularioAgregarProducto.innerText ="Agregar Producto";
            mostrarFormularioAgregarProducto.value="Agregar Producto"
        }
        
    })


    /**Se ejecuta cuando presionar el boton agregar producto del formulario agregar */
    const botonAgregarProducto = document.getElementById("btnAgregarProducto");
    botonAgregarProducto.addEventListener("click" ,()=>{
        formularioAgregar.className ="ocultar";
        mostrarFormularioAgregarProducto.innerText ="Agregar Producto";
        const categoriaDelProducto = document.getElementById("categoriaProducto");
        const nombreDelProducto = document.getElementById("nombreProducto");
        const precioDelProducto = document.getElementById("precioProducto");
        const imagenDelProducto = document.getElementById("imagenProducto");
        const productoNuevo= agregarProducto(categoriaDelProducto.value,nombreDelProducto.value,precioDelProducto.value, imagenDelProducto.value);
        crearCard(productoNuevo);
        categoriaDelProducto.value ='';
        nombreDelProducto.value ='';
        precioDelProducto.value= 0;

    })

}

main();