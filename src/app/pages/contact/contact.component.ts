import {Component, Input, OnInit} from '@angular/core';
import {slideInAnimation} from 'src/app/animations/animations';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {WeatherServiceService} from "../../services/weather-service.service";
import {WeatherData} from "../../models/weather-data";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [slideInAnimation],
})

export class ContactComponent {
  weatherData: WeatherData = {};
  cityName:string  ='';
  constructor(private getWeatherService: WeatherServiceService) {
  }
  getWeatherForCity(){
    this.getWeatherService.getWeatherData(this.cityName)
      .then(response => {
        this.weatherData = response;
      }).catch(error => {
      console.error(error)
    })
  }

  submitForm(contactForm: NgForm) {
    if (contactForm.valid) {
      alert('Submit was succefull!')
    } else {
      alert('Submit was not successful!')
    }
  }

}
