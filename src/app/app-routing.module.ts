import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  /*{ path: 'home', component: HomeComponentComponent },
  { path: 'list', component: ListToDoComponent },
  { path: 'detail/:id/:title', component:ModifierListComponent }, // Définition des paramètres

  { path: 'Detailarticle/:id', component: DetailsComponent },
  {path: 'details/:id', component: MenuDetailsComponentComponent },
  { path: 'article', component: ParentComponent},
  {path: 'MesReservation',
  loadChildren: () =>
  import('./reservation-module/reservation-module.module').then(((m) => m.ReservationModuleModule)),},

  {path: 'menu/add',
  loadChildren: () =>
  import('./menu-module/menu-module.module').then(((m) => m.MenuModuleModule)),},
  { path: 'menu/add', component: AddMenuComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path :'**' ,component:NotFoundComponentComponent}*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
