import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { EventService } from "../shared/events.service";

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(
        private _eventService:EventService,
        private router:Router
    ) {

    }
    
    canActivate(route:ActivatedRouteSnapshot) {
        const eventExists = !!this._eventService.getEvent(+route.params['id']); // '!!' casts to boolean

        if(!eventExists) {
            this.router.navigate(['/404']);
        }

        return eventExists; // have to return a boolean for canActivate()
    }
}