import { Component, OnInit, } from '@angular/core';
import { Producto } from '../model/producto.model';
import { Linealista } from '../model/linealista.model'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	arrComida: Producto[]
	arrBebida: Producto[]
  tituloComida: string
  tituloBebida: string
  arrSelect: Linealista[]
  precioTotal: number

  constructor() {

    this.arrSelect = []
    this.precioTotal = 0

    this.tituloComida = 'COMIDA'
  	this.arrComida = [
  		new Producto ('Hamburguesa Ternera',6,'hternera.jpg'),
  		new Producto ('Hamburguesa Pollo',4.5,'hpollo.jpg'),
  		new Producto ('Nuggets',5,'nuggets.jpg'),
  		new Producto ('Ensalada',4,'ensalada.jpg'),
  		new Producto ('Pizza',9,'pizza.jpg'),
  		new Producto ('Panini',3,'panini.jpg')
  	]
   this.tituloBebida = 'BEBIDA'
	this.arrBebida = [
  		new Producto ('Coca Cola', 2.5, 'cocacola.jpg'),
  		new Producto ('Fanta Naranja', 2.5, 'fantan.jpg'),
  		new Producto ('Fanta Limon', 2.5, 'fantal.jpg'),
  		new Producto ('Sprite', 2.5, 'sprite.jpg'),
  		new Producto ('Caña', 1.5, 'cana.jpg'),
  		new Producto ('Tercio', 3, 'tercio.jpg'),
	]

  }



  ngOnInit() {
  }

  handleEnvioProduct(p){

    this.precioTotal += p.precio
   
   for(let i = 0; i < this.arrSelect.length; i++){
      if(this.arrSelect[i].producto.nombre === p.nombre){ 
         this.arrSelect[i].cantidad += 1
        return
      }
    }
    this.arrSelect.push(new Linealista(p, 1))
 
    
  }

   handleBorrar(i){

     this.precioTotal -= this.arrSelect[i].producto.precio

     if(this.arrSelect[i].cantidad > 1){
       this.arrSelect[i].cantidad -= 1
      
     }else{
       this.arrSelect.splice(i,1)
      
     }
   }
}
