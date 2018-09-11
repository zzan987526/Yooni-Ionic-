import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService, AppGlobal } from '../../app/app.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  tips : String;

  constructor(public navCtrl: NavController, public navParams: NavParams,public appService: AppService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Login(name,pass){
    this.tips = "";
    let params = {
      'username' : name.value,
      'password' : pass.value
    };
    this.appService.httpPost(AppGlobal.API.Login,params,d =>{
      if(d.code == 0){
        console.log("success");
        window.localStorage.setItem('token',d.message);
        this.navCtrl.setRoot('TabsPage');
      } else {
        this.tips = d.message;
      }
    })
    
  }
}
