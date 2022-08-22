import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoedetailsComponent } from './shoedetails/shoedetails.component';
import { ShoesComponent } from './shoes/shoes.component';

const routes: Routes = [
{
  path:'shoelink',component:ShoesComponent
},
{
  path:'shoelink',component:ShoedetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
