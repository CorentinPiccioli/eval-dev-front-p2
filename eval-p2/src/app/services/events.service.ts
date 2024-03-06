import { Injectable } from '@angular/core';
import {HttpRequestService} from "../domain/http-request.service";
import {IEvent} from "../interfaces/ievent";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private _httpRequest: HttpRequestService) { }

  public getEvents() {
    return new Promise<IEvent[]>((resolve, reject) => {
      return this._httpRequest.get<any>('/event/list').subscribe({
        next: result => resolve(result.Value),
        error: error => reject(error)
      });
    });
  }

  public createEvent(event: IEvent) {
    return new Promise<IEvent>((resolve, reject) => {
      return this._httpRequest.post<any>('/event/add', event).subscribe({
        next: result => resolve(result.Value),
        error: error => reject(error)
      });
    });
  }

  public updateEvent(event: IEvent) {
    return new Promise<IEvent>((resolve, reject) => {
      return this._httpRequest.update<any>('/events', event).subscribe({
        next: result => resolve(result.Value),
        error: error => reject(error)
      });
    });
  }

  public deleteEvent(eventId: string) {
    return new Promise<IEvent>((resolve, reject) => {
      return this._httpRequest.delete<any>('/event/delete/'+eventId).subscribe({
        next: result => resolve(result.Value),
        error: error => reject(error)
      });
    });
  }
}
