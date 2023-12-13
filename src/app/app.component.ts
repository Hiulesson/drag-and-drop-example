import { Component } from '@angular/core';
import { TarefaAddFormComponent } from './tarefa-add-form/tarefa-add-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exemplo2_drag_and_drop';

  constructor(private _dialog: MatDialog){}

  addTarefa() {
    this._dialog.open(TarefaAddFormComponent);
  }

  receivedData!: string;

  receiveData(data: string) {
    this.receivedData = data;
    console.log("AppComponent"+ data);
  }

  getReceiveData(){
    return this.receivedData;
  }

}
