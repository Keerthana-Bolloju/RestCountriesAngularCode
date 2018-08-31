import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,Subject,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResthttpService {

  public baseUrl = 'https://restcountries.eu/rest/v2/';

  constructor(public http: HttpClient) {
    console.log("service constructor is called");
   }

  //to get all the countries of particular region    
  public getAllCountriesList(regionName) {
    let getCountries = this.http.get(this.baseUrl+ 'region'+'/'+regionName)
    console.log(getCountries);
    return getCountries;
  } 

  
  //to get all the countries of particular region by language   
  public getByLanguage(byLanguage) {
    let getCountries = this.http.get(this.baseUrl+ 'lang'+'/'+byLanguage)
    console.log(getCountries);
    return getCountries;
  } 
  
  //to get all the countries of particular region by currencies   
  public getByCurrency(byCurrency) {
    let getCountries = this.http.get(this.baseUrl+ 'currency'+'/'+byCurrency)
    console.log(getCountries);
    return getCountries;
  } 

  
  //to get all the countries of particular region by language   
  public getSingleCountryView(countryName) {
    let getCountries = this.http.get(this.baseUrl+ 'name' +'/' + countryName + '?fullText=true')
    console.log(getCountries);
    return getCountries;
  } 

}
