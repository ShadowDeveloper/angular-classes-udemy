import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo:'/contato',
    pathMatch:'full'
  }
]


@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  declarations:[],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{

}