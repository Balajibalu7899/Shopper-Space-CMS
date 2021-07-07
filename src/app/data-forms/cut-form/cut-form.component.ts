import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Action } from 'src/app/models/action';
import { Cut } from 'src/app/models/cut';
import { FireStorageService } from 'src/app/services/fire-storage/fire-storage.service';

@Component({
  selector: 'app-cut-form',
  templateUrl: './cut-form.component.html',
  styles: [],
})
export class CutFormComponent implements OnInit {
  @Input() product_id!: string;
  @Input() cuts!: Cut[];
  @Output() update = new EventEmitter<Cut[]>();
  Action = Action;
  action?: Action;
  activeCutIndex?: number;
  cut = {} as Cut;
  constructor(private uploadServ: FireStorageService) {}

  ngOnInit(): void {}

  newCut() {
    this.action = Action.CREATE;
    this.cut = {} as Cut;
    this.cuts.push(this.cut)
    this.activeCutIndex = this.cuts.length;
  }

  edit(index: number) {
    this.action = Action.EDIT;
    this.activeCutIndex = index;
    this.cut = this.cuts[index];
  }

  imageUpload(event: any){
    this.uploadServ.upload(`Public/Products/${this.product_id}/Cuts`,event.files[0]).then((data)=>{
      this.cut.image = data as string;
    })
  }

  save() {
    this.update.emit(this.cuts);
  }
}
