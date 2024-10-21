import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent],
  template: `
    <app-parent />
  `
})
export class AppComponent {}
