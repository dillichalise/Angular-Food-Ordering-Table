import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Tables } from 'src/app/Model/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tables: Tables[]= [
    { id: 1, name: 'Table 1'}
  ]

  constructor(
    public _dataService: DataService

  ) { 

  }

  ngOnInit() {
  
  }

}
