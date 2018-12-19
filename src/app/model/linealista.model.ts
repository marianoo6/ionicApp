import { Producto } from './producto.model'

export class Linealista{

	producto: Producto
	cantidad: number 

	constructor(pProducto, pCantidad){

		this.producto = pProducto 
		this.cantidad = pCantidad

	}


}