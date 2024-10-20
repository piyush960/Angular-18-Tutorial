import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './common/about/about.component';
import { ContactComponent } from './common/contact/contact.component';
import { CustomerComponent } from './common/customer/customer.component';
import { AddComponent } from './common/add/add.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { childGuard } from './guards/child.guard';
import { authDGuard } from './guards/auth-d.guard';
import { RegisterComponent } from './common/register/register.component';
import { ProductComponent } from './common/product/product.component';
import { ObservableComponent } from './common/observable/observable.component';
import { ProductnewComponent } from './common/productnew/productnew.component';
import { MaskComponent } from './common/mask/mask.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'about',
        component: AboutComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'about/:submenu/:id',
        component: AboutComponent,
        canActivate: [authGuardGuard],
    },
    {
        path: 'contact',
        // lazy loading
        loadComponent:()=>import('./common/contact/contact.component').then(m=>m.ContactComponent),
        canActivate: [authGuardGuard],
    },
    {
        path: 'customer',
        component: CustomerComponent,
        canActivate: [authGuardGuard],
        canActivateChild: [childGuard],
        canDeactivate: [authDGuard],
        // children routes require <router-outlet/> declared in parent route's html
        children: [
            {
                path: 'add',
                component: AddComponent
            },
            {
                path: 'edit',
                component: AddComponent
            }
        ]
    },
    {
        path: 'login',
        loadComponent:()=>import('./common/login/login.component').then(m=>m.LoginComponent)
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'mask',
        component: MaskComponent
    },
    {
        path: 'product',
        component: ProductComponent,
        canActivate: [authGuardGuard]
    },
    {
        path: 'learn',
        component: ObservableComponent,
        canActivate: [authGuardGuard]
    },
    {
        path: 'productnew',
        component: ProductnewComponent,
        canActivate: [authGuardGuard]
    },
    {
        path: '**',
        canActivate: [authGuardGuard],
        component: PageNotFoundComponent
    }
];
