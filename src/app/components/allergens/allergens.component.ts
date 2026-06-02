import { Component } from '@angular/core';

@Component({
  selector: 'app-allergens',
  templateUrl: './allergens.component.html',
  styleUrls: ['./allergens.component.css']
})
export class AllergensComponent {
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
}