import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.components';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

// compile-time safety with ":Routes"
export const appRoutes:Routes = [
    // whenever the url matches, show this component in the router-outlet component
    { path: 'events/new', component: CreateEventComponent }, // 'events/new' matches 'events/:id' (ordering this first is important bc processes it first)
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] }, // /events/1; id = parameter
    // errors
    { path: '404', component: Error404Component },
    // default
    { path: '', redirectTo: 'events', pathMatch: 'full' } // prefix or full => prefix: starts with
]

// FIXME: 
// go to '/events/event/id' (no matching route), goes to root 'localhost:4200', doesn't redirect to '/events'?

// TODO: 
// { path: '**', Component: PageNotFoundComponent } (https://medium.com/@nishu0505/error-cannot-match-any-routes-4188350b348f) 

