import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient){

  }

  data:any;
  getData(){
    this.http.get('http://localhost:8080/api/posts?pageNo=0&pageSize=15& sortBy=title')
    .subscribe((data)=>{
      this.data=data;
    })
  }
 
}
