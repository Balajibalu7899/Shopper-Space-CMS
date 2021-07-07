import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Special } from 'src/app/models/product';

@Component({
  selector: 'app-special-form',
  templateUrl: './special-form.component.html',
  styles: [],
})
export class SpecialFormComponent implements OnInit {
  @Input() specials!: Special[];
  @Output() update = new EventEmitter<Special[]>();
  allSecials!: Special[];
  constructor() {}

  ngOnInit(): void {
    console.log(this.specials);
    this.allSecials = [
      {
        title: 'Best Quality',
        image:
          'https://firebasestorage.googleapis.com/v0/b/ocean-…=media&token=568d43af-d018-402b-a7b6-e19bfb17c4f9',
        sub_title: 'Best Quality And Fresh Meat',
      } as Special,
      {
        image:
          'https://firebasestorage.googleapis.com/v0/b/ocean-…=media&token=0a33bbbe-6400-4f0c-970d-c2a9423999cb',
        sub_title: 'Hygiene is maintained will cleaning',
        title: 'Packing Hygiene',
      } as Special,
      {
        image:
          'https://firebasestorage.googleapis.com/v0/b/ocean-…=media&token=81d1c20b-47c8-4808-ab92-eaa041293a2a',
        sub_title: 'Every Rider is Sanitized',
        title: 'Sanitized Rider',
      } as Special,
      {
        title: 'Tempreture Checked',
        image:
          'https://firebasestorage.googleapis.com/v0/b/ocean-…=media&token=0c85b901-4821-4f2c-b40d-c61b7283557e',
        sub_title: 'Tempreture Checked Rider',
      } as Special,
    ];
  }

  add(special: Special) {
    if (!this.specials.includes(special)) {
      this.specials.push(special);
    }
  }

  remove(specialRef: Special) {
    this.specials = this.specials.filter((special) => special !== specialRef);
  }

  save() {
    this.update.emit(this.specials);
  }
}
