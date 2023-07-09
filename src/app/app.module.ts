import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CircularprogressbarComponent } from './home/circularprogressbar/circularprogressbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { AppRoutingModule } from './app.routing.module';
import { AppointmentComponent } from './appointment/appointment.component';
import { ProductsComponent } from './products/products.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MessageService } from './message.service';
import { AboutComponent } from './about/about.component';
import { AboutAllComponent } from './about-all/about-all.component';

@NgModule({
  imports:      [ AppRoutingModule,BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, NavbarComponent, CarouselComponent, CircularprogressbarComponent, FooterComponent, AboutmeComponent, TimetableComponent, TestimonialComponent, TreatmentComponent, AppointmentComponent, ProductsComponent, GalleryComponent, AboutComponent, AboutAllComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MessageService]
})
export class AppModule { }
