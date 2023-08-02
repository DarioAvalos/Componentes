import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInfiniteScroll, IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);
  

  @ViewChild( IonInfiniteScroll ) inifiteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

    loadData(event:any) {
      console.log(event);
      setTimeout(() => {

        if (this.data.length > 10){
          this.inifiteScroll.complete();
          this.inifiteScroll.disabled = true;
        }

        const nuevoArr = Array(20);
        this.data.push ( ...nuevoArr);
        // (event as InfiniteScrollCustomEvent).target.complete();
        this.inifiteScroll.complete();
      }, 1500);
    }
}

