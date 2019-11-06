import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Student } from '../models/Student';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  student: Student = {};
  errorMessage: string;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.http.post('/api', this.student)
      .subscribe(res => {
        this.router.navigateByUrl('/');
      }, err => {
        this.errorMessage = `Failed to add student. Details: ${err}`;
      });
  }
}
