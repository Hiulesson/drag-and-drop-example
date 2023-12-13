import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TarefaAddFormComponent } from '../tarefa-add-form/tarefa-add-form.component';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {
  todo = ['Vá trabalhar', 'Pegar as compras', 'Vá para casa', 'Adormecer'];

  fazendo = ['Levantar', 'Escovar os dentes', 'Tomar banho', 'Verificar e-mail', 'Passear com o cachorro'];

  done = ['Respirar'];

  @Input() newItem: string = "tea";

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("Drag "+this.newItem);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    
  }

  addItem(item: string) {
    this.todo.push(this.newItem);
  }

  addTarefa() {
    this._dialog.open(TarefaAddFormComponent);
  }

}
