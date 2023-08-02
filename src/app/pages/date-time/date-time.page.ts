import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  
  customYearValues = [2025, 2020, 2016, 2008, 2004, 2000];

  // customPickerOptions = {
  //   buttons: [
  //     {
  //       text: "Hola"
  //     },
  //     {
  //       text: "Mundo"
  //     }
  //   ]
  // }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha (event:any){
    console.log(event);
    console.log( new Date( event.detail.value));
  }

}
