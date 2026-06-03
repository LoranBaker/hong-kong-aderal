import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChildren,
  QueryList
} from '@angular/core';

export interface MenuItem {
  id: number;
  category: string;
  name: string;
  nameNo: string;
  desc: string;
  allergens: string;
  price: string;
  priceLabel: string;
  image: string;
}

@Component({
  selector: 'app-menu-showcase',
  templateUrl: './menu-showcase.component.html',
  styleUrls: ['./menu-showcase.component.css']
})
export class MenuShowcaseComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('itemEl') itemEls!: QueryList<ElementRef>;

  activeIndex = 0;
  private observer!: IntersectionObserver;

  items: MenuItem[] = [
    {
      id: 7,
      category: 'Spesialmeny',
      name: 'Six-course menu',
      nameNo: 'Seksretters meny',
      desc: 'Innbakte kongereker, innbakt kyllingfilet, innbakt fisk og sprøstekt svinekjøtt med søtsur saus. Pepperbiff og kylling i chop seuy. Serveres med ris.',
      allergens: '2, 5, 6, 7, 8, 9',
      price: 'NOK 460',
      priceLabel: '440 takeaway · min. 2 pers',
      image: 'assets/menu/six-course.jpg'
    },
    {
      id: 8,
      category: 'Husets Klassiker',
      name: 'Lai Lai Special',
      nameNo: 'Lai Lai Spesial',
      desc: 'Biff, kylling og kongereker med black bean garlic sauce, hvitløk og forskjellige grønnsaker. Serveres med ris.',
      allergens: '5, 6, 8, 9',
      price: 'NOK 240',
      priceLabel: '230 takeaway',
      image: 'assets/menu/lai-lai.jpg'
    },
    {
      id: 9,
      category: 'Japansk',
      name: 'Japanese Udon Noodles',
      nameNo: 'Japanske Udon Nudler',
      desc: 'Biff, kylling og kongereker med egg og forskjellige grønnsaker. En rik og smakfull nudlerett.',
      allergens: '2, 6, 8, 9',
      price: 'NOK 230',
      priceLabel: '220 takeaway',
      image: 'assets/menu/udon.jpg'
    },
    {
      id: 1,
      category: 'Forrett',
      name: 'Spring Rolls',
      nameNo: 'Vårruller',
      desc: 'Sprø vårruller fylt med grønnsaker og kjøtt, serveres med dipsaus. En klassisk asiatisk forrett.',
      allergens: '1, 6',
      price: 'NOK 95',
      priceLabel: '95 takeaway',
      image: 'assets/menu/spring-rolls.jpg'
    },
    {
      id: 10,
      category: 'Hovedrett',
      name: 'Chop Seuy',
      nameNo: 'Chop Seuy Spesial',
      desc: 'Biff, kylling og kongereker wokket med ferske grønnsaker i vår huslagde soyasaus. Serveres med ris eller nudler.',
      allergens: '5, 6, 8, 9',
      price: 'NOK 220',
      priceLabel: '210 takeaway',
      image: 'assets/menu/chop-seuy.jpg'
    },
    {
      id: 11,
      category: 'Thai',
      name: 'Red Curry',
      nameNo: 'Rød Curry',
      desc: 'Kylling i kremet rød curry med kokosnøttmelk, paprika, bambusskudd og thaibasilikum. Serveres med jasminris.',
      allergens: '6, 9',
      price: 'NOK 235',
      priceLabel: '225 takeaway',
      image: 'assets/menu/red-curry.jpg'
    }
  ];

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset['index']);
            this.activeIndex = idx;
            // Add visible class for scroll reveal
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    this.itemEls.forEach(el => this.observer.observe(el.nativeElement));
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}