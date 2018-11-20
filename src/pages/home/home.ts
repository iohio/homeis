import { HomeistabsPage } from './../homeistabs/homeistabs';
import { User } from './../../models/user';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {} as User


  constructor(public load: LoadingController, private fireAut: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public ar: AlertController) {

  }

  login(user: User){

     try{
    if(user.password.length < 6){
      var ar = this.ar.create({
    subTitle: 'รหัสผ่านผิดพลาด',
    buttons: ['ตกลง']
      })
      ar.present();
    }
    else if(user.password.length >= 6) {
      this.fireAut.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password); 
      var loader = this.load.create({
        content: "กำลังเข้าสู่ระบบ",
        duration:2000
      })
      loader.present();
      this.navCtrl.push(HomeistabsPage);
    }
   }
  catch(e){
    console.error(e);
  }
  }

  goRegister(){
    this.navCtrl.push(RegisterPage);
  }
}
