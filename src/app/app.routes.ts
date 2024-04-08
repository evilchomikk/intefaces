import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'login', component: LoginComponentComponent},
    {path:'home',component: HomeComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'}
];
