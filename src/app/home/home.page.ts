import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  stats = [{}];
  totalCases = 0;
  totalDeaths = 0;
  TotalRecovered = 0;
  newCases = 0;
  newDeaths = 0;
  newRecovered = 0;
  constructor() {}
  getStats() {
    return fetch("https://api.covid19api.com/summary").then(response=>response.json());
  }
  ionViewDidEnter(){
    this.getStats().then(newStats=>{
      this.stats = newStats["Global"];

      this.totalCases = newStats["Global"]["TotalConfirmed"];
      this.totalDeaths = newStats["Global"]["TotalDeaths"];
      this.TotalRecovered = newStats["Global"]["TotalRecovered"];

      this.newCases = newStats["Global"]["NewConfirmed"];
      this.newDeaths = newStats["Global"]["NewDeaths"];
      this.newRecovered = newStats["Global"]["NewRecovered"];
    })
  }
}
