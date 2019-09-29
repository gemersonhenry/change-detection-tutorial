import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentRoutesComponent } from './examples/content-routes/content-routes.component';
import { Example01Component } from './examples/change-detector-ref/example01/example01.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'content-routes',
    pathMatch: 'full',
  },
  {
    path: 'content-routes',
    component: ContentRoutesComponent,
    pathMatch: 'full',
  },
  {
    path: 'example01',
    component: Example01Component,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
