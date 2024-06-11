import { Component, Input } from '@angular/core';
import { Cliente } from '../models/cliente';
import { CLIENTI } from '../data/clienti';

@Component({
  selector: 'app-lista-clienti',
  templateUrl: './lista-clienti.component.html',
  styleUrl: './lista-clienti.component.css',
})
export class ListaClientiComponent {
  @Input()
  clienti: Cliente[]= CLIENTI;
   
 
}
