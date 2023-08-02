import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonList, IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild(IonList) ionList: IonList;

  constructor( private dataservice: DataService ) { }

  ngOnInit() {

    this.usuarios = this.dataservice.getUsuarios();

  }

   favorite(user: any) {
    console.log('favorite', user);
    this.ionList.closeSlidingItems();
   }
   share(user: any){
    console.log('share', user);
    this.ionList.closeSlidingItems();
   } 
   delete(user: any){
    console.log('delete', user.name);
    this.ionList.closeSlidingItems();
   } 

}
