import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class InputPage implements OnInit {

  nombre: string = "Dario";
  usuario = {
    email: "",
    password: ""
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit( formulario: NgForm){
    console.log("submit");
    console.log(this.usuario);
    console.log(formulario);
    
  }

}
