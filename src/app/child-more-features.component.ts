import { Component, computed, inject, input, linkedSignal, resource } from '@angular/core';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '../../../angular/dist/packages-dist/common';

@Component({
  selector: 'app-child-more-features',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  template: `
    <h1>Edit Profile</h1>
    @if (userResource.status() === 'resolved') {
        Full Name: <input [(ngModel)]="form.fullName"/>
        Email: <input [(ngModel)]="form.email"/>
        Age: <input [(ngModel)]="form.age"/>
        <br />
        Accepted TOS: <input type="checkbox" [(ngModel)]="form_acceptedTOS" [checked]="form_acceptedTOS"/>
    }
  `,
})
export class ChildMoreFeaturesComponent {
    private readonly userService = inject(UserService)
    userId = input.required<number>();

    userResource = resource({
        request: () => ({id:  this.userId()}),
        loader: (params) => this.userService.getUser(params.request.id)
    })
    
    form = {
        fullName: linkedSignal(() => this.userResource.value()?.firstName ?? ''),
        email: linkedSignal(() => this.userResource.value()?.email ?? ''),
        age: linkedSignal(() => this.userResource.value()?.age),
    }

    form_acceptedTOS = linkedSignal({
        source: this.form.fullName,
        computation: (res, prev) => {
            return !prev?.source ? res : false
        }
    })
}
