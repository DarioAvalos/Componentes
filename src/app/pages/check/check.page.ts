import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class CheckPage implements OnInit {

  data = [
    {
      name:'primary',
      selected: false
    },
    {
      name:'secondary',
      selected: true
    },
    {
      name:'tertiary',
      selected: false
    },
    {
      name:'success',
      selected: true
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick( item:any ){
    console.log(item);
  }

  verData(){
    console.log(this.data);
  }

}
