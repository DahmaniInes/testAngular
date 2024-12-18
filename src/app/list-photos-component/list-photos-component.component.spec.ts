import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhotosComponentComponent } from './list-photos-component.component';

describe('ListPhotosComponentComponent', () => {
  let component: ListPhotosComponentComponent;
  let fixture: ComponentFixture<ListPhotosComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPhotosComponentComponent]
    });
    fixture = TestBed.createComponent(ListPhotosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
