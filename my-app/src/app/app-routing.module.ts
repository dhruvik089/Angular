import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { TempComponent } from './temp/temp.component';
import { FormComponent } from './form/form.component'; 
import { DataComponent } from './data/data.component';
import { ApiComponent } from './api/ApiComponent';
import { PerentComponentComponent } from './perent-component/perent-component.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component'; 
import { LoginComponent } from './login/login.component'; 


export default class AuthGuard implements CanActivate {
   
  constructor( private login:LoginComponent, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
    if(this.login.Token!=null){
      console.log(this.login.Token);      
      return true;
    }
    else{
      this.route.navigate(['/Login']);
    }
  } 
}

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'Temp', component: TempComponent,canActivate: [AuthGuard]},
  { path: 'Data', component: DataComponent,canActivate: [AuthGuard]},
  { path: 'Form', component: FormComponent,canActivate: [AuthGuard]},
  { path: 'Api', component: ApiComponent,canActivate: [AuthGuard]},
  { path: 'Perent-component', component: PerentComponentComponent,canActivate: [AuthGuard]},
  { path: 'LifeCycle', component: LifeCycleComponent,canActivate: [AuthGuard]},
  { path: 'Login', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
