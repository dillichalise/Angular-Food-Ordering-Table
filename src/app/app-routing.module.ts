import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Food/list/list.component';
import { CreateComponent } from './Food/create/create.component';
import { PageNotFoundComponent } from './Food/page-not-found/page-not-found.component';
  import { CustomerFoodMenuComponent } from './Food/customer-food-menu/customer-food-menu.component';
import { TableComponent } from './Food/table/table.component';
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
    path: 'tables',
    component: TableComponent
  },
  {
    path: 'notFound',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/notFound'
  }
  // {
  //   path: '**',
  //   redirectTo: '/notFound'
  // },
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
