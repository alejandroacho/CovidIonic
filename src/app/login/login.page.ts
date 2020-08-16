import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from "../services/authenticate.service";
import { NavController } from "@ionic/angular";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errorMessage:string="";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private storage: Storage,
    private navCtrl: NavController) { 
      this.loginForm = this.formBuilder.group({
        email: new FormControl("", Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
          
        ])),
        password: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(5),
        ]))
      });
  }

  ngOnInit() {
  }

  loginUser(credentials){
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = "";
      this.storage.set("isUserLogged", true);
      this.navCtrl.navigateForward("/home");
    }).catch(err=>{
      this.errorMessage = err;
    })
  }
}
