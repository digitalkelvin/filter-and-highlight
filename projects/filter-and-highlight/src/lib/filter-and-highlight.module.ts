import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FilterAndHighlightComponent } from './filter-and-highlight.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [FilterAndHighlightComponent, FilterPipe],
  imports: [],
  exports: [FilterAndHighlightComponent, FilterPipe],
})
export class FilterAndHighlightModule {}
