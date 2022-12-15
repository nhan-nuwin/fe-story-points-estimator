import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  public ngOnInit(): void {
    this.http
      .get('http://localhost:3000/')
      .subscribe((data) => console.log(data));
  }
}
