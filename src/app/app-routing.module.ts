import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'programs', pathMatch: 'full' },
  { path: 'programs', component: ProgramDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
