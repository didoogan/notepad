import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { CategoryComponent } from './category/category-list.component';
import { CategoryDetailComponent } from './category/category-detail.component'
import { SignupComponent } from './auth/signup.component'



import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail/index#DetailModule'},
  // { path: 'category/:id', component: CategoryDetailComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**',    component: NoContentComponent },
];
