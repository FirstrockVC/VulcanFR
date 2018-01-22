import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../shared/convert.service';
import swal from 'sweetalert2';
import * as _ from 'lodash';
import * as csv from "csvtojson";

@Component({
  selector: 'grafic-topusers',
  templateUrl: './grafic-topusers.component.html'
})
export class GraficTopUsersComponent implements OnInit {

  public file;
  public data= [];
  public topUsers = [];

  ngOnInit() {
  }

  public onFileChange(event) {
    this.file = event.target.files[0];
  }

  public onUpload() {
    this.data = [];
    this.topUsers = [];
    let reader = new FileReader();
    reader.readAsText(this.file);
    reader.onload = () => {
    let text = reader.result;
    csv().fromString(text)
      .on('json',(jsonObj)=>{
        this.data.push(jsonObj);
      })
      .on('done',(error)=>{
      })
     }
  }

}
