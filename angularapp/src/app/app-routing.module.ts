import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAddPropertyComponent } from './components/admin-add-property/admin-add-property.component';
import { AdminEditPropertyComponent } from './components/admin-edit-property/admin-edit-property.component';
import { AdminViewPropertyComponent } from './components/admin-view-property/admin-view-property.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminControlPanelComponent } from './components/admin-control-panel/admin-control-panel.component';
import { AdminViewInquiryComponent } from './components/admin-view-inquiry/admin-view-inquiry.component';
import { AdminViewFeedbackComponent } from './components/admin-view-feedback/admin-view-feedback.component';
import { LoginComponent } from './components/login/login.component';
import { UserViewInquiryComponent } from './components/user-view-inquiry/user-view-inquiry.component';
import { UserViewFeedbackComponent } from './components/user-view-feedback/user-view-feedback.component';
import { UserViewPropertiesComponent } from './components/user-view-properties/user-view-properties.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserAddInquiryComponent } from './components/user-add-inquiry/user-add-inquiry.component';
import { BlogsPostComponent } from './components/blogs-post/blogs-post.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { AdminGuard } from './admin.guard';
import { UserGuard } from './user.guard';
import { ErrorComponent } from './components/error/error.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { FaqComponent } from './components/faq/faq.component';
import { AgentsComponent } from './components/agents/agents.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {path:'admin/addProperty',component:AdminAddPropertyComponent, canActivate: [AdminGuard]},
  {path:'admin/editProp/:propertyId',component:AdminEditPropertyComponent, canActivate: [AdminGuard]},
  {path:'admin/viewProp',component:AdminViewPropertyComponent, canActivate: [AdminGuard]},
  {path:'home',component:HomePageComponent},
  {path:'admin/controlPanel',component:AdminControlPanelComponent, canActivate: [AdminGuard]},
  {path:'admin/inquiries',component:AdminViewInquiryComponent, canActivate: [AdminGuard]},
  {path:'admin/resolveInquiries',component:AdminViewInquiryComponent, canActivate: [AdminGuard]},
  {path:'admin/highPriorityInquiries',component:AdminViewInquiryComponent, canActivate: [AdminGuard]},
  {path:'admin/feedback',component:AdminViewFeedbackComponent, canActivate: [AdminGuard]},
  {path:'user/feedback',component:UserViewFeedbackComponent, canActivate: [UserGuard]},
  {path:'user/inquiries',component:UserViewInquiryComponent, canActivate: [UserGuard]},
  {path:'user/addInquiry/:propertyId', component:UserAddInquiryComponent, canActivate: [UserGuard]},
  {path:'user/viewProp',component:UserViewPropertiesComponent},
  {path:'user/viewPropDetails/:id',component:PropertyDetailsComponent, canActivate: [UserGuard]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'blog/:id', component: BlogDetailsComponent},
  {path:'blog', component: BlogsPostComponent},
  {path:'faq', component: FaqComponent},
  {path:'agents', component: AgentsComponent},
  {path:'upcoming',component:CardComponent},
  {path:'error',component:ErrorComponent},
  {path:'**',component:HomePageComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
