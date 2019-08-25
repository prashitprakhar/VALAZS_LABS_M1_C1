import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { ActionBarService } from "./shared/services/action-bar.service";
import { Subscription } from "rxjs";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(RadSideDrawerComponent, {static : false}) drawerComponent: RadSideDrawerComponent

    private drawerSubscription : Subscription;
    private drawer: RadSideDrawer;

    constructor(private actionBarService: ActionBarService, private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit() {
        this.drawerSubscription = this.actionBarService.drawerState.subscribe((data) => {
            if(this.drawer) {
                this.drawer.toggleDrawerState();
            }
        });
        console.log("***")
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectorRef.detectChanges()
    }

    ngOnDestroy() {
        if(this.drawerSubscription){
            this.drawerSubscription.unsubscribe();
        }
    }
 }
