import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManshopComponent } from './manshop.component';

describe('ManshopComponent', () => {
  let component: ManshopComponent;
  let fixture: ComponentFixture<ManshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
