import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';
import { Servico } from '../servico';

@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.css']
})
export class ServicoFormComponent implements OnInit {

  'clientes': Cliente[]= [];
  'servico': Servico;

  constructor(private clienteService: ClientesService) {

    this.servico = new Servico();
   }

  ngOnInit(): void {
    this.clienteService.getClientes()
    .subscribe( response => this.clientes = response);
  }

  onSubmit(){
    console.log(this.servico);
  }

}
