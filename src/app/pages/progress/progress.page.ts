import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class ProgressPage implements OnInit {

  porcentaje: number = 0.05

  constructor() { }

  ngOnInit() {
  }

  rangeChange( event:any ){
    // console.log(event.detail.value);
    this.porcentaje = event.detail.value/ 100;
  }

}
