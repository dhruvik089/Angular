import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TempComponent } from './temp/temp.component';
import { FormComponent } from './form/form.component'; 
import { DataComponent } from './data/data.component';
import { ApiComponent } from './api/ApiComponent';
import { PerentComponentComponent } from './perent-component/perent-component.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '' },   
  { path: 'Temp', component: TempComponent },
  { path: 'Data', component: DataComponent },
  { path: 'Form', component: FormComponent},
  { path: 'Api', component: ApiComponent},
  { path: 'Perent-component', component: PerentComponentComponent},
  { path: 'LifeCycle', component: LifeCycleComponent}
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
