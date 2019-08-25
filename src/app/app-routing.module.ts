import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

//import { ItemsComponent } from "./item/items.component";
//import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { NotificationsListComponent } from "./components/notifications-list/notifications-list.component";
import { PostUpdatesComponent } from "./components/post-updates/post-updates.component";
import { PostUpdatesGuardService } from "./guards/post-updates-guard.service";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginPageComponent },
    { path: "homepage", component: HomePageComponent },
    { path: "notificationsList", component: NotificationsListComponent},
    { path: "postUpdates", component: PostUpdatesComponent, canActivate: [PostUpdatesGuardService] }
    // { path: "items", component: ItemsComponent },
    // { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
