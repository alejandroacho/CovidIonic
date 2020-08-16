import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  loginUser(credential){
    return new Promise ((accept,reject)=>{
      if (credential.email=="alejo@acho.com" && credential.password=="123456"){
        accept("Login correcto!");
      }
      reject ("login incorrecto");
    });
  }
}
