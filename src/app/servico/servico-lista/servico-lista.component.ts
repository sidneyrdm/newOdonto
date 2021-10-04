import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/servico.service';
import { ServicoPesquisa } from './servicoPesquisa';

@Component({
  selector: 'app-servico-lista',
  templateUrl: './servico-lista.component.html',
  styleUrls: ['./servico-lista.component.css']
})
export class ServicoListaComponent implements OnInit {

  'nome': string;
  'mes': number;
  'meses': number[];
  'listaServicoPesquisado': ServicoPesquisa[];

  constructor(private servico: ServicoService) { 
    this.meses = [1, 2, 3, 4, 5, 6, 7,8, 9, 10, 11, 12];
  }

  ngOnInit(): void {
  }

  pesquisar(){
    this.servico
    .pesquisar(this.nome, this.mes)
    .subscribe(response => {
      this.listaServicoPesquisado = response;
      if(this.listaServicoPesquisado.length <= 0)
      alert("Nenhum registro encontrado!");    
    });
  }

}
