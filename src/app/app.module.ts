import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { NotificationsListComponent } from "./components/notifications-list/notifications-list.component";
import { ActionBarComponent } from "./shared/ui/action-bar/action-bar.component";
import { ActionBarService } from "./shared/services/action-bar.service";
import { FirebaseHttpService } from "./services/firebase-http.service";
import { PostUpdatesComponent } from "./components/post-updates/post-updates.component";
import { PostUpdatesGuardService } from "./guards/post-updates-guard.service";
import { PostMessageService } from "./services/post-message.service";
import { AuthService } from './services/auth-service.service';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        ReactiveFormsModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        LoginPageComponent,
        HomePageComponent,
        NotificationsListComponent,
        ActionBarComponent,
        PostUpdatesComponent
    ],
    providers: [
        ActionBarService,
        FirebaseHttpService,
        PostUpdatesGuardService,
        PostMessageService,
        AuthService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
