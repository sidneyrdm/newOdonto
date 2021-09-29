import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';

@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.css']
})
export class ServicoFormComponent implements OnInit {

  'clientes': Cliente[]= [];

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.clienteService.getClientes()
    .subscribe( response => this.clientes = response);
  }

  onSubmit(){
    alert('Submit HAHA')
  }

}
