import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcategoryComponent } from './cardcategory.component';

describe('CardcategoryComponent', () => {
  let component: CardcategoryComponent;
  let fixture: ComponentFixture<CardcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
