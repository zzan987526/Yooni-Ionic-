import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AppService, AppGlobal } from '../../app/app.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  invites : Array<any> = [];
  constructor(public navCtrl: NavController,public appService: AppService) {
    this.getInvitas();
    
  }

  goDetail() {
    this.navCtrl.push('LoginPage');
    console.debug("yes");
  }

  getInvitas(){
    let token = window.localStorage.getItem("token");
    if(token == null){
      this.navCtrl.setRoot('LoginPage');
    }
    this.appService.httpPostWithToken(AppGlobal.API.getInvitation,null,d=>{
        this.invites = d;
    })
  }
}
