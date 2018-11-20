import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;
  

  constructor(public load: LoadingController, private fireAut: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public ar: AlertController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user: User){
    
    try{
    if(user.password.length < 6){
      var ar = this.ar.create({
    subTitle: 'กรุณากรอกรหัสให้มากกว่า 6 ตัว',
    buttons: ['ตกลง']
      })
      ar.present();
    }
    else if(user.password.length >= 6) {
      this.fireAut.auth.createUserWithEmailAndPassword(user.email, user.password); 
      var loader = this.load.create({
        content: "กำลังลงทะเบียน",
        duration:3000
      })
      loader.present();
      this.navCtrl.push(HomePage);
    }
   }
  catch(e){
    console.error(e);
  }
   
}
}
