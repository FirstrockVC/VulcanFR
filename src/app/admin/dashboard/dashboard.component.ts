import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import { } from 'morris.js';
import { } from 'jquery-knob';
import { } from 'bootstrap-datepicker';
import { } from 'jqueryui';
import { } from 'jquery.slimscroll';
import * as moment from 'moment';
import { ConvertService } from '../shared/convert.service';
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

  constructor( public convertService: ConvertService) { }
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

    this.areaChart = Morris.Area({
      element: 'revenue-chart',
      resize: true,
      data: [
        { y: '2011 Q1', item1: 2666, item2: 2666 },
        { y: '2011 Q2', item1: 2778, item2: 2294 },
        { y: '2011 Q3', item1: 4912, item2: 1969 },
        { y: '2011 Q4', item1: 3767, item2: 3597 },
        { y: '2012 Q1', item1: 6810, item2: 1914 },
        { y: '2012 Q2', item1: 5670, item2: 4293 },
        { y: '2012 Q3', item1: 4820, item2: 3795 },
        { y: '2012 Q4', item1: 15073, item2: 5967 },
        { y: '2013 Q1', item1: 10687, item2: 4460 },
        { y: '2013 Q2', item1: 8432, item2: 5713 }
      ],
      xkey: 'y',
      ykeys: ['item1', 'item2'],
      labels: ['Item 1', 'Item 2'],
      lineColors: ['#a0d0e0', '#3c8dbc'],
      hideHover: 'auto'
    });
  }

  public onFileChange(event) {
    this.file = event.target.files[0];
  }

  public onUpload() {
    const cohorts= [];
    let reader = new FileReader();
    reader.readAsText(this.file);
    reader.onload = () => {
    let text = reader.result;
    this.convertService.uploadData(text).subscribe((result) => {
        swal({
        title: 'Success',
        text: 'The data was imported correctly',
        type: 'success'
        });
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
