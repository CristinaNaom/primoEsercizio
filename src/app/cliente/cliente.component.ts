import { Component, Input } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent {
  @Input()
  cliente?: Cliente;

  getMaggiore(cliente:any){
    return{
      'text-yellow': cliente.amount>700
    }
  }
 
  
}




