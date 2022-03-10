import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
// import { DetailComponent } from './details/detail.component';
import { DashbordComponent } from './dashbord/dashbord/dashbord.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'dashboard', component: DashbordComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'add_post', component: AddPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
