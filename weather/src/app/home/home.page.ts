import { Component } from '@angular/core';
import { NewweatherService } from '../service/newweather.service';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
value;
weather;
city="Pretoria";

cityinfo;
name;


weather1

  constructor(private services:NewweatherService,private http:HttpClient) {




    this.services.getweatherData(this.city).subscribe(data=> {

this.value = data;
this.weather = this.value.list;





      console.log(data);
      
          });
      
      
  }
  getData()
  {
    this.services.getweatherData(this.city).subscribe(data=> {

      this.value=data;
      this.weather=this.value.list;
      this.cityinfo=this.value.city
      this.name=this.cityinfo.name;
      console.log(data);
      


    })
  
   
    this.services.getweatherData1(this.city).subscribe(data=> {

      this.value=data;
      this.weather=this.value.list;
      this.cityinfo=this.value.city
      this.name=this.cityinfo.name;
      console.log(data);
      


    })
  
    
    
  
  }
 


}
