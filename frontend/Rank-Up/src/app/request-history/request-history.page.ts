import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-request-history',
  templateUrl: './request-history.page.html',
  styleUrls: ['./request-history.page.scss'],
})
export class RequestHistoryPage implements OnInit {
  constructor(private alertController: AlertController, private location: Location) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ordina per:',
      buttons: [
        {
          text: 'Nome Utente',
          cssClass: 'alert-button-blue',
        },
        {
          text: 'Data di consegna',
          cssClass: 'alert-button-red',
        },
        {
          text: 'Nome attività',
          cssClass: 'alert-button-blue',
        },
      ],
    });

    await alert.present();
  }  

  ngOnInit() {
  }
  
  backButton() {
    this.location.back();
  }

}
