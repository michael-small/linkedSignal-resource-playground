import { Component } from '@angular/core';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent],
  template: `
    <app-parent />
  `,
})
export class AppComponent {}
