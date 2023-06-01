export class ProductoCarrito {
    nombre:string;
    descripcion:string;
    img:string;
    precio:number;
    cantidad:number;

    constructor(nombre:string, descripcion:string, img:string, precio:number, cantidad:number){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
