import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {getGeolocation} from "../utils/getWatherCoordiantes";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {exe} from "../utils/toPromise";

@Injectable({
  providedIn: 'root'
})


export class WeatherServiceService {

  private weather_api_key: string = environment.WEATHER_API_KEY;
  private api_url: string = 'https://open-weather13.p.rapidapi.com'


  constructor(private http: HttpClient) {
  }
  // getCoordinatesForCity(cityName: string):Promise<{latitude: number, longitude: number}>{
  //   const params = new HttpParams()
  //     .set('q', cityName)
  //     .set('appid', this.api_url
  //     )
  //   return this.http.get<any>(this.api_url, {params})
  //     .toPromise()
  //     .then(response => {
  //       const latitude = response.coord.lat;
  //       const longitude = response.coord.lon;
  //       return { latitude, longitude };
  //     })
  // }
  getWeatherData(cityName : string): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'X-RapidAPI-Key': this.weather_api_key,
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    })

    try {

      const url = `${this.api_url}/city/${encodeURIComponent(cityName)}`;
      console.log('Requesting URL:', url); // Log the URL here
      return this.http.get<any>(url, {headers})
    } catch (error) {
      throw error
    }
  }


}
