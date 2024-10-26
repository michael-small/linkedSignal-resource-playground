import {
  Component,
  inject,
  input,
  linkedSignal,
  resource,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { rxResource } from '@angular/core/rxjs-interop';
import { UserService } from './user.service';
import { JsonPipe } from '@angular/common';

// Example adapted from Armen Vardanyan: https://x.com/Armandotrue/status/1847285255406846124/photo/1 and then extended a bit
@Component({
  selector: 'app-child-more-features',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  template: `
    <h1>Edit Profile</h1>

    <h2>Promise (resource)</h2>
    @if (!userResourcePromise.isLoading()) {
      Full Name: <input [(ngModel)]="formPromise.fullName"/>
      Email: <input [(ngModel)]="formPromise.email"/>
      Age: <input [(ngModel)]="formPromise.age"/>
      <br />
      Accepted TOS: <input type="checkbox" [(ngModel)]="form_acceptedTOSPromise" [checked]="form_acceptedTOSPromise()"/>
    }

    <hr />

    <h2>Observable (rxResource)</h2>
    @if (!userResourceObservable.isLoading()) {
      Full Name: <input [(ngModel)]="formObservable.fullName"/>
      Email: <input [(ngModel)]="formObservable.email"/>
      Age: <input [(ngModel)]="formObservable.age"/>
      <br />
      Accepted TOS: <input type="checkbox" [(ngModel)]="form_acceptedTOSObservable" [checked]="form_acceptedTOSObservable()"/>
    }
  `,
})
export class ChildMoreFeaturesComponent {
  private readonly userService = inject(UserService);
  userId = input.required<number>();

  // Promise based resource + linkedSignal based forms from that promise resource
  userResourcePromise = resource({
    request: () => ({ id: this.userId() }),
    loader: (params) => this.userService.getUserPromise(params.request.id),
  });
  formPromise = {
    fullName: linkedSignal(
      () => this.userResourcePromise.value()?.firstName ?? ''
    ),
    email: linkedSignal(() => this.userResourcePromise.value()?.email ?? ''),
    age: linkedSignal(() => this.userResourcePromise.value()?.age),
  };
  form_acceptedTOSPromise = linkedSignal({
    source: this.formPromise.fullName,
    computation: (res, prev) => {
      return !prev?.source ? res : false;
    },
  });

  // Observable based resource + linkedSignal based forms from that observable resource
  userResourceObservable = rxResource({
    request: () => ({ id: this.userId() }),
    loader: (params) => this.userService.getUserObservable(params.request.id),
  });
  formObservable = {
    fullName: linkedSignal(
      () => this.userResourceObservable.value()?.firstName ?? ''
    ),
    email: linkedSignal(() => this.userResourceObservable.value()?.email ?? ''),
    age: linkedSignal(() => this.userResourceObservable.value()?.age),
  };
  form_acceptedTOSObservable = linkedSignal({
    source: this.formObservable.fullName,
    computation: (res, prev) => {
      return !prev?.source ? res : false;
    },
  });
}
