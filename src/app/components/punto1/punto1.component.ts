import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoCarrito } from 'src/app/models/producto-carrito';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component {
  
  productos:Array<Producto>;
  productosCarrito:Array<ProductoCarrito>;
  totalCarrito:number=0;

  constructor(){
    this.productos = new Array<Producto>;
    this.productosCarrito = new Array<ProductoCarrito>;
    this.productos.push(new Producto('Notebook Lenovo ThinkPad L14', '14 Pulgadas Full HD, Ryzen 5 4650U, 8GB RAM, 256GB SSD NVMe, W10 Pro', 'lenovo_l14.jpg', 300999));
    this.productos.push(new Producto('Notebook Gamer MSI Stealth', '17.3 Pulgadas Full HD, Intel Core i7 12700H, 16GB RAM (2x8GB), 1TB SSD NVMe, RTX 3060Q, W11H', 'msi_stealth.jpg', 785999));
    this.productos.push(new Producto('Notebook HP 250', '15.6 Pulgadas Full HD, Intel Core I5 1135G7, 8GB RAM, 256GB SSD NVMe, W11H', 'hp250.jpg', 273500));
    this.productos.push(new Producto('Xiaomi Redmi 10', 'Dual Sim 4GB RAM + 128GB Pebble White', 'redmi10.jpg', 109840));
    this.productos.push(new Producto('Monitor Samsung T350', '24 Pulgadas Full HD 75Hz', 'samsung.jpg', 60000));
    this.productos.push(new Producto('Placa de Video Zotac GeForce RTX 3070 Ti', '8GB GDDR6X Trinity', 'placa.jpg', 279000));
  }

  agregarAlCarrito(producto: Producto){
    var indice:number = this.productosCarrito.findIndex((prod)=>prod.nombre==producto.nombre);
    var indiceOriginal:number = this.productos.findIndex((prod)=>prod.nombre==producto.nombre);
    if (indice!=-1) {
      this.productosCarrito[indice].cantidad = this.productosCarrito[indice].cantidad + 1;
      this.productosCarrito[indice].precio = this.productosCarrito[indice].precio+this.productos[indiceOriginal].precio;
    } else {
      this.productosCarrito.push(new ProductoCarrito(producto.nombre, producto.descripcion, producto.img, producto.precio, 1));
    }
    this.totalCarrito = this.totalCarrito + this.productos[indiceOriginal].precio;
  }

  quitarDelCarrito(productoEliminado: Producto){
    var indice:number = this.productosCarrito.findIndex((producto)=>producto.nombre==productoEliminado.nombre);
    var indiceOriginal:number = this.productos.findIndex((prod)=>prod.nombre==productoEliminado.nombre);
    if(this.productosCarrito[indice].cantidad==1){
      this.productosCarrito.splice(indice, 1);
    }else{
      this.productosCarrito[indice].cantidad = this.productosCarrito[indice].cantidad-1;
      this.productosCarrito[indice].precio = this.productosCarrito[indice].precio - this.productos[indiceOriginal].precio;
    }
    this.totalCarrito = this.totalCarrito - this.productos[indiceOriginal].precio;;
  }
}
