import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOpt= {
    initialSlide:0,
    slidesPerView:1,
    centeredSlides:true,
    speed:400
  }
  slides = [{
    img: "assets/img/virus.png",
    tittle: "Covid",
    description: "Visualiza cuantos casos de covid hay en tu región con datos actualizados mientras escuchas linkin park de fondo."
  },
  {
    img: "assets/img/audio.png",
    tittle: "Música",
    description: "La música pretende ser una referencia cultural al mundo del internet. No pretende ser en ningun caso una burla u ofensa a los caídos."
  }]
  constructor(private router: Router, private storage: Storage) { }
  finish(){
    this.storage.set('introShowed', true);
    this.router.navigateByUrl("/home");
  }
  ngOnInit() {
  }

}
