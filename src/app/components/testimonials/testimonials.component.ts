import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  reviews = [
    {
      title: 'Fantastic',
      text: 'The staff are always cheerful and happy, it\'s a pleasure to come in and be welcomed with such big smiles. There\'s a reason we celebrate all our family birthdays here. Fantastic food combined with warm surroundings.',
      author: 'Joanna Lie',
      stars: 5
    },
    {
      title: 'Delicious food',
      text: 'Delicious food, super friendly service, clean and cozy. Extra points for buffet service!',
      author: 'Arnhild Reinum',
      stars: 5
    },
    {
      title: 'Buffet',
      text: 'My friends and I love the food there. Attentive and friendly service and nice prices! The buffet is a regular for us.',
      author: 'Mona Berntsen',
      stars: 5
    },
    {
      title: 'Reasonable and good',
      text: 'Good service and excellent food for a reasonable price.',
      author: 'Eva Kleivane',
      stars: 5
    }
  ];

  stars(n: number) {
    return Array(n).fill(0);
  }
}