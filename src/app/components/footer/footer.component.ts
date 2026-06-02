import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year = new Date().getFullYear();

  links = [
    { label: 'Meny',        href: '#menu' },
    { label: 'Åpningstider', href: '#hours' },
    { label: 'Buffet',      href: '#buffet' },
    { label: 'Allergener',  href: '#allergens' },
    { label: 'Kontakt',     href: '#contact' },
  ];
}