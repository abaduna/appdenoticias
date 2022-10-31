import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeNoticiasComponent } from './listado-de-noticias.component';

describe('ListadoDeNoticiasComponent', () => {
  let component: ListadoDeNoticiasComponent;
  let fixture: ComponentFixture<ListadoDeNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDeNoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoDeNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
