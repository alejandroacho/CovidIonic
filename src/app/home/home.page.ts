import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  stats = [{}];
  totalCases = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  newCases = 0;
  newDeaths = 0;
  newRecovered = 0;
  song;
  newTime;

  constructor(private router: Router, private storage: Storage) {}

  getStats() {
    return fetch("https://api.covid19api.com/summary").then(response=>response.json());
  }

  ionViewDidEnter(){
    this.getStats().then(newStats=>{
      this.stats = newStats["Global"];

      this.totalCases = newStats["Global"]["TotalConfirmed"];
      this.totalDeaths = newStats["Global"]["TotalDeaths"];
      this.totalRecovered = newStats["Global"]["TotalRecovered"];

      this.newCases = newStats["Global"]["NewConfirmed"];
      this.newDeaths = newStats["Global"]["NewDeaths"];
      this.newRecovered = newStats["Global"]["NewRecovered"];
    })
  }

  logOut(){
    this.song.pause();
    this.storage.set('isUserLogged', false);
    this.router.navigateByUrl("/login");
  }

  play(){
    this.song = new Audio("../../assets/sad-again.ogg")
    this.song.addEventListener("timeupdate", ()=>{
      this.newTime = (this.song.currentTime*(this.song.duration/10))/500;
    });
    this.song.play();
  }

  pause(){
    this.song.pause();
    this.song.addEventListener("timeupdate", ()=>{
      this.newTime = 0;
    });
  }
}
