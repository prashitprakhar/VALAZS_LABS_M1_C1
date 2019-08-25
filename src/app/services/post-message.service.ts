import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { MessagesModel } from "./../models/messages.model";
import { BehaviorSubject } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class PostMessageService {

    private _messagesList = new BehaviorSubject<MessagesModel>(null);

    constructor(private http: HttpClient) {}

    get messageList() {
        return this._messagesList.asObservable()
    }

    createMessages(message: string, videoLink: string) {
        const messages = new MessagesModel(
            message,
            videoLink,
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate(),
            new Date().getHours(),
            new Date().getMinutes(),
            new Date().getSeconds()
        );

        this._messagesList.next(messages);
    }

    createNewPost(message) {
        console.log("mesage from component in service : ",message)
        return this.http.post('https://valazs-labs-m1-c1.firebaseio.com/messages.json', message)
            .subscribe(res => {
                console.log("Response from Firebase : ",res)
            })
    }

    fetchMessages() {
        return this.http.get<{messageList: MessagesModel;}>(
            "https://valazs-labs-m1-c1.firebaseio.com/messages.json"
        )
        // .pipe(tap(resData => {
        //     console.log("resDATA IN Service TAP",resData.videoLink);

        //     //const fetchedMessagesList = new MessagesModel(resData.messageList.message, )
        // })
        //);
    }
}
