import {Component, inject, resource, ResourceStatus} from '@angular/core';
import {DatePipe, JsonPipe} from '@angular/common';
import {UserService} from './user.service';
import {rxResource} from '@angular/core/rxjs-interop';
import {of} from 'rxjs';

@Component({
  selector: 'app-resource-reload',
  standalone: true,
  imports: [JsonPipe, DatePipe],
  template: `
    <h1>Reloading - Things loaded on init and/or on demand</h1>
    <a href="https://www.angulararchitects.io/en/blog/asynchronous-resources-with-angulars-new-resource-api/"
       target="_blank">See "Refresh and Manual Loading" for promise version I borrowed this from</a>
    <h2>resource</h2>
    <button (click)="timeResourceInitAndOnDemandPr.reload()">Reload time</button>
    <p>The time, init and on demand: {{ timeResourceInitAndOnDemandPr.value() | json | date:'medium' }}</p>
    <p>(typeof) The time, init and on demand: {{ typeof timeResourceInitAndOnDemandPr.value() }}</p>

    <button (click)="timeResourceOnDemandPr.reload()">Reload time</button>
    <p>Time on demand: {{ timeResourceOnDemandPr.value() | json | date:'medium' }}</p>
    <p>(typeof) Time on demand: {{ typeof timeResourceOnDemandPr.value() }}</p>

    <h2>rxResource</h2>
    <button (click)="timeRXResourceInitAndOnDemand.reload()">Reload time</button>
    <p>The time, init and on demand: {{ timeRXResourceInitAndOnDemand.value() | json | date:'medium' }}</p>
    <p>(typeof) The time, init and on demand: {{ typeof timeRXResourceInitAndOnDemand.value() }}</p>

    <button (click)="timeRXResourceOnDemand.reload()">Reload time</button>
    <p>Time on demand: {{ timeRXResourceOnDemand.value() | json | date:'medium' }}</p>
    <p>(typeof) Time on demand: {{ typeof timeRXResourceOnDemand.value() }}</p>
  `,
})
export class ResourceReloadComponent {
  userService = inject(UserService);

  timeResourceInitAndOnDemandPr = resource({
    // no request observable === no automatic subsequent loading
    loader: (param) => {
      // The default status
      return param.previous.status === ResourceStatus.Idle
        ? this.userService.getStaticPromise()
        : this.userService.getStaticPromise();
    },
  });

  timeResourceOnDemandPr = resource({
    // no request observable === no automatic subsequent loading
    loader: (param) => {
      // The default status
      return param.previous.status === ResourceStatus.Idle
        ? Promise.resolve(undefined)
        : this.userService.getStaticPromise();
    },
  });

  timeRXResourceInitAndOnDemand = rxResource({
    // no request observable === no automatic subsequent loading
    loader: (param) => {
      // The default status
      return param.previous.status === ResourceStatus.Idle
        ? this.userService.getStaticObservable()
        : this.userService.getStaticObservable();
    },
  });

  timeRXResourceOnDemand = rxResource({
    // no request observable === no automatic subsequent loading
    loader: (param) => {
      // The default status
      return param.previous.status === ResourceStatus.Idle
        ? of()
        : this.userService.getStaticObservable();
    },
  });
}
