import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ModalInfoPage implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

}
