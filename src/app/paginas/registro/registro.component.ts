import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from 'src/app/Services/consumo.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  RegistroForm:FormGroup;

  constructor(private fb:FormBuilder,private services:Service) {
    this.RegistroForm=this.fb.group({
     email:['',Validators.required],
     password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registrarUsuario(){
   if(this.RegistroForm.invalid){
      alert('No deje campos vacios')
      return
   }

   this.services.registrarUsuario(this.RegistroForm.value.email,this.RegistroForm.value.password).subscribe(data=>{
    console.log(data);
    alert("Registrado exitosamente");
   },err=>{
    console.log(err.error.error.message)
    this.services.retornarError(err.error.error.message);
   });
  }
}
