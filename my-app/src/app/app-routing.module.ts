import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempComponent } from './features/temp/temp.component'; 
import { FormComponent } from '../app/features/form/form.component';
import { DataComponent } from './features/data/data.component';
import { ApiComponent } from './features/api/ApiComponent';
import { PerentComponentComponent } from '../app/features/perent-component/perent-component.component';
import { LifeCycleComponent } from '../app/features/life-cycle/life-cycle.component';
import { LoginComponent } from '../app/features/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Temp', component: TempComponent, canActivate: [AuthGuard] },
  { path: 'Data', component: DataComponent, canActivate: [AuthGuard] },
  { path: 'Api', component: ApiComponent, canActivate: [AuthGuard] },
  { path: 'Form', component: FormComponent },
  {
    path: 'Perent-component',
    component: PerentComponentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'LifeCycle',
    component: LifeCycleComponent,
    canActivate: [AuthGuard],
  },
  { path: 'Login', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
