import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { OrdersComponent } from './pages/admin/orders/orders.component';
import { CustomersComponent } from './pages/admin/customers/customers.component';
import { ReviewsComponent } from './pages/admin/reviews/reviews.component';
import { SettingsComponent } from './pages/admin/settings/settings.component';
import { AuthGuard } from './admin-guard.guard';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { HomeComponent } from './pages/user/components/home/home.component';
import { CategoriesComponent } from './pages/user/components/categories/categories.component';
import { CartComponent } from './pages/user/components/cart/cart.component';
import { CheckoutComponent } from './pages/user/components/checkout/checkout.component';
import { userLoginComponent } from './pages/user/components/userlogin/userlogin.component';
import { SignupComponent } from './pages/user/components/signup/signup.component';


export const routes: Routes = [
    {path:'', pathMatch:'full' , redirectTo:'user/home'},
    {path:'user/home',component:HomeComponent},
    {path:'user/signup',component:SignupComponent},
    {path:'user/login',component:userLoginComponent},
    {path:'user/checkout', component:CheckoutComponent},
    {path:'user/cart', component:CartComponent},
    {path:'user/Categories', component:CategoriesComponent},
    {path: 'admin/login', component: LoginComponent},
    {path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'admin/products', component: ProductsComponent, canActivate: [AuthGuard]},
    {path: 'admin/products/add', component: AddProductComponent, canActivate: [AuthGuard]},
    {path: 'admin/orders', component: OrdersComponent, canActivate: [AuthGuard]},
    {path: 'admin/customers', component: CustomersComponent, canActivate: [AuthGuard]},
    {path: 'admin/reviews', component: ReviewsComponent, canActivate: [AuthGuard]},
    {path: 'admin/settings', component: SettingsComponent, canActivate: [AuthGuard]},
    {path: "**", component: ErrorComponent},
];
