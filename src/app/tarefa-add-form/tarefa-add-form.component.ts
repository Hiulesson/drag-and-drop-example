import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tarefa-add-form',
  templateUrl: './tarefa-add-form.component.html',
  styleUrls: ['./tarefa-add-form.component.css'],
  
})
export class TarefaAddFormComponent {

  tarefaForm: FormGroup;
  outroItem: string ="";

  
  constructor(
    private _fb: FormBuilder,
    
    private _dialogRef: MatDialogRef<TarefaAddFormComponent>,
    ){
    this.tarefaForm = this._fb.group({
      tarefa: '',
    });
  }

  onFormSubmit() {
    if(this.tarefaForm.valid){
      this.outroItem = this.tarefaForm.value.tarefa;
      this._dialogRef.close(this.tarefaForm.getRawValue());
    }
    
    
  }

}
