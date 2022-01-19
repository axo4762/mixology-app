import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { HomeComponent } from './home/home.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'discover', component: DiscoverComponent },
  { path: 'manage', component: ManageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
