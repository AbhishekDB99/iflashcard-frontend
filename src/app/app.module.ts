import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '@coreui/angular';
import '@angular/compiler';
import {
  NavModule,
  NavbarModule,
  DropdownModule,
  // ContainerComponent,
} from '@coreui/angular';
import { AngularEventsComponent } from './angular-events/angular-events.component';
import { FormsModule } from '@angular/forms';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { ChildComponent } from './child/child.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CardComponent,
    LoginComponent,
    AngularEventsComponent,
    AngularFormsComponent,
    ChildComponent,
    AngularPipesComponent,
    UsdInrPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    HeaderModule,
    NavModule,
    NavbarModule,
    DropdownModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormsModule],
})
export class AppModule {}
