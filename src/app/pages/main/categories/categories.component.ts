import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryServiceService } from 'src/app/services/category-service/category-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [
  ]
})
export class CategoriesComponent implements OnInit {
  categories?: Category[];
  constructor(public router: Router, private categoryService: CategoryServiceService) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
    this.categoryService.categories?.subscribe((data) => {
      console.log(data)
      this.categories = data;
    })
  }

  edit(id: string) {
    this.router.navigateByUrl(`/category/edit?category_id=${id}`)
  }

}
