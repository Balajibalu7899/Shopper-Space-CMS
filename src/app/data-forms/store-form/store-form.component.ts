import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/models/store';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styles: [],
})
export class StoreFormComponent implements OnInit {
  action?: string;
  storeId?: string;
  store = {} as Store;
  constructor(public router: Router, public actRouter: ActivatedRoute,) {}

  ngOnInit(): void {
    this.actRouter.params.subscribe((params) => {
      console.log(params);
      if (params.action == 'edit') {
        this.action = 'edit';
        this.storeId = params.action.id;
        this.store.open = true;
        this.store.returns = false;
      } else if (params.action == 'new') {
        this.action = 'new';
      }
    });
  }

  create() {
    console.log(this.store)
  }

  update() {
    console.log(this.store)
  }
}
