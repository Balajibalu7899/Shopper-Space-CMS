import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';
import { CategoryServiceService } from 'src/app/services/category-service/category-service.service';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styles: [],
})
export class CategorySelectorComponent implements OnInit {
  allCategories!: Category[];
  @Input() categories!: Category[];
  @Output() update = new EventEmitter<Category[]>();
  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    this.api.get('categories').subscribe((categories)=>{
      this.allCategories = categories;
      console.log(this.allCategories)
    })
  }

  add(category: Category) {
    if (!this.categories.includes(category)) {
      this.categories.push(category);
    }
  }

  remove(category: Category) {
    this.categories = this.categories.filter((category) => category !== category);
  }

  save() {
    this.update.emit(this.categories)
  }
}
