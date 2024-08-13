import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerentComponentComponent } from './perent-component.component';

describe('PerentComponentComponent', () => {
  let component: PerentComponentComponent;
  let fixture: ComponentFixture<PerentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerentComponentComponent]
    });
    fixture = TestBed.createComponent(PerentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
