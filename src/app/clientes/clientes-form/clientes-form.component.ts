import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { __values } from 'tslib';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success : Boolean = false;
  errors : String[] = [];
  
  constructor( private service : ClientesService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getClienteByID(parseInt(""+id))
    .subscribe(data=>{
      this.cliente=data;
    })
  }

  onSubmit(){
    this.service.salvar(this.cliente)
    .subscribe( response => {
      this.success = true;
      this.errors = [];
      this.cliente = response;
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
      console.log(errorResponse.error.errors);
      alert('Erro ao tentar cadastrar Cliente');
    });
  }

  voltar(){
    this.router.navigate(['clientes-lista']);
  }

  Salvar(){
    this.service.salvar(this.cliente)
    .subscribe(data=> {
      alert("Cliente Atualizado com Sucesso!");
      this.router.navigate(["clientes-lista"]);
    })
  }

}
