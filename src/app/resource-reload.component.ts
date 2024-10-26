import {Component, inject, ResourceStatus} from '@angular/core';
import {DatePipe, JsonPipe} from '@angular/common';
import {UserService} from './user.service';
import {rxResource} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-resource-reload',
  standalone: true,
  imports: [JsonPipe, DatePipe],
  template: `
    <button (click)="timeResource.reload()">Reload time</button>
    <p>The time: {{ timeResource.value() | json | date:'medium' }}</p>
  `,
})
export class ResourceReloadComponent {
  userService = inject(UserService);

  // See "Refresh and Manual Loading" https://www.angulararchitects.io/en/blog/asynchronous-resources-with-angulars-new-resource-api/ for promise version I borrowed this from
  timeResource = rxResource({
    // no request observable === no automatic subsequent loading
    loader: (param) => {
      // The default status
      return param.previous.status === ResourceStatus.Idle
        ? this.userService.getStaticObservable()
        : this.userService.getStaticObservable();
    },
  });
}
