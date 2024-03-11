import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsAdminComponent } from './components/admin/pets.admin/pets.admin.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './partials/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductsAdminComponent } from './components/admin/products.admin/products.admin.component';
import { PetsUserComponent } from './components/user/pets.user/pets.user.component';
import { ProductsUserComponent } from './components/user/products.user/products.user.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { StoreComponent } from './components/user/store/store.component';
import { SuccessComponent } from './components/user/success/success.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FooterComponent } from './partials/footer/footer.component';
import { StoreAdminComponent } from './components/admin/store.admin/store.admin.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsAdminComponent,
    NavComponent,
    ProductsAdminComponent,
    PetsUserComponent,
    ProductsUserComponent,
    SignupComponent,
    StoreComponent,
    SuccessComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    StoreAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {'path':'admin/pets', component:PetsAdminComponent},
      {'path':'admin/products', component:ProductsAdminComponent},
      {'path':'admin/store', component:StoreAdminComponent},
      {'path':'login', component:LoginComponent},
      {'path':'signup', component:SignupComponent},
      {'path':'pets', component:PetsUserComponent},
      {'path':'products', component:ProductsUserComponent},
      {'path':'store', component:StoreComponent},
      {'path':'success', component:SuccessComponent},
      {'path':'home', component:HomeComponent},
      {'path':'', component:HomeComponent}
    ])
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
