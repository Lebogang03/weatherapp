import { Injectable } from '@angular/core'
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewweatherService {

  city="pretoria";
  appid="628181179cf93ebc35a72a0ba18b1e0c";
 
  constructor(private weather:HttpClient) {}

    getweatherData(city:string)
    {
     
     return this.weather.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID='+ this.appid);
    
    }

    getweatherData1(city:string)
    {
     
     return this.weather.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID='+ this.appid);
    
    }


   }

