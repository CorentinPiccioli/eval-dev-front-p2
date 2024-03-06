import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { IEvent } from "../../interfaces/ievent";
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule
  ]
})
export class EditComponent implements OnInit {

  eventForm: FormGroup;
  eventId: string | null = '';
  event: IEvent | undefined;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private _eventsService: EventsService) {
    this.eventForm = this.fb.group({
      Title: ['', Validators.required],
      Description: ['', Validators.required],
      Date: ['', Validators.required],
      Location: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.event = history.state.event;
      if (this.event) {
        console.log(this.event);
        const formattedDate = new Date(this.event.Date).toISOString().split('T')[0];
        this.eventForm.patchValue({...this.event, Date: formattedDate});
      }
    });
  }

  onSubmit() {
    const updatedEvent = this.eventForm.value;
    updatedEvent.Id = this.event?.Id;
    this._eventsService.updateEvent(updatedEvent).then(() => {
      this.router.navigate(['']);
    }).catch((error) => {
      console.error(error);
    })};

  cancel() {
    this.router.navigate(['']);
  }
}
