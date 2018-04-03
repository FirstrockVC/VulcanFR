import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    Ng2HighchartsModule,
    HttpModule,
    Ng4LoadingSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
