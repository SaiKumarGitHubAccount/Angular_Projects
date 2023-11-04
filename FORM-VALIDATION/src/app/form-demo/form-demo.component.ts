import { Component } from '@angular/core';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent {
  Submit(login:any){
    console.log("Form submitted",login)
  }

}
