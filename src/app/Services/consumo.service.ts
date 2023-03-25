import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { documentoForm } from '../interfaces/alumnos.interface';



const urlf = environment.url_API_Firebase;
const urlt = environment.url_API_toolkit;
const key = environment.API_Key;

@Injectable({ providedIn: 'root' })
export class Service {


  constructor(private http: HttpClient) {}

  obtenerToken(correo: string, password: string) {
    let formData: any = {
      email: correo,
      password: password,
      returnSecureToken: true,
    };
    return this.http.post(`${urlt}:signInWithPassword?key=${key}`, formData)
  }

  registrarUsuario(correo: string, password: string){
    let formData:any={
      email: correo,
      password: password
    };
    return this.http.post(`${urlt}:signUp?key=${key}`, formData)
  }

  crearDocumento(formDocumento:documentoForm){
   return this.http.post(`${urlf}/Alumnos.json?auth=${localStorage.getItem('token')}`,formDocumento)
  }

  obtenerDocumentos(){
   return this.http.get(`${urlf}/Alumnos.json?auth=${localStorage.getItem('token')}`)
  }

  retornarError(codeError:string){
    switch (codeError){
      case 'INVALID_EMAIL':
        return alert('Ingrese un correo valido');
      case 'EMAIL_NOT_FOUND':
        return alert('correo no registrado');
      case 'INVALID_PASSWORD':
        return alert('contraseña o correo incorrectos');
      case 'MISSING_PASSWORD':
        return alert('Debe colocar una contraseña');
      case 'WEAK_PASSWORD : Password should be at least 6 characters':
        return alert('Su contraseña debe ser de al menos 6 caracteres');
      case 'EMAIL_EXISTS':
        return alert('Este correo ya esta registrado');
    }
  }


}
//EMAIL_EXISTS