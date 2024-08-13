import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from '../app/features/form/form.component'; 
import { TempComponent } from '../app/features/temp/temp.component'
import { ApiComponent } from '../app/features/api/ApiComponent';
import { DataComponent } from '../app/features/data/data.component';
import { PerentComponentComponent } from '../app/features/perent-component/perent-component.component';
import { ChildComponentComponent } from '../app/features/perent-component/child-component/child-component.component';
import { LifeCycleComponent } from '../app/features/life-cycle/life-cycle.component'; 
import { LoginComponent } from '../app/features/login/login.component';

import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './core/guards/auth.guard';

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
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
    }),
  ],
  providers: [CookieService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
