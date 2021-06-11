import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.models'
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from 'src/app/core/auth/auth.service';
import { error } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.apiUrl + '/usuario';
  constructor(private http: HttpClient, private authService: AuthService) { }

  async getUsuarioById(idUsuario: any): Promise<Usuario> {
    const usuario: Usuario = await this.http.get<any>(this.url + '/' + idUsuario).toPromise();
    console.log(usuario);
    return usuario;
  }
}
