import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the HomeistabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homeistabs',
  templateUrl: 'homeistabs.html'
})
export class HomeistabsPage {

  newsRoot = 'NewsPage'
  homeisRoot = 'HomeisPage'
  singInRoot = 'SingInPage'
  shelterRoot = 'ShelterPage'


  constructor(public navCtrl: NavController) {}

}
