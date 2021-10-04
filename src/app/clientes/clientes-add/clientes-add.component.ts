import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-add',
  templateUrl: './clientes-add.component.html',
  styleUrls: ['./clientes-add.component.css']
})
export class ClientesAddComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private router:Router, private service:ClientesService) { }

  ngOnInit(): void {
  }

  Salvar(){
    this.service.salvar(this.cliente)
    .subscribe(data=> {
      alert("Cliente Cadastrado com Sucesso!");
      this.router.navigate(["clientes-lista"]);
    })
  }

  teste(){
    alert("Clicou no botão de Teste");
  }
  
  voltar(){
    this.router.navigate(['clientes-lista']);
  }

}
