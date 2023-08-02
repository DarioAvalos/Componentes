import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ["Aquaman","Superman","Batman","Mujer Maravilla", "Flash"];
  
  public isDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder ( event: any ){
    console.log( event );

    const itemMover = this.personajes.splice( event.detail.from, 1)[0];
    this.personajes.splice( event.detail.to, 0, itemMover);

    event.detail.complete();

    console.log(this.personajes);
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  toggleReorder() {
    this.isDisabled = !this.isDisabled;
  }

}

