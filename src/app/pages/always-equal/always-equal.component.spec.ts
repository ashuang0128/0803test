import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysEqualComponent } from './always-equal.component';

describe('AlwaysEqualComponent', () => {
  let component: AlwaysEqualComponent;
  let fixture: ComponentFixture<AlwaysEqualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysEqualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlwaysEqualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
