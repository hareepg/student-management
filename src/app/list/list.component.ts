import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/Student';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: Student[];
  constructor(private http: HttpClient) {
    http.get('/api')
      .subscribe(res => {
        this.list = res as Student[];
        console.table(this.list);
      }, 
      
      
      err => {})
  }

  ngOnInit() {
  }

}
