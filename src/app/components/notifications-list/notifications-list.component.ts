import { Component, OnInit, OnDestroy } from "@angular/core";
// import { PageRoute } from "nativescript-angular/router";
// import { ActivatedRoute, Router } from "@angular/router";
import { PostMessageService } from "~/app/services/post-message.service";
import { Subscription } from "rxjs";
import { MessagesModel } from "~/app/models/messages.model";

//import { android } from 'tns-core-modules/application';

declare var android: any;

@Component({
    selector: "ns-notifications-list",
    templateUrl: "./notifications-list.component.html",
    styleUrls: ["./notifications-list.component.scss"],
    moduleId: module.id
})
export class NotificationsListComponent implements OnInit, OnDestroy {

    public isLoading: boolean = false;
    public messageSub: Subscription;
    public currentMessage: MessagesModel

    constructor(private postMessageService: PostMessageService) {}

    ngOnInit() {
        // this.messageSub = this.postMessageService.messageList.subscribe(message => {
        //     //this.currentMessage = message;
        // })

        this.isLoading = true;
        this.postMessageService.fetchMessages().subscribe(
            res => {
                console.log("Fetched Messages",res);
                this.currentMessage = null;
                this.isLoading = false;
            },
            err => {
                this.isLoading = false;
            }
        );

        // const currentYear = new Date().getFullYear();
        // const currentMonth = new Date().getMonth();
        // const daysInMonth = new Date(
        //     currentYear,
        //     currentMonth + 1,
        //     0
        // ).getDate();
        /*
         ** new Date(year, month, 0/1)
         ** 0 means -> last date of the previous month
         ** 1 means -> first date of the given month
         ** in this case if currentMonth is January, then currentMonth + 1 => February
         ** and then 0 means last date of the previous month i.e., last date of January => 31
         ** this makes sure we programatically know the no. of days in the current month
         */
    }

    ngOnDestroy(){
        if(this.messageSub){
            this.messageSub.unsubscribe();
        }
    }
}
