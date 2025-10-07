import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AdminAddPropertyComponent } from './components/admin-add-property/admin-add-property.component';
import { AdminControlPanelComponent } from './components/admin-control-panel/admin-control-panel.component';
import { AdminEditPropertyComponent } from './components/admin-edit-property/admin-edit-property.component';
import { AdminViewFeedbackComponent } from './components/admin-view-feedback/admin-view-feedback.component';
import { AdminViewInquiryComponent } from './components/admin-view-inquiry/admin-view-inquiry.component';
import { AdminViewPropertyComponent } from './components/admin-view-property/admin-view-property.component';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { AuthguardComponent } from './components/authguard/authguard.component';
import { ErrorComponent } from './components/error/error.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserAddFeedbackComponent } from './components/user-add-feedback/user-add-feedback.component';
import { UserAddInquiryComponent } from './components/user-add-inquiry/user-add-inquiry.component';
import { UserViewFeedbackComponent } from './components/user-view-feedback/user-view-feedback.component';
import { UserViewInquiryComponent } from './components/user-view-inquiry/user-view-inquiry.component';
import { UserViewPropertiesComponent } from './components/user-view-properties/user-view-properties.component';
import { UsernavComponent } from './components/usernav/usernav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LocationCardsComponent } from './components/location-cards/location-cards.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { BlogsPostComponent } from './components/blogs-post/blogs-post.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { AuthInterceptor } from './auth.interceptor';
import { BlogCardsComponent } from './components/blog-cards/blog-cards.component';
import { FaqComponent } from './components/faq/faq.component';
import { CardComponent } from './components/card/card.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { AgentsComponent } from './components/agents/agents.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminAddPropertyComponent,
    AdminControlPanelComponent,
    AdminEditPropertyComponent,
    AdminViewFeedbackComponent,
    AdminViewInquiryComponent,
    AdminViewPropertyComponent,
    AdminnavComponent,
    AuthguardComponent,
    ErrorComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    UserAddFeedbackComponent,
    UserAddInquiryComponent,
    UserViewFeedbackComponent,
    UserViewInquiryComponent,
    UserViewPropertiesComponent,
    UsernavComponent,
    NavbarComponent,
    AboutusComponent,
    ContactusComponent,
    FooterComponent,
    LocationCardsComponent,
    ImageUploadComponent,
    PropertyDetailsComponent,
    BlogsPostComponent,
    BlogDetailsComponent,
    BlogCardsComponent,
    FaqComponent,
    CardComponent,
    WhyUsComponent,
    AgentsComponent
  ],
  imports: [
    // BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
