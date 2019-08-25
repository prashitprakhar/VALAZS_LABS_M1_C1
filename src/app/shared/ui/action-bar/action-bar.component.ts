import { Component, OnInit, Input } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { ActionBarService } from "../../services/action-bar.service";

declare var android: any;

@Component({
    selector: "ns-action-bar",
    templateUrl: "./action-bar.component.html",
    styleUrls: ["./action-bar.component.scss"],
    moduleId: module.id
})
export class ActionBarComponent implements OnInit {
    @Input()
    title: string;

    @Input()
    showBackButton: boolean = true;

    @Input()
    showToggleBar: boolean = true;

    constructor(private page: Page, private router: RouterExtensions,
            private actionBarService : ActionBarService, private pageRouter: PageRoute) {}

    get android() {
        return isAndroid;
    }

    get canGoBack() {
        return this.router.canGoBack() && this.showBackButton;
    }

    onGoBack() {
        this.router.backToPreviousPage();
    }

    ngOnInit() {
    }

    onLoadedActionBar() {
        if (isAndroid) {
            const androidToolbar = this.page.actionBar.nativeView;
            const backButton = androidToolbar.getNavigationIcon();
            if (backButton) {
                backButton.setColorFilter(
                    android.graphics.Color.parseColor("#FFFFFF"),
                    (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
                );
            }
        }
        // 171717
    }

    onToggleMenu() {
        this.actionBarService.toggleDrawer();
    }
}
