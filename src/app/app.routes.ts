import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  {
    path: '', // Default route
    component: LandingComponent,
  },

];
