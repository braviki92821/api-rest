import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class HeaderComponent implements OnInit {
  correo = localStorage.getItem('correo');
  sesionAc: boolean;
  token: string;
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token') || '';
    if (this.token.length > 0) {
      console.log(this.token.length);
      this.sesionAc = true;
    } else {
      console.log(this.token.length);
      this.sesionAc = false;
    }
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('correo');
    localStorage.removeItem('localId');
    this.token = '';
    this.correo = '';

    this.sesionAc = false;
    this.route.navigate(['/login']);
  }
}
