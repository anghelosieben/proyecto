import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SearchComponent } from './pokemon/search/search.component';
import { ViewComponent } from './pokemon/view/view.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [    
    {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
    {path: 'auth/login', component: LoginComponent},
    {path: 'auth/register', component: RegisterComponent},
    {path: 'pokemon/search', component: SearchComponent, canActivate: [authGuard] },
    {path: 'pokemon/view/:name', component: ViewComponent},
    {path: '**', redirectTo: 'auth/login'},   
];
