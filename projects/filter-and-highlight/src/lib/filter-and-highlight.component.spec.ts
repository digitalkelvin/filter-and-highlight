import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FilterAndHighlightComponent } from './filter-and-highlight.component';

describe('FilterAndHighlightComponent', () => {
  let component: FilterAndHighlightComponent;
  let fixture: ComponentFixture<FilterAndHighlightComponent>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAndHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAndHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('create componenent', () => {
    expect(component).toBeTruthy();
  });


});
