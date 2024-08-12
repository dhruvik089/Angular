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
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Position the toast in the top-right corner
      preventDuplicates: true, 
      progressBar: true
    }),
  ],
  providers: [CookieService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
