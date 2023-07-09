import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ProductsComponent } from './products/products.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutAllComponent } from './about-all/about-all.component';

const appRoutes:Routes=[
   { path: '', component: HomeComponent },
      { path: 'about', component: AboutAllComponent },
      { path: 'treatment', component: TreatmentComponent },
       { path: 'gallery', component: GalleryComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'appointment', component: AppointmentComponent },
      { path: '**', redirectTo: '' }
]

@NgModule({
imports:[
      RouterModule.forRoot(appRoutes)
],

exports:[RouterModule]
})
export class AppRoutingModule{

}

