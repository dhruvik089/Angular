import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TempComponent } from './temp/temp.component';
import { ApiComponent } from './api/ApiComponent';
import { DataComponent } from './data/data.component';
import { PerentComponentComponent } from './perent-component/perent-component.component';
import { ChildComponentComponent } from './perent-component/child-component/child-component.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    FormComponent,
    AppComponent,
    TempComponent,
    ApiComponent,
    DataComponent,
    PerentComponentComponent,
    ChildComponentComponent,
    LifeCycleComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
