import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { PipesModule } from 'src/app/pipes/pipes.module';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, PipesModule]
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  textoBuscar: string = '';

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe( albumes => {
      this.albumes = albumes;
    });
  }

  onSearchChange( event:any ){
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
