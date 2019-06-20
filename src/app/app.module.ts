import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./pages/account/login-page/login-page.component";
import { SignupPageComponent } from "./pages/account/signup-page/signup-page.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { ResetPasswordPageComponent } from "./pages/account/reset-password-page/reset-password-page.component";
import { ProductsPageComponent } from "./pages/store/products-page/products-page.component";
import { CartPageComponent } from "./pages/store/cart-page/cart-page.component";
import { CheckoutPageComponent } from "./pages/store/checkout-page/checkout-page.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { LoadingComponent } from "./components/shared/loading/loading.component";
import { ProfilePageComponent } from "./pages/account/profile-page/profile-page.component";
import { ProductCardComponent } from "./components/store/product-card/product-card.component";
import { ToastrModule } from "ngx-toastr";
import { UserService } from "./services/user.service";
import { StoreService } from "./services/store.service";
import { AuthService } from "./services/auth.service";
import { MaskDirective } from "./directives/mask.directive";

@NgModule({
  declarations: [
    MaskDirective,
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    AdminLayoutComponent,
    MainLayoutComponent,
    ResetPasswordPageComponent,
    ProductsPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    NavbarComponent,
    LoadingComponent,
    ProfilePageComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [UserService, StoreService, AuthService],

  bootstrap: [AppComponent]
})
export class AppModule {}
