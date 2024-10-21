import { Component, inject, input, linkedSignal, resource } from '@angular/core';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Edit Profile</h1>
    @if (userResource.status() === 'resolved') {
        Full Name: <input [(ngModel)]="form.fullName"/>
        Email: <input [(ngModel)]="form.email"/>
        Age: <input [(ngModel)]="form.age"/>
    }
  `,
})
export class ChildComponent {
    private readonly userService = inject(UserService)
    userId = input.required<number>();

    userResource = resource({
        request: () => ({id:  this.userId()}),
        loader: (params) => this.userService.getUser(params.request.id)
    })
    
    form = {
        fullName: linkedSignal(() => this.userResource.value()?.firstName ?? ''),
        email: linkedSignal(() => this.userResource.value()?.email ?? ''),
        age: linkedSignal(() => this.userResource.value()?.age)
    }
}
