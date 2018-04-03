import { Component, OnInit,OnChanges, ViewChild } from '@angular/core';
import { } from 'jquery';
import { } from 'morris.js';
import { } from 'jquery-knob';
import { } from 'bootstrap-datepicker';
import { } from 'jqueryui';
import { } from 'jquery.slimscroll';
import * as moment from 'moment';
import { ConvertService } from '../shared/convert.service';
import { GraficMAUComponent } from '../grafic-mau/grafic-mau.component';
import { GraficRetentionComponent } from '../grafic-retention/grafic-retention.component';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import swal from 'sweetalert2';

declare var AdminLTE: any;

@Component({
  selector: 'app-admin-dashboard1',
  templateUrl: './dashboard.component.html',
  providers: [ConvertService]
})
export class DashboardComponent implements OnInit {
  areaChart: morris.GridChart;
  knob: JQuery;
  public file;
  public data;
  public loadGraphic = false;
  public period = "month";

  constructor( public convertService: ConvertService, private spinnerService: Ng4LoadingSpinnerService) { }
  ngOnInit() {
    AdminLTE.init();
    jQuery('.connectedSortable').sortable({
      placeholder: 'sort-highlight',
      connectWith: '.connectedSortable',
      handle: '.box-header, .nav-tabs',
      forcePlaceholderSize: true,
      zIndex: 999999
    });
    jQuery('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');

    this.knob = jQuery('.knob').knob();
  }

  public onFileChange(event) {
    this.file = event.target.files[0];
  }

  public onUpload() {
    this.loadGraphic = false;
    const cohorts= [];
    let reader = new FileReader();
    reader.readAsText(this.file);
    reader.onload = () => {
    let text = reader.result;
    this.spinnerService.show();
    this.convertService.uploadData(text, this.period).subscribe((result) => {
      this.loadGraphic = true;
        swal({
        title: 'Success',
        text: 'The data was imported correctly',
        type: 'success'
        });
        this.spinnerService.hide();
     }, (error) => {
       swal({
         title: 'Error',
         text: 'An error occurs when importing the data',
         type: 'error'
         });
     });
   }
  }

}
