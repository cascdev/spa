import { RouterModule, Routes } from '@angular/router';

// Importe abaixo todos os componentes que farão uso de rotas
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

// Adicione abaixo as rotas para cada componente acima
const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// Importe a constante abaixo em app.modeles.ts e
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

/*
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
*/
