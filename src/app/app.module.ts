// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// components
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.components';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';

// services
import { EventService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

@NgModule({
  // imports are used for importing other modules
  imports: [
    BrowserModule, // makes core angular services and directives available; p much for every app
    RouterModule.forRoot(appRoutes) // ALSO: need to tell angular where our web server is hosted; needs to know where its urls are relative to (index.html base href)
  ],
  // declarations are for components and pipes
  // declarations depend on imports
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component
  ],
  // providers are for services
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
