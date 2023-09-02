import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { PipesModule } from 'src/app/pipes/pipes.module';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule, PipesModule]
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any>;
  pestana: string = '';
  
  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged( event:any ){
    // console.log( event.detail.value );
    this.pestana = event.detail.value;
  }

}
