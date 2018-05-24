import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MenuComponent } from './menu/menu.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PastaComponent } from './pasta/pasta.component';
import { CompadderService } from './compadder.service';


@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReviewsComponent,
    MenuComponent,
     PizzaComponent,
    PastaComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [CompadderService],
  bootstrap: [AppComponent],
  entryComponents: [PizzaComponent , PastaComponent]
})
export class AppModule { }
