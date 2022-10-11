import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanshopComponent } from './womanshop.component';

describe('WomanshopComponent', () => {
  let component: WomanshopComponent;
  let fixture: ComponentFixture<WomanshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomanshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomanshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
