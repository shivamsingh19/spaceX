import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'launchDetails', pathMatch: 'full' },
  { path: 'launchDetails', component: LaunchDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
