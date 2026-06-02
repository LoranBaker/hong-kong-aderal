import { Component } from '@angular/core';

@Component({
  selector: 'app-opening-hours',
  templateUrl: './opening-hours.component.html',
  styleUrls: ['./opening-hours.component.css']
})
export class OpeningHoursComponent {
  hours = [
    { day: 'Mandag – Torsdag', time: '11:30 – 21:00', highlight: false },
    { day: 'Fredag',           time: '11:30 – 22:00', highlight: false },
    { day: 'Lørdag',           time: '12:00 – 22:00', highlight: false },
    { day: 'Søndag + helligdager', time: '13:00 – 21:00', highlight: true },
    { day: '24. desember',     time: 'Stengt',        highlight: false },
  ];
}