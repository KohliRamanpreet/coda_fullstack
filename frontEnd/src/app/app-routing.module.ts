import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailviewComponent } from './detailview/detailview.component';
import { Home2Component } from './home2/home2.component';
import {AdminComponent} from './admin/admin.component';
import { EditDeleteComponent } from './edit-delete/edit-delete.component';
const routes: Routes = [
  { path: 'home', component: Home2Component },
  {path:'editDelete', component:EditDeleteComponent},
  {path:'admin',component:AdminComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
