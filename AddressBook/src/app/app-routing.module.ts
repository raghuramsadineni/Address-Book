import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {path:'' ,redirectTo:'home', pathMatch:'full'},
  {path:'edit',component:FormComponent},
  {path:'add', component:FormComponent},
  { path: 'info/:id', component: ContactinfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
