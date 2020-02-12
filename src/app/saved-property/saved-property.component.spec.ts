import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPropertyComponent } from './saved-property.component';

describe('SavedPropertyComponent', () => {
  let component: SavedPropertyComponent;
  let fixture: ComponentFixture<SavedPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
