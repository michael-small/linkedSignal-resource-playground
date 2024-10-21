import { Component, signal } from '@angular/core';
import { ChildComponent } from './child.component';
import { FormsModule } from '@angular/forms';
import { ChildMoreFeaturesComponent } from './child-more-features.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, ChildMoreFeaturesComponent, FormsModule],
  template: `
    <!-- <app-child [userId]="id()" /> -->
    <app-child-more-features [userId]="id()" />
    <select [(ngModel)]="id">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
  `,
})
export class ParentComponent {
    id = signal(1)
}
