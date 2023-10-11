import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContantComponent } from './pages/contant/contant.component'
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path:'content/:id',
    component:ContantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
