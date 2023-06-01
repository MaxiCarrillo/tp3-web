export class Producto {
    nombre:string;
    descripcion:string;
    img:string;
    precio:number;

    constructor(nombre:string, descripcion:string, img:string, precio:number){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.precio = precio;
    }
}
