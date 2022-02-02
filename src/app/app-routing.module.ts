import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatchAllComponent } from './catch-all-component';

const routes: Routes = [
  // Add this route to catch all pages
  {
    path: '**',
    component: CatchAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
