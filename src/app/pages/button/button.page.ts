import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ButtonPage implements OnInit {

  favorito: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.favorito = !this.favorito;
  }

}
