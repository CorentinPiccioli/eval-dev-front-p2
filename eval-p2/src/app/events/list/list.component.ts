import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {IEvent} from "../../interfaces/ievent";
import {CommonModule, DatePipe} from "@angular/common";

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
  constructor(private _eventService : EventsService) {

  }

  ngOnInit() {
    this._eventService.getEvents().then((events) => {
      this.events = events;
    }).catch((error) => {
      console.error(error);
    });
  }
}
