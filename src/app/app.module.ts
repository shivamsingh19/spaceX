import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPanelComponent,
    ProgramDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
