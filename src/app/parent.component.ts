import { Component, signal } from '@angular/core';
import { ChildComponent } from './child.component';
import { FormsModule } from '@angular/forms';
import { ChildMoreFeaturesComponent } from './child-more-features.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, ChildMoreFeaturesComponent, FormsModule],
  template: `
    <p>Examples adapted from <a href="https://x.com/i/bookmarks?post_id=1847285255406846124" target="_blank">
      Armen Vardanyan's</a> tweets which were made before linkedSignal or resource were first released in a preview version.</p>
    <i>There is a simpler app-child component you can comment back in inside parent.component.ts that just uses the basic resource and linkedSignal. This example commented in by default also has rxResource, and both rxResource + resource example have the reset pattern.</i>
    <div style="margin-top: 1rem">
      <label>User ID </label>
      <input type="number" [(ngModel)]="id" min="1" max="3" />
    </div>
    <!-- <app-child [userId]="id()" /> -->
    <app-child-more-features [userId]="id()" />
  `,
})
export class ParentComponent {
  id = signal(1);
}
