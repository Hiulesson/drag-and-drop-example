import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaAddFormComponent } from './tarefa-add-form.component';

describe('TarefaAddFormComponent', () => {
  let component: TarefaAddFormComponent;
  let fixture: ComponentFixture<TarefaAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefaAddFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefaAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
