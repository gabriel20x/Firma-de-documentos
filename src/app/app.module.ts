// Angular material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginBoxComponent } from './Components/login-box/login-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { RegisterBoxComponent } from './Components/register-box/register-box.component';
import { HeaderComponent } from './Components/header/header.component';
import { SessionDialogComponent } from './Components/session-dialog/session-dialog.component';
import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    RegisterBoxComponent,
    HeaderComponent,
    SessionDialogComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [
    LoginBoxComponent,
    RegisterBoxComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
