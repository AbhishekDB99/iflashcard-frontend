import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeatureComponent } from './feature/feature.component';
import { MainComponent } from './main/main.component';
import { TestChildRouterComponent } from './test-child-router/test-child-router.component';
import { WildPageComponent } from './wild-page/wild-page.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'pricing',
    component:PricingComponent
  },
  {
    path:'feature',
    component:FeatureComponent,
    children:[
      {
        path:'test',
        component:TestChildRouterComponent
      },
    ]
  },
  {
    path:'',
    component:MainComponent
  },
  {
    path:'**',
    component:WildPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 