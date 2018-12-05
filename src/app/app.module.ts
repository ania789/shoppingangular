import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { BoughtProductComponent } from './bought-product/bought-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from 'src/services/products.service';
import { HttpService } from 'src/services/http.service';
import { NevbarComponent } from './nevbar/nevbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { HomeComponent } from './home/home.component';
import { SaveComponent } from './save/save.component';
import { DeleteComponent } from './delete/delete.component';
import {AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService } from 'src/services/user.service';
export const firebaseconfig = {
  apiKey: 'AIzaSyAxjc0H3w1iOVJbaougzdKifyUbFrcZgv8',
  authDomain: 'user-4e84c.firebaseapp.com',
  databaseURL: 'https://user-4e84c.firebaseio.com',
  projectId: 'user-4e84c',
  storageBucket: '',
  messagingSenderId: '29726302099'
};



@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    BuyProductComponent,
    BoughtProductComponent,
    NevbarComponent,
    ProgressbarComponent,
    HomeComponent,
    SaveComponent,
    DeleteComponent,
    SignUpComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseconfig),
    RouterModule.forRoot([
      { path: 'add-product', component: AddProductComponent },
      { path: 'bought-product', component: BoughtProductComponent },
      { path: 'buy-product', component: BuyProductComponent },
      { path: 'buy-product', component: BuyProductComponent },
      { path: '', component: HomeComponent },
      {path: 'login', component: SignUpComponent},
    ])
  ],
  providers: [ProductService, HttpService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

