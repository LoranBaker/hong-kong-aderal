import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <app-hero></app-hero>
      <app-menu-showcase></app-menu-showcase>
      <app-opening-hours></app-opening-hours>
      <app-testimonials></app-testimonials>
      <app-allergens></app-allergens>
      <app-footer></app-footer>
    </main>
  `,
  styles: [`main { position: relative; }`]
})
export class AppComponent {}