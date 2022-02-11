import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'side-box',
  templateUrl: './side-box.component.html',
  styleUrls: ['./side-box.component.css']
})
export class SideBoxComponent implements OnInit {

  public city: string;
  public woeid: number;

  public temp: string;
  public weather: string;
  public day: string;

  public future: string[];
  public week: any[];

  constructor() { }

  ngOnInit(): void {

  }

  getWeather() {
    
    fetch('https://www.metaweather.com/api/location/search/?query='+ this.city.toLowerCase()) 
    .then(data => data.json())
    .then(data => {
      return this.woeid = data[0].woeid;
    })
    .then(data => {
      fetch('https://www.metaweather.com/api/location/' + data + '/')
      .then(data => data.json())
      .then(data => {
        console.log(data)
        this.temp = data.consolidated_weather[0].the_temp.toFixed() + ' ºC';
        this.weather = data.consolidated_weather[0].weather_state_name;
        this.day = data.consolidated_weather[0].applicable_date;

        this.future = this.day.split('-');
        console.log(this.future);

        return this.future
      })
      .then(data => {

        for (let i = 1; i <= 4; i++){
          fetch('https://www.metaweather.com/api/location/'+ this.woeid + '/' + data[0] + '/' + data[1] + '/' + (+data[2] + i) + '/') 
          .then(data => data.json())
          .then(data => {
            console.log(data);
            this.week.push(data[0]);
            console.log(this.week);
          })
        } 

      })
    })

    

    $('.info').css("display", 'block');
    $('.app').css('display', 'none');

  }


}

