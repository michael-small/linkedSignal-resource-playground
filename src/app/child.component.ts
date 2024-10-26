import {
  Component,
  inject,
  input,
  linkedSignal,
  resource,
} from '@angular/core';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';

// Example from Armen Vardanyan: https://x.com/Armandotrue/status/1847285255406846124/photo/1
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Edit Profile</h1>
    @if (!userResource.isLoading()) {
      Full Name: <input [(ngModel)]="form.fullName"/>
      Email: <input [(ngModel)]="form.email"/>
      Age: <input [(ngModel)]="form.age"/>
    }
  `,
})
export class ChildComponent {
  private readonly userService = inject(UserService);
  userId = input.required<number>();

  userResource = resource({
    request: () => ({ id: this.userId() }),
    loader: (params) => this.userService.getUserPromise(params.request.id),
  });

  form = {
    fullName: linkedSignal(() => this.userResource.value()?.firstName ?? ''),
    email: linkedSignal(() => this.userResource.value()?.email ?? ''),
    age: linkedSignal(() => this.userResource.value()?.age),
  };
}
