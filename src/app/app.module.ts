import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rotas
import { APP_ROUTING } from './app.routes';

// Serviços
import {HeroesService} from './services/heroes.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

// Os componentes, serviços... Adionados aqui devem está acima importados
@NgModule({
  declarations: [
  AppComponent,
  NavbarComponent,
  HomeComponent,
  AboutComponent,
  HeroesComponent,
  HeroeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
