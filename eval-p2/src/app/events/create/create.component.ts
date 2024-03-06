import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EventsService} from "../../services/events.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IEvent} from "../../interfaces/ievent";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  eventForm: FormGroup;

  constructor(private fb: FormBuilder, private eventsService: EventsService, private router: Router, private route: ActivatedRoute) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  onSubmit() {
    this.eventsService.createEvent(this.eventForm.value).then(() => {
      this.router.navigate(['']);
    }).catch((error) => {
      console.error(error);
    });
  }

  cancel() {
    this.router.navigate(['']);
  }
}
