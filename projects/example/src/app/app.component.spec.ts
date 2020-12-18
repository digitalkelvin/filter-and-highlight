import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FilterAndHighlightComponent, FilterPipe } from 'filter-and-highlight';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {

  let fixture : ComponentFixture<AppComponent>;
  let app: AppComponent;
  const blurEvent = new InputEvent('blur');

  let input: DebugElement;
  let fahDiv: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule, BrowserModule ],
      declarations: [
        AppComponent, FilterPipe, FilterAndHighlightComponent
      ],
      providers: [FilterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    input = fixture.debugElement.query(By.css('input'));
    fahDiv = fixture.debugElement.query(By.css('fah-filter-and-highlight'));
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'example'`, () => {
    expect(app.title).toEqual('Filter And Highlight Example App');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Filter And Highlight Example App');
  });

  it('should return two objects in array', () => {
    fixture.detectChanges();
    expect(app.artists).toHaveSize(2);
  });

  it('return full array', () => {
    input.nativeElement.value = 'ma';
    input.nativeElement.dispatchEvent(blurEvent);
    expect(app.artists).toHaveSize(2);
  })

  it('bind input to correct property', () =>{
    fixture.detectChanges();
    input.nativeElement.value = '2Pac';
    input.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(app.filterString).toBe('2Pac');
  })

  it('bind input to correct property', () =>{
    fixture.detectChanges();
    input.nativeElement.value = '2Pac';
    input.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(app.filterString).toBe('2Pac');
  })

});
