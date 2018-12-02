import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewnoticiaComponent } from './newnoticia.component';

describe('NewnoticiaComponent', () => {
  let component: NewnoticiaComponent;
  let fixture: ComponentFixture<NewnoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewnoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewnoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
