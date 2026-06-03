import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-allergens',
  templateUrl: './allergens.component.html',
  styleUrls: ['./allergens.component.css']
})
export class AllergensComponent implements AfterViewInit, OnDestroy {
  @ViewChild('header') headerRef!: ElementRef;
  @ViewChild('note') noteRef!: ElementRef;
  @ViewChildren('cardEl') cardEls!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;

  allergens = [
    { num: 1,  name: 'Melk',      icon: '🥛' },
    { num: 2,  name: 'Egg',       icon: '🥚' },
    { num: 3,  name: 'Peanøtter', icon: '🥜' },
    { num: 4,  name: 'Nøtter',    icon: '🌰' },
    { num: 5,  name: 'Soya',      icon: '🫘' },
    { num: 6,  name: 'Hvete',     icon: '🌾' },
    { num: 7,  name: 'Fisk',      icon: '🐟' },
    { num: 8,  name: 'Skalldyr',  icon: '🦐' },
    { num: 9,  name: 'Bløtdyr',   icon: '🦪' },
    { num: 10, name: 'Selleri',   icon: '🥬' },
    { num: 11, name: 'Sennep',    icon: '🌿' },
    { num: 12, name: 'Sesam',     icon: '🌱' },
    { num: 13, name: 'Lupin',     icon: '🫛' },
    { num: 14, name: 'Sulfitt',   icon: '⚗️' },
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (this.headerRef) this.observer.observe(this.headerRef.nativeElement);
    if (this.noteRef)   this.observer.observe(this.noteRef.nativeElement);
    this.cardEls.forEach(el => this.observer.observe(el.nativeElement));
  }

  ngOnDestroy() { this.observer?.disconnect(); }
}