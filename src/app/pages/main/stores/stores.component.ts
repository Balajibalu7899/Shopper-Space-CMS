import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Store } from 'src/app/models/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styles: [
  ]
})
export class StoresComponent implements OnInit {
  stores?: Store[];
  constructor(public router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://15514a1a00fd.ngrok.io/api/store").subscribe((data)=>{
      this.stores = data as Store[];
      console.dir(data)
    })
  }

  storeDetails(id: string){
    this.router.navigateByUrl(`stores/${id}`);
  }

}
