import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class ModalPage implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal( ){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage
    });
    await modal.present();
  }

}
