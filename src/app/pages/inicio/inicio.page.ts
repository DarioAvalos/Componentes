import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, MenuController } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirecTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirecTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirecTo: '/button'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirecTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checks',
      redirecTo: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirecTo: '/date-time'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirecTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirecTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite-Scroll',
      redirecTo: '/infinite'
    },
    {
      icon: 'hammer-outline',
      name: 'Input Forms',
      redirecTo: '/input'
    },
    {
      icon: 'list-outline',
      name: 'List - Sliding',
      redirecTo: '/list'
    },
    {
      icon: 'reorder-three-outline',
      name: 'List - Reorder',
      redirecTo: '/list-reorder'
    },
    {
      icon: 'refresh-circle-outline',
      name: 'Loading',
      redirecTo: '/loading'
    }
  ];

  constructor( private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuCtrl.open('first');
  }

}
