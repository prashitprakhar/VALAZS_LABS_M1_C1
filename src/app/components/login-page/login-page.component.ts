import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
    selector: "ns-login-page",
    templateUrl: "./login-page.component.html",
    styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
    loginForm: FormGroup;
    mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";

    public usernameControlIsValid: boolean = true;

    public mobileNumber: string = "";

    public mobileNumberPattern = "/[0-9+- ]/";

    public isLogin: boolean = true;

    @ViewChild("usernameEl", { static: false }) usernameEl: ElementRef<
        TextField
    >;

    constructor(private router: RouterExtensions) {}

    ngOnInit() {
        this.loginForm = new FormGroup({
            username: new FormControl(null, {
                updateOn: "change",
                validators: [
                    Validators.required,
                    Validators.pattern(this.mobnumPattern)
                ]
            })
        });

        this.loginForm.get("username").statusChanges.subscribe(status => {
            this.usernameControlIsValid = status === "VALID";
        });
    }

    onSubmit() {
        this.usernameEl.nativeElement.focus();
        this.usernameEl.nativeElement.dismissSoftInput();


        if(!this.loginForm.valid) {
            return;
        }

        const username = this.loginForm.get("username").value;

        this.loginForm.reset();
        this.usernameControlIsValid = true;
        if(this.isLogin){
            console.log("Logging in...")
        }
        else {
            console.log("Signing up...")
        }

        this.router.navigate(["/homepage"], {
            clearHistory: true,
            transition: { name: "slideLeft" }
        });
    }

    onSwitch() {
        this.isLogin = !this.isLogin;
    }
}
