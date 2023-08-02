import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class AlertPage implements OnInit {

  constructor( private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('click en ok!')
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo'
        }
      ]
    });

    await alert.present();
  }

  public alertButtons = [
    {
      text: 'OK',
      handler: ( data:any ) => {
        console.log(data)
      }
    }

  ];
  
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'date',
      placeholder: 'Age',
      min: '01-03-2015',
      max: '12-01-2025',
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    }
  ];

}


