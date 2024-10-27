import {Component, inject, ResourceStatus} from '@angular/core';
import {DatePipe, JsonPipe} from '@angular/common';
import {UserService} from './user.service';
import {rxResource} from '@angular/core/rxjs-interop';
import {of} from 'rxjs';

@Component({
  selector: 'app-resource-reload',
  standalone: true,
  imports: [JsonPipe, DatePipe],
  template: `
    <button (click)="timeResourceInitAndOnDemand.reload()">Reload time</button>
    <p>The time, init and on demand: {{ timeResourceInitAndOnDemand.value() | json | date:'medium' }}</p>
    <p>(typeof) The time, init and on demand: {{ typeof timeResourceInitAndOnDemand.value() }}</p>

    <button (click)="timeResourceOnDemand.reload()">Reload time</button>
    <p>Time on demand: {{ timeResourceOnDemand.value() | json | date:'medium' }}</p>
    <p>(typeof) Time on demand: {{ typeof timeResourceOnDemand.value() }}</p>
  `,
})
export class ResourceReloadComponent {
  userService = inject(UserService);

  // See "Refresh and Manual Loading" https://www.angulararchitects.io/en/blog/asynchronous-resources-with-angulars-new-resource-api/ for promise version I borrowed this from
  timeResourceInitAndOnDemand = rxResource({
    // no request observable === no automatic subsequent loading
    loader: (param) => {
      // The default status
      return param.previous.status === ResourceStatus.Idle
        ? this.userService.getStaticObservable()
        : this.userService.getStaticObservable();
    },
  });

  timeResourceOnDemand = rxResource({
    // no request observable === no automatic subsequent loading
    loader: (param) => {
      // The default status
      return param.previous.status === ResourceStatus.Idle
        ? of()
        : this.userService.getStaticObservable();
    },
  });
}
