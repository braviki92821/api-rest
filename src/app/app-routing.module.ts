import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { guard } from './guard/auth.guard';
import { DocumentosComponent } from './paginas/documentos/documentos.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'login',component:LoginComponent},
  { path:'registrarse',component:RegistroComponent},
  { path:'inicio',component:InicioComponent,canActivate:[guard]},
  { path:'documento',component:DocumentosComponent,canActivate:[guard]},
  { path:'**', redirectTo:'login', pathMatch:'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
