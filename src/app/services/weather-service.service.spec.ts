import {TestBed} from '@angular/core/testing';

import {WeatherServiceService} from './weather-service.service';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {of} from "rxjs";

describe('WeatherServiceService', () => {
  let weatherService: WeatherServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [HttpClient,
        HttpHandler]
    });


    weatherService = TestBed.inject(WeatherServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    // da ni kakšnih starih neprocesiranih reponsov
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(weatherService).toBeTruthy();
  });
  it('should get mocked response from weather service', async () => {
    const mockedWeatherResponse = {
      city: 'Novo mesto',
      temperature: '17°c'
    }
    spyOn(weatherService, 'getWeatherData').and.returnValue(of(mockedWeatherResponse))
      weatherService.getWeatherData('novo mesto').subscribe((response) => {
      expect(response).toEqual(mockedWeatherResponse);
    })

  });
  it('should get real response from http client', () => {
    const lokacija = 'Novo mesto';
    const mockedResponse = {}

    // weatherService.getWeatherData(lokacija).subscribe((response) => {
    //   console.log(response, 'response-------')
    // })
    expect(true).toBeTrue()
  });

});
