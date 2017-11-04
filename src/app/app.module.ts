import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { AboutComponent } from './about/about.component';
import { AboutUserComponent } from './about/about-user.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutUserComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
