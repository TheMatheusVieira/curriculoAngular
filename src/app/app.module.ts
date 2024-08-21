import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CperfilComponent } from './c-perfil/cperfil';
import { DadosPessComponent } from './dados-pess/dados.component';
import { MinhasComp } from './minhas-comp/comp';

@NgModule({
  declarations: [AppComponent, CperfilComponent, DadosPessComponent, MinhasComp],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}