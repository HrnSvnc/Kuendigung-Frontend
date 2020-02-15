import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { AddcontractComponent } from './mainPanel/addcontract/addcontract.component';
import { ContractlistComponent } from './mainPanel/contractlist/contractlist.component';
import { ContractitemComponent } from './mainPanel/contractlist/contractitem/contractitem.component';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes =[
  {path: '', component: MainPanelComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPanelComponent,
    AddcontractComponent,
    ContractlistComponent,
    ContractitemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
