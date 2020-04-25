import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  // images are relative to the index.html file 
  // by default, the /assets folder is included in the angular.json's assets array
  // styles and scripts have a separate section in angular.json

  // events-app is loaded when our app bootstraps itself, then loads these two
  // <!-- <events-list></events-list> -->
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `
})
// now, we have "template: '<events-list></events-list>'"; later, this will be replaced with "<router-outlet></router-outlet>"

export class EventsAppComponent {
  title = 'Events App';
}
