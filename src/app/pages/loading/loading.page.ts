import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;

  constructor( private loadingController: LoadingController ) { }

  ngOnInit() {
  }

  mostrarLoading(){
    this.presentLoading("Hola Mundo");
    // setTimeout(() => {
    //   this.loading.dismiss();
    // }, 2000);
  
  }
  

  async presentLoading( message: string) {
    this.loading = await this.loadingController.create({
      message,
      duration: 2000,
    });

    await this.loading.present();
  }


}
