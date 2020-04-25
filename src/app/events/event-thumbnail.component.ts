import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: \${{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
            </div>
        </div>
    `,
    styles: [`
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})


export class EventThumbnailComponent {
    @Input() event:any;

    getStartTimeStyle():any {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold' } // 'font-weight' needs quotes bc of the dash
        return { }
    }
}
// [ngClass]="getStartTimeClass()"
// getStartTimeClass() {
//     const isEarlyStart = this.event && this.event.time === '8:00 am';
//     return { green: isEarlyStart, bold: isEarlyStart };
// }

// input and output = decorators
// this event object will be passed in from another component ('events-list.component.ts', as 'event1')
// input parameters are used when constructing a child component to give it its data 
// output is often used in response to some event within a child component so it can receive some info when some event, like a click, occurs
// output are typically used to convey some event has occurred, thus 'EventEmitter' is a popular use case 

// someProperty:any = "some value";

// logFoo() is a public method on our event-thumbnail component
// remember referencing it on the events-list template? like #thumbnail on the selector, then a button calling (click)="template.LogFoo()"
// logFoo() {
//     console.log('foo');
// }

// for a single class, use class binding => [class.green]="event?.time === '8:00 am'"
// for multiple classes, use ngClass => expects an object where the object keys are the names of the classes to add, the values are boolean expression determining whether the class should be shown 
// [ngClass]="{ green: event?.time === '8:00 am', bold: event?.time === '8:00 am' }"
// in addition to objects, you can also pass [ngClass] a single string or an array of strings

// [ngSwitch] is binding on the property time, which is a string value 
// the *ngSwitchCases are also string values (wrapped in apostrophes '') => should always return the same data type as the property binding

// *ngIf="event?.location" => checking if 'location' is truthy
// if removed by ngIf, the elements will be commented out (not even rendered in the dom)
// imagine the performance savings if it was a whole component we were hiding! 
// hide elements when you're toggling frequently => bind to 'hidden' dom property => '<div [hidden]="!event?.location">'

// "{{event?.name}}" uses the safe-navigation operator if the event might have a null value
// "{{event?.name}}" => safe-navigation operator short-circuits the evaluation of the expression so you don't get question mark palooza

// styles array takes an array of strings, but typically you only hand it the styles for the component
// stylesUrl or templateUrl to refer to styles and templates outside of this component

// angular has built-in view encapsulation 
// in terms of styles, this means we can apply .well div {} styling to the parent or child and have it only affect the parent or child view
// when applied to the parent, looks like ".well[_ngcontent-c0] div[_ngcontent-c0]" when rendered in the browser
// if you want to apply parent styling to a child, use a deep selector

// interpolation is used when you just need to display data, e.g. "{{user.name}}"
// property binding is used when you want to bind data to the property of a dom element, e.g. '<img [src]="user.imageUrl" />'
// you can use js expressions like 2+2 with interpolation {{2+2}} or call a function like {{getIt()}}

// expression restrictions:
// assignment operators "=, +=, ++, etc."
// "new" keyword 
// chaining with ";"
// global namespace "console"

// expression recommendations:
// NO SIDE-EFFECTS: should not call any data or change the state of the app. uni-directional data flow 
// FAST: can get called more frequently than we realize 
// SIMPLE: no BOL 
// IDEMPOTENT: should return the same result (see NO SIDE-EFFECTS)

// event binding, e.g. '<button (click)="doSomething()"></button>'

// statement recommendations:
// SIMPLE: no BOL (can call something more complex on the component)

// CAN do expression chaining with ";"
// statement restrictions: 
// assignment operators "+=, ++, etc." (except =)
// "new" keyword 
// global namespace "console"