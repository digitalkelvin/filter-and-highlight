import { Component } from '@angular/core';
import { FilterAndHighlightComponent } from 'filter-and-highlight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Filter And Highlight Example App';
  filterString = '';

  artists = [
    {
      name: '2pac',
      age: 25,
      songs: [
        { title: 'Dear Mama', year: 1995, album: 'Me Against the World' },
        {
          title: 'Brenda\'s Got a Baby ID',
          year: 1991,
          album: '2Pacalypse Now',
        },
      ]
    },
    {
      name: 'Bill Withers',
      age: 81,
      songs: [
        { title: 'Grandma\'s Hands', year: 1971, album: 'Just as I Am' },
        { title: 'Lean on Me', year: 1972, album: 'Still Bill' },
      ]
    }
  ];

  myOptions = {
    minLength: 2,
    backgroundColor: '#FFFFFF',
    textColor: '#0000FF',
    fontWeight: '900',
    padding: '3px',
    border: '3px solid #c4302b',
    borderRadius: '13px',
  };

  constructor() {}
}
