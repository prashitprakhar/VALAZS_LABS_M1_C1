import { Component, OnInit } from "@angular/core";
import { PostMessageService } from "~/app/services/post-message.service";
import { RouterExtensions } from "nativescript-angular/router";
import { Subscription } from "rxjs";
import { MessagesModel } from "~/app/models/messages.model";

@Component({
    selector: "ns-post-updates",
    templateUrl: "./post-updates.component.html",
    styleUrls: ["./post-updates.component.scss"],
    moduleId: module.id
})
export class PostUpdatesComponent implements OnInit {
    public currentYear: number;
    public currentMonth: number;
    public daysInMonth: number;
    public currentDate: number;
    public currentHour: number;
    public currentMinute: number;
    public currentSeconds: number;
    // public messageSub: Subscription;
    public currentMessage: MessagesModel

    constructor(
        private postMessageService: PostMessageService,
        private router: RouterExtensions
    ) {}

    ngOnInit() {
        // this.messageSub = this.postMessageService.messageList.subscribe(message => {
        //     this.currentMessage = message;
        // })
    }



    onPostClick(message, videoLink) {
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getMonth();
        this.daysInMonth = new Date(
            this.currentYear,
            this.currentMonth + 1,
            0
        ).getDate();
        this.currentDate = new Date().getDate();
        this.currentHour = new Date().getHours();
        this.currentMinute = new Date().getMinutes();
        this.currentSeconds = new Date().getSeconds();

        console.log("Posted message : ", message);
        console.log(
            "Current Year, Month, Date",
            this.currentYear,
            this.currentMonth,
            this.daysInMonth,
            this.currentDate,
            this.currentHour,
            this.currentMinute,
            this.currentSeconds
        );
        this.currentMessage = {
            message : message,
            videoLink : videoLink,
            year: this.currentYear,
            month: this.currentMonth,
            date: this.currentDate,
            hour: this.currentHour,
            minutes: this.currentMinute,
            seconds: this.currentSeconds
        }
        this.postMessageService.createNewPost(this.currentMessage);
        this.router.backToPreviousPage();
    }
}
