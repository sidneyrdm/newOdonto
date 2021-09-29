import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http : HttpClient) { }

  
  Url = 'http://localhost:8080/api/clientes';

  salvar(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.Url, cliente);
  }

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.Url);
  }

  getClienteByID(id: number) : Observable<Cliente>{
    return this.http.get<Cliente>(`${this.Url}/${id}`);
  }

  deleteCliente(cliente:Cliente){
    return this.http.delete<Cliente>(this.Url+"/"+cliente.id);
  }

  deletar(cliente: Cliente) : Observable<any> {
    return this.http.delete<any>(`${this.Url}/${cliente.id}`);
  }

}
