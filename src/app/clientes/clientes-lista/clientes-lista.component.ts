import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente = new Cliente();

  constructor(private service: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.service.getClientes()
      .subscribe(resposta => {
        this.clientes = resposta;
      });
  }

  novoCliente() {
    this.router.navigate(['/clientes-add']);
  }

  Editar(cliente: Cliente) {
    localStorage.setItem("id", cliente.id.toString());
    this.router.navigate(["clientes-form"]);
  }

  prepareDelete(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  Deletar(cliente: Cliente) {
    this.service.deleteCliente(cliente)
      .subscribe(data => {
        this.clientes = this.clientes.filter(p => p !== cliente);
        alert("Cliente " + cliente.nome + " Deletado Com Sucesso!");
      })
  }

  deletarCliente(){
    this.service
      .deletar(this.clienteSelecionado)
      .subscribe( 
        response => {
          alert('Cliente deletado com sucesso!');
          this.ngOnInit();
        },
        erro => alert('Ocorreu um erro ao deletar o cliente.')
        );}
}
