import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'angular-custom-modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './Food/create/create.component';
import { ListComponent } from './Food/list/list.component';
import { PageNotFoundComponent } from './Food/page-not-found/page-not-found.component';
import { OrderComponent } from './food/order/order.component';
import { CustomerFoodMenuComponent } from './Food/customer-food-menu/customer-food-menu.component';
import { TableComponent } from './Food/table/table.component';
import { BillComponent } from './Food/bill/bill.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    PageNotFoundComponent,
    OrderComponent,
    CustomerFoodMenuComponent,
    TableComponent,
    BillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }