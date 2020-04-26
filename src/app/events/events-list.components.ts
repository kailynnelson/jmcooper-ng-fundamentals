import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/events.service";
import { ToastrService } from "../common/toastr.service";

// global variables = bad
// not testable => since we aren't injecting this toastr, we can't mock it
// declare let toastr;

// decorator
@Component({
	// selector: 'events-list', // don't need this anymore because we're routing directly to it
	// use javascript string literal `` (es6) to make the template html easier to read
	template: `
		<div>
			<h1>Upcoming Angular Events</h1>
			<hr />
			<div class="row">
				<div *ngFor="let event of events" class="col-md-5">
					<event-thumbnail
						(click)="handleThumbnailClick(event.name)"
						[event]="event"
					></event-thumbnail>
				</div>
			</div>
		</div>
	`,
})

// saying "implements OnInit" requires the ngOnInit() method in the class => typescript compilation safety
export class EventsListComponent implements OnInit {
	events: any;

	// services are injected in the constructor
	constructor(
		private eventService: EventService,
		private toastrService: ToastrService
	) {}

	// lifecycle hook!
	ngOnInit() {
		// .getEvents() returns an observable
		// to get the data from the observable... SUBSCRIBE
		// this.events = this.eventService.getEvents().subscribe();
		// shouldn't set this.events to a value that will return asynchronously;
		// should only set when the data is received
		this.eventService.getEvents().subscribe((events) => {
			this.events = events;
		});
	}

	handleThumbnailClick(eventName) {
		this.toastrService.success(eventName);
	}
}

// diffs between constructor & ngoninit~
// REFS:
// https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit
// http://misko.hevery.com/code-reviewers-guide/flaw-constructor-does-real-work/
// CONSTRUCTOR
// called first (as part of constructing the component tree)
// should only be used to set up dependency injection
// NGONINIT
// 'lifecycle hook' (as part of running change detection)
// called after constructor -and- after first ngOnChanges()
// indicates that angular is done initializing the bindings
// should be used for all initialization/declaration

// templateUrl: './events-list.component.html'

// *ngFor => * = structural directive => these actually change the shape of the dom (actually add/remove html elements from the doc)
// let event of events => creates local variable 'event'; 'events' is the array to loop over; duplicate 'event-thumbnail' element for each in the array
// can use that variable anywhere inside the element being repeated ('event-thumbnail')

// three ways of inter-component communication:
// input, output, and template variables

// "#thumbnail" is a template reference/local variable to use anywhere else in our template
// '(click)="thumbnail"' is a pointer to our component

// if you need to send multiple values with an event handler/output, wrap them in an object first

// '[event]' should match an input parameter
// '"event1"' should match a member in our component
// html spec does allow for special characters in attribute names

// {{ }} interpolation represents one-way binding
// angular looks for the object on the component
// object named 'event' and a property called 'name'
// escape dollar sign => string literal, ${} = string literal syntax
// (later, we'll use a pipe to format currency and won't need the $)
