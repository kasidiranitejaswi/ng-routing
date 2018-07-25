import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { GrowthConsultingComponent } from './growth-consulting/growth-consulting.component';
import { ProductDevelopmentComponent } from './product-development/product-development.component';


const routes : Routes = [
  { path: '' , redirectTo : '/Home' , pathMatch : 'full'},
  { path : 'Home' , component : HomeComponent},
  { path : 'Aboutus' , component : AboutusComponent},
  { path : 'Services' , component : ServicesComponent,children:[
    { path : 'GrowthConsulting' , component:GrowthConsultingComponent},
    { path : 'ProductDevelopment' , component : ProductDevelopmentComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    GrowthConsultingComponent,
    ProductDevelopmentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
