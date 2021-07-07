import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'src/app/models/action';
import { Category } from 'src/app/models/category';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';
import { CategoryServiceService } from 'src/app/services/category-service/category-service.service';
import { FireStorageService } from 'src/app/services/fire-storage/fire-storage.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styles: [
  ]
})
export class CategoryFormComponent implements OnInit {
  Action = Action;
  action!: Action;
  category = {} as Category;
  categoryId?: string;
  edit?: boolean;
  constructor(public router: Router, public activeRoute: ActivatedRoute, private categoryService: CategoryServiceService, private uploadServ: FireStorageService,private api: ApiServiceService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(param => {
      if (param.action == "edit") {
        this.action = Action.EDIT;
        this.activeRoute.queryParams.subscribe(query => {
          this.categoryId = query.category_id;
          this.api.get(`categories/${this.categoryId}`).subscribe((category) => {
            this.category = category!;
          })
        });
      } else {
        this.action = Action.CREATE;
        this.categoryId = this.api.generateId(32);
        this.category.id = this.categoryId;
      }
    })
  }

  imageUpload(event: any) {
    console.log(event.files);
    const file = event.files[0];
    this.uploadServ.publicUpload(`New/Categories/${this.categoryId}/Images/${file.name}`, file).then((url) => {
      this.category.image = `https://storage.googleapis.com/shopper-space-public/New/Categories/${this.categoryId}/Images/${file.name}`;
    })
  }

  bannderUpload(event: any) {
    const file = event.files[0];
    this.uploadServ.publicUpload(`New/Categories/${this.categoryId}/Banners/${file.name}`, file).then((url) => {
      this.category.banner_image = `https://storage.googleapis.com/shopper-space-public/New/Categories/${this.categoryId}/Banners/${file.name}`;
    })
  }

  async create() {
    try {
      console.log(this.category);
      await this.api.put(`categories/${this.categoryId}`,this.category).subscribe((data)=>{
        // console.log(data);
        this.router.navigateByUrl('categories');
      })
      // await this.categoryService.addCategory(this.categoryId!, this.category);
    } catch (err) {
      console.log(err);
    }
  }

  async update() {
    try {
      await this.api.post(`categories/${this.categoryId}`,this.category).subscribe((data)=>{
        console.log(data);
        this.router.navigateByUrl('categories');
      })
    } catch (err) {
      console.log(err);
    }
  }
}
