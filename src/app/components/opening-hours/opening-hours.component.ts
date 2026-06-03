import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-opening-hours',
  templateUrl: './opening-hours.component.html',
  styleUrls: ['./opening-hours.component.css']
})
export class OpeningHoursComponent implements AfterViewInit, OnDestroy {
  @ViewChild('hoursCard') cardRef!: ElementRef;
  @ViewChild('hoursImage') imageRef!: ElementRef;

  private observer!: IntersectionObserver;

  hours = [
    { day: 'Mandag – Torsdag', time: '11:30 – 21:00', highlight: false },
    { day: 'Fredag',           time: '11:30 – 22:00', highlight: false },
    { day: 'Lørdag',           time: '12:00 – 22:00', highlight: false },
    { day: 'Søndag + helligdager', time: '13:00 – 21:00', highlight: true },
    { day: '24. desember',     time: 'Stengt',        highlight: false },
  ];

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    if (this.cardRef)  this.observer.observe(this.cardRef.nativeElement);
    if (this.imageRef) this.observer.observe(this.imageRef.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}