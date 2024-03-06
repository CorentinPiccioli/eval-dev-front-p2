import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {IEvent} from "../../interfaces/ievent";
import {CommonModule, DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

  public events : IEvent[] = [];
  constructor(private _eventService : EventsService, private router: Router) {

  }

  ngOnInit() {
    this._eventService.getEvents().then((events) => {
      this.events = events;
    }).catch((error) => {
      console.error(error);
    });
  }

  editEvent(event: IEvent) {
    this.router.navigate(['edit', event.Id], {state: {event: event}});
  }
}
