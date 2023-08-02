import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class AppComponent implements OnInit {

  componentes: Observable<Componente[]>;


  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  constructor(private dataService: DataService) {}
}
