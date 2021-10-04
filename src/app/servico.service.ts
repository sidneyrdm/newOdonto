import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servico } from './servico/servico';
import { ServicoPesquisa } from './servico/servico-lista/servicoPesquisa';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  Url = environment.apiUrlBase+'/servicos';

  constructor(private http: HttpClient) { }

  salvar(servico: Servico) : Observable<Servico> {
    return this.http.post<Servico>(this.Url, servico);
  }

  pesquisar(nome: string, mes: number): Observable<ServicoPesquisa[]> {
    const httpParams = new HttpParams().set("nome", nome).set("mes", mes ? mes.toString() : '');
    
    return this.http.get<any>(this.Url+"?"+httpParams.toString());
  }
}
