import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule  } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FormularioComponent } from './componentea/formulario/formulario.component';
import { ListadoDeNoticiasComponent } from './componentea/listado-de-noticias/listado-de-noticias.component';
import { NavbarComponent } from './componentea/navbar/navbar.component';
import { SpinerComponent } from './shade/spiner/spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoDeNoticiasComponent,
    NavbarComponent,
    SpinerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
