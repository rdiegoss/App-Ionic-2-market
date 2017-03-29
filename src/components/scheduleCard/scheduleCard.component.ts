import { Component, Input } from '@angular/core';

@Component({
  selector: 'schedule-card',
  templateUrl: 'scheduleCard.component.html'
})

export class ScheduleCardComponent {

  @Input() status;
  @Input() message;
  @Input() about;

  constructor() {}

}
