# Angular Filter And Highlight Matching Text
Filter Angular arrays and highlight matching text.

## Usage In Component
Import ```FilterAndHighlightModule``` into `*.module.ts`:
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { FilterAndHighlightModule } from 'filter-and-highlight';

@NgModule({
    imports: [BrowserModule, FormsModule, FilterAndHighlightModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})

export class AppModule {}
```

Initialize array:
```ts
artists = [
    {
        name: '2pac',
        age: 25,
        songs: [
            { title: 'Dear Mama', year: 1995, album: 'Me Against the World' },
            {title: 'Brenda\'s Got a Baby', year: 1991, album: '2Pacalypse Now'}
        ]
    },
    {
        name: 'Bill Withers',
        age: 81,
        songs: [
            { title: 'Grandma\'s Hands', year: 1971, album: 'Just as I Am' },
            { title: 'Lean on Me', year: 1972, album: 'Still Bill' }
        ]
    }
]
```
Initialize options:
```ts
myOptions = {
    minLength: 2,
    backgroundColor: '#FFFFFF',
    textColor: '#0000FF',
    fontWeight: '900',
    padding: '3px',
    border: '3px solid #c4302b',
    borderRadius: '13px',
};
```

## Usage In Templates
Set up an input with class `fah-input` and bind `filter string`:
```html
<input placeholder="Search" type="text" [(ngModel)]="filterString" class="fah-input">
```

Wrap element in  `<fah-filter-and-highlight></fah-filter-and-highlight>` and bind `options` object:
```html
<fah-filter-and-highlight [options]="options">
```

Use `filter` pipe on `NgFor` directive, and pass *filter string* parameter:
```html
<div class="artist-div" *ngFor="let artist of artists | filter: filterString">
```

If array consists of **only numbers**, set second parameter to `true`:
```html
<div *ngFor="let price of prices | filter: filterString : true">
```

A complete example looks like this:
```html
<input placeholder="Search" type="text" [(ngModel)]="filterString" class="fah-input">

<fah-filter-and-highlight [options]="myOptions">

    <div class="artist-div" *ngFor="let artist of artists | filter: filterString">
        <div class="data-div">{{artist.name}}: {{artist.age}}</div>
        <div class="song-div" *ngFor="let song of artist.songs">
            {{song.title}} - {{song.year}} -- {{song.album}}
        </div>
    </div>

</fah-filter-and-highlight>
```
