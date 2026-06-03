import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('header') headerRef!: ElementRef;
  @ViewChildren('cardEl') cardEls!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;

  reviews = [
    {
      title: 'Fantastisk',
      text: 'De ansatte er alltid blide og fornøyde, er en glede å komme inn og bli ønsket velkommen med så store smil. Det er en grunn til at vi feirer alle familiebursdager her. Fantastisk god mat kombinert med varme omgivelser gjør dette til min favoritt spiseplass i Arendal.',
      author: 'Joanna Lie',
      stars: 5
    },
    {
      title: 'Deilig mat',
      text: 'Deilig mat, superhyggelig betjening, rent og koselig. Ekstra poeng for buffetservering!',
      author: 'Arnhild Reinum',
      stars: 5
    },
    {
      title: 'Buffe',
      text: 'Jeg og vennene mine elsker maten der. Oppmerksom og hyggelig betjening og hyggelige priser! Buffeten er fast for oss.',
      author: 'Mona Berntsen',
      stars: 5
    },
    {
      title: 'Rimelig og godt',
      text: 'God service og utmerket god mat for en rimelig pris.',
      author: 'Eva Kleivane',
      stars: 5
    }
  ];

  stars(n: number) { return Array(n).fill(0); }

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

    if (this.headerRef) this.observer.observe(this.headerRef.nativeElement);
    this.cardEls.forEach(el => this.observer.observe(el.nativeElement));
  }

  ngOnDestroy() { this.observer?.disconnect(); }
}