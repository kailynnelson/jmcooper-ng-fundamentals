import { Component } from '@angular/core';
import { EventService } from '../shared/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    // selector: 'event-details', // don't need a selector bc it's going to be routed to directly
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
    `]
})

export class EventDetailsComponent {
    event:any;

    constructor(
        private _eventService:EventService,
        private route:ActivatedRoute // for getting event id from url param :id
    ) { }

    // call the service here, not the constructor, because that's a longer-running ajax call
    ngOnInit() {
        this.event = this._eventService.getEvent(+this.route.snapshot.params['id']); // '+' casts as number (https://medium.com/@nikjohn/cast-to-number-in-javascript-using-the-unary-operator-f4ca67c792ce)
    }
}