import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../model/producto.model'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

	
  @Input() arrProductos: Producto[]
  @Input() titulo: string
	@Output() envioproduct = new EventEmitter()

  constructor() { 

 	
  }

  ngOnInit() {

  }

  handleClick(pSeleccionado){
    this.envioproduct.emit(pSeleccionado)
  }

}
