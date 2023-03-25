import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/app/Services/consumo.service';
import { __classPrivateFieldGet } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  token:string;
  constructor(private fb:FormBuilder,private servicios:Service,private route:Router) { 

    this.loginForm=this.fb.group({
      correo:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
     this.token=localStorage.getItem('token') || '';
     if(this.token.length>0){
      console.log(this.token.length)
      this.route.navigate(['/inicio']);
     }else{
      console.log(this.token.length)
      this.route.navigate(['/']);
     }
  }

  login(){
   if(this.loginForm.invalid){
    alert('No deje campos vacios')
    return
   }
   this.servicios.obtenerToken(this.loginForm.value.correo,this.loginForm.value.password).subscribe((data:any)=>{
        localStorage.setItem('localId',data.localId)
        localStorage.setItem('correo',data.email)
        localStorage.setItem('token',data.idToken);
        alert("Acceso Correcto")
        this.route.navigate(['/inicio']);
   },(err)=>{
     console.log(err.error.error.message)
     this.servicios.retornarError(err.error.error.message);
   })
  }

}
