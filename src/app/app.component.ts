import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuActive:boolean = false
  
  ngOnInit(): void {
    //alert('Page in progress')
  }

  menu() {
    this.menuActive = !this.menuActive
    console.log(this.menuActive);
    
    
  }
  
}
