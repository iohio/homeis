import { HomeistabsPage } from './../pages/homeistabs/homeistabs';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';



var config = {
  apiKey: "AIzaSyBQdYbfAPmc6EBCWAwaTNduF6qCL2d2NYQ",
  authDomain: "homeis-ee77.firebaseapp.com",
  databaseURL: "https://homeis-ee77.firebaseio.com",
  projectId: "homeis-ee77",
  storageBucket: "homeis-ee77.appspot.com",
  messagingSenderId: "953413857344"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    HomeistabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    HomeistabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth
  ]
})
export class AppModule {}
