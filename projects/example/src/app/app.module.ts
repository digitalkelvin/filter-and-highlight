import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { FilterAndHighlightModule } from 'filter-and-highlight';

@NgModule({
  imports: [BrowserModule, FilterAndHighlightModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
