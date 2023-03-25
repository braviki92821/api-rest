import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from 'src/app/Services/consumo.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  documentoForm:FormGroup

  constructor(private fb:FormBuilder,private services:Service) { 
    this.documentoForm=this.fb.group({
      nombre:['',Validators.required],
      carrera:['',Validators.required],
      semestre:['',Validators.required],
      turno:['',Validators.required],
      edad:['',Validators.required],
      promedio:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  crearDocumento(){
    if(this.documentoForm.invalid){
      alert('No deje campos vacios');
      return
      }
    this.services.crearDocumento(this.documentoForm.value).subscribe(data=>alert('Documento creado exitosamente'),                                                                
    error=>console.log(error));
    this.documentoForm.reset();
  }

}
