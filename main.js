/*
Tema elegido, tienda de e-commerce de venta de cactus y articulos
varios de jardineria.
*/

const productos = [
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

/* function convertirAMinuscula(texto){
    return texto.toLocaleLowerCase();
} */

/* function agregarProducto(categoria, nombre, descripcion, precio){
    const producto = {
        categoria : categoria,
        nombre: nombre,
        descripcion : descripcion,
        precio : precio
    }
    productos.push(producto);
} */

/* function editarProducto(propiedadParaEditar, nombreProductoAEditar){
  for(i = 0; i < productos.length ; i++){
    if(convertirAMinuscula(productos[i].nombre) == convertirAMinuscula(nombreProductoAEditar)){
        let continuarEditando = confirm("Quiere continuar con la edición de datos de un producto? ");
        while(continuarEditando){
            switch (propiedadParaEditar) {
                    case "categoria":
                        const categoriaProductoAnterior = productos[i].categoria;
                        const nuevaCategoriaProducto = prompt("Ingrese un nuevo valor para la Categoria: ");
                        productos[i].categoria = nuevaCategoriaProducto;
                        console.log("Se modifico correctamente la categoria :  "+ categoriaProductoAnterior + " por la categoria : " + nuevaCategoriaProducto + " .");
                        continuarEditando = confirm("Quiere continuar con la edición de datos de un producto? ");
                        if(continuarEditando){
                            propiedadParaEditar = convertirAMinuscula(prompt("Seleccione que dato quiere modificar? categoria, nombre, descripcion, precio."));
                        }
                        break;
                    case "nombre":
                        const nombreProductoAnterior = productos[i].nombre;
                        const nuevoNombreProducto = prompt("Ingrese un nuevo valor para el nombre: ");
                        productos[i].nombre = nuevoNombreProducto;
                        console.log("Se modifico correctamente el nombre :  "+ nombreProductoAnterior + " por el nombre : " + nuevoNombreProducto + " .");
                        continuarEditando = confirm("Quiere continuar con la edición de datos de un producto? ");
                        if(continuarEditando){
                            propiedadParaEditar = convertirAMinuscula(prompt("Seleccione que dato quiere modificar? categoria, nombre, descripcion, precio."));
                        }
                        break;
                    case "descripcion":
                        const descripcionProductoAnterior = productos[i].descripcion;
                        const nuevoDesripcionProducto = prompt("Ingrese un nuevo valor para la descripcion: ");
                        productos[i].descripcion = nuevoDesripcionProducto;
                        console.log("Se modifico correctamente el nombre :  "+ descripcionProductoAnterior + " por la descripcion : " + nuevoDesripcionProducto + " .");
                        continuarEditando = confirm("Quiere continuar con la edición de datos de un producto? ");
                        if(continuarEditando){
                            propiedadParaEditar = convertirAMinuscula(prompt("Seleccione que dato quiere modificar? categoria, nombre, descripcion, precio."));
                        }
                        break; 
                    case "precio":
                        const precioProductoAnterior =  productos[i].precio;
                        const nuevoPrecioProducto = prompt("Ingrese un nuevo valor para el precio: ");
                        productos[i].precio = nuevoPrecioProducto;
                        console.log("Se modifico correctamente el nombre :  "+ precioProductoAnterior + " por el precio : " + nuevoPrecioProducto + " .");
                        continuarEditando = confirm("Quiere continuar con la edición de datos de un producto? ");
                        if(continuarEditando){
                            propiedadParaEditar = convertirAMinuscula(prompt("Seleccione que dato quiere modificar? categoria, nombre, descripcion, precio."));
                        }
                        break;               
                    default:
                        break;
               }
        }
        
    }

  }
} */

/* function eliminarProducto(nombreProductoAEliminar){
    for( i = 0 ; i < productos.length ; i++){
        if(convertirAMinuscula(productos[i].nombre) == convertirAMinuscula(nombreProductoAEliminar)){
            const nombreProductorEliminado = productos[i].nombre;
            productos.splice(i,1);
            console.log(i);
            console.log("Se elimino el producto " + nombreProductorEliminado);
            break;
        }
    }
} */

/* function verProducto(nombreProductoAMostrar){
    for( i = 0 ; i < productos.length ; i++){
        if(convertirAMinuscula(productos[i].nombre) == convertirAMinuscula(nombreProductoAMostrar)){
            console.log("Los datos del producto " + nombreProductoAMostrar+ " son los siguientes:  Nombre producto: " + productos[i].nombre + ", Categoria producto: " + productos[i].categoria +
        ", Descripción producto: " + productos[i].descripcion + ", Precio: " + productos[i].precio )
        }
    }
} */

/* function verProductos(){
    for (const producto of productos) {
        console.log("Los datos del producto son los siguientes:  Nombre producto: " + producto.nombre + ", Categoria producto: " + producto.categoria +
        ", Descripción producto: " + producto.descripcion+ ", Precio: " + producto.precio );
    }
} */

const crearCard = (cactus)=>{
    const app = document.getElementById("app");
    const element = document.createElement("div");
    element.className = "estilosContenedor"
    element.innerHTML = `
                        <div class="card" style="width: 18rem;">
                            <img src="${cactus.imagenProducto}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h2 class="card-title">${cactus.nombreProducto}</h2>
                                <h3>Categoria:  ${cactus.categoriaProducto}</h3>
                                <button type="button" class="btn btn-dark">Editar</button>
                                <button type="button" class="btn btn-dark" id="btnAgregarProducto">Eliminar</button>
                            </div>
                        </div>
                        `
    app.append(element)
}
const main = () =>{
    productos.forEach((cactus)=>{
        crearCard(cactus);
    })
    const formularioAgregar = document.getElementById("formularioAgregar");
    formularioAgregar.className ="formularioAgregarProducto";
    const btnAgregarProducto = document.addEventListener("btnAgregarProducto");
    btnAgregarProducto.addEventListener("click" ,()=>{
    })
 /*    let continuar = confirm("Presione Aceptar para Iniciar/continuar o Cancelar para Finalizar la aplicación.");
    while(continuar){
    const accionARealizar = prompt("¡Bienvenido! Seleccione alguna de las siguientes acciones: agregar, editar, eliminar, producto, todosProductos ");
        if(convertirAMinuscula(accionARealizar) == "agregar"){
            const categoriaProducto = prompt("Ingrese la categoría del producto.");
            const nombreProducto = prompt("Ingrese nombre del producto.");
            const descripcionProducto = prompt("Ingrese una descripción para el producto.");
            const precio = parseFloat(prompt("Ingrese un precio para el producto."));
            agregarProducto(categoriaProducto,nombreProducto,descripcionProducto,precio);
            alert("Se agrego el siguiente producto: Categoria: " + categoriaProducto + ", Nombre Producto: " + nombreProducto + ".")
        }else if(convertirAMinuscula(accionARealizar) == "editar"){
            const nombreProductoAEditar = prompt("Ingrese el nombre del producto a editar: ");
            const propiedadAEditar = prompt("Seleccione que dato quiere modificar? categoria, nombre, descripcion, precio.");
            editarProducto(propiedadAEditar,nombreProductoAEditar);
        }else if(convertirAMinuscula(accionARealizar) == "eliminar"){
            const productoAEliminar = prompt("Ingrese el nombre del producto a eliminar: ");
            eliminarProducto(productoAEliminar);
        }else if(convertirAMinuscula(accionARealizar) == "producto"){
            const productoAMostrar = prompt("Ingrese el nombre del producto a mostrar: ");
            verProducto(productoAMostrar);
        }else if(accionARealizar == "todosProductos"){
            verProductos();
        }else{
            alert("Accion no valida")
        }
       continuar = confirm("Presione Aceptar para Iniciar/continuar o Cancelar para Finalizar la aplicación.");
    } */
}

main();