import { Component } from '@angular/core';
import { ParentComponent } from './parent.component';
import {ResourceReloadComponent} from './resource-reload.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, ResourceReloadComponent],
  template: `
    <app-parent />
    <hr />
    <app-resource-reload />
  `,
})
export class AppComponent {}
