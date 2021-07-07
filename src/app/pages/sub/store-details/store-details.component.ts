import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Store } from 'src/app/models/store';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styles: [],
})
export class StoreDetailsComponent implements OnInit {
  store?: Store;
  products?: Product[];
  constructor(public router: Router,public actRoute: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe((param) => {
      console.log(param);
      this.http
        .get(`https://15514a1a00fd.ngrok.io/api/store/${param.id}`)
        .subscribe((data) => {
          this.store = data as Store;
          // console.dir(data);
          this.http.get(`https://15514a1a00fd.ngrok.io/api/store/products/${param.id}`).subscribe((products)=>{
            this.products = products as Product[];
            console.dir(this.products);
          })
        });
    });
  }

  edit(id: string){

  }

  eidtStore(id: string|undefined){
    console.log(id)
    this.router.navigateByUrl(`store/edit?id=${id}`);
  }
}
