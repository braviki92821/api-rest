import { Component, OnInit } from '@angular/core';
import { alumnoData } from 'src/app/Modelos/alumnos.model';
import { Service } from 'src/app/Services/consumo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  alumnos:alumnoData[]=[];
  
  constructor(private services:Service) { }

  ngOnInit(): void {

  }

}
