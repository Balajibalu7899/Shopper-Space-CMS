import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/models/category';
import { ApiServiceService } from '../api-service/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  categoryCollection?: AngularFirestoreCollection<Category>
  categories?: Observable<Category[]>;
  constructor(private api: ApiServiceService) {
    this.getCategories();
    // this.categoryCollection = this.afStore.collection<Category>('Categories');
  }

  genId() {
    return "this.afStore.createId()";
  }

  getCategories() {
    console.log('test')
    this.categories = this.api.get('categories');
  }

  async addCategory(id: string, category: Category) {
    try {
      // category.slug = category.title.split(' ').join('-');
      await this.api.put(`categories/${id}`,category);
      console.log('test');
    } catch (err) {
      console.log(err);
      throw "Somthing Went Wrong";
    }
  }

  async updateCategory(id: string, category: Category) {
    try {
      delete category.id;
      // category.slug = category.title.split(' ').join('-');
      await this.api.post(`categories/${id}`,category);
    } catch (err) {
      console.log(err);
      throw "Somthing Went Wrong";
    }
  }
}
