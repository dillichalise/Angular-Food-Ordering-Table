import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Food/list/list.component';
import { CreateComponent } from './Food/create/create.component';
import { PageNotFoundComponent } from './Food/page-not-found/page-not-found.component';
// import { ViewFoodComponent } from './Food/view-food/view-food.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path:'edit/:id',
    component: CreateComponent
  },
  
  {
    path: '**',
    redirectTo: '/notFound'
  },
  {
    path: 'notFound',
    component: PageNotFoundComponent
  },
  // {
  //   path: 'viewFood/:id',
  //   component: ViewFoodComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
