import { Component, OnInit } from '@angular/core';
import { Outlet } from 'src/app/models/outlet';

@Component({
  selector: 'app-outlet-form',
  templateUrl: './outlet-form.component.html',
  styles: [
  ]
})
export class OutletFormComponent implements OnInit {
  outlet = {} as Outlet;
  tag?: string;
  constructor() { }

  ngOnInit(): void {
    this.outlet.tags = []
  }

  addTag(){
    this.outlet.tags.push(this.tag!);
    this.tag = "";
  }
  
  create(){
    
  }
}
