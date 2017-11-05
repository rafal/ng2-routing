import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user.component';
import { AboutSectionComponent } from './about-section.component';
import { UserService } from '../shared/services/user.service';
import { aboutRouting } from './about.routing';
import { AboutUsersResolve } from './about-resolve.service';

// Use NgModule DECORATOR to CREATE our MODULE:
// imports: other modules to import.
// declarations: the components or directives that we have.
// no bootstrap because about moudle is not the top level module in our app.
@NgModule({
  imports: [
    CommonModule,
    aboutRouting
  ],
  declarations: [
    AboutComponent,
    AboutUserComponent,
    AboutSectionComponent
  ],
  providers: [
    UserService,
    AboutUsersResolve
  ]
})
export class AboutModule {}
// Now this module is self-contained.