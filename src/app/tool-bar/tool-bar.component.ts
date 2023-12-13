import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TarefaAddFormComponent } from '../tarefa-add-form/tarefa-add-form.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {

  @Output() newItemEvent = new EventEmitter<string>(); 

  constructor(private _dialog: MatDialog) { }

  abrirAddTarefaForm() {
    const f = this._dialog.open(TarefaAddFormComponent);
    f.afterClosed().pipe(filter(tarefa => tarefa)).subscribe(tarefa => {
      this.addNewItem(tarefa.tarefa);
    })
  }

  addNewItem(value: string) { 
    this.newItemEvent.emit(value); 
  }

}
