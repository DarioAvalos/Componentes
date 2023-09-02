import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ComponentsModule]
})
export class RefresherPage implements OnInit {

  items: any[] = [];
  
  constructor() { }

  ngOnInit() {
  }

  doRefresh( event:any ) {

    setTimeout(() => {
      this.items = Array(20);
      event.target.complete();
    }, 1500);

  }

}
