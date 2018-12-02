import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './inicio/iniciocomp/login/login.component';
import { AboutComponent } from './inicio/iniciocomp/about/about.component';
import { ContactComponent } from './inicio/iniciocomp/contact/contact.component';
import { GeneralComponent } from './general/general.component';
import { NoticiasComponent } from './general/generalcomp/noticias/noticias.component';
import { NewnoticiaComponent } from './general/generalcomp/noticias/newnoticia/newnoticia.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    GeneralComponent,
    NoticiasComponent,
    NewnoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
