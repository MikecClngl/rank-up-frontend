import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.page.html',
  styleUrls: ['./create-team.page.scss'],
})
export class CreateTeamPage implements OnInit {

  public descrBtns = ["Chiudi"];
  @ViewChild(IonModal) modal!: IonModal;
  blob: Blob | undefined | null;
  blobURL: string | undefined | null;

  constructor(private alertController: AlertController, private location: Location) { }

  privacyTeam: boolean = true;

  ngOnInit() {
  }

  backButton() {
    this.location.back();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Imposta Privacy Team:',
      buttons: [
        {
          text: 'Pubblico',
          cssClass: this.privacyTeam ? 'alert-button-red' : 'alert-button-blue',
          handler: () => {
            this.privacyTeam = true;
          }
        },
        {
          text: 'Privato',
          cssClass: this.privacyTeam ? 'alert-button-blue' : 'alert-button-red',
          handler: () => {
            this.privacyTeam = false;
          }

        },
      ],
    });

    await alert.present();
  }

  loadFileFromDevice(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      this.blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
      this.blobURL = URL.createObjectURL(this.blob);
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  closeModal() {
    this.blob = null;
    this.blobURL = null;
    this.modal.dismiss();
  }

  attach() {
    this.modal.dismiss();
  }
}
