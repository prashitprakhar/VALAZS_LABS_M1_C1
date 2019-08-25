import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  moduleId: module.id
})
export class HomePageComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() {
  }

//   seeNotifications() {
//     console.log("Go to notifications page")
//     //this.router.navigate(['/notificationsList'], {transition : {name : 'slideLeft'}})
//   }

  navigateToNotificationPage() {
    this.router.navigate(['/notificationsList'], {transition:{name: "slideLeft"}})
    //, {clearHistory : true}
  }

  postUpdates() {
      console.log("Called Post Updates route")
      this.router.navigate(['/postUpdates'], {transition: { name : "slideLeft" }})
  }

}
