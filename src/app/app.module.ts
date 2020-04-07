import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables.component';
import { GeometryComponent } from './geometry/geometry.component';
import { MastersComponent } from './masters/masters.component';
import { MagicMathsComponent } from './magic-maths/magic-maths.component';

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    GeometryComponent,
    MastersComponent,
    MagicMathsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
