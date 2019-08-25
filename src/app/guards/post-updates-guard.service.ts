import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { RouterExtensions } from "nativescript-angular/router";

@Injectable()
export class PostUpdatesGuardService implements CanActivate {
    constructor(private router: RouterExtensions) {}

    canActivate() {
        return true;
    }
}
