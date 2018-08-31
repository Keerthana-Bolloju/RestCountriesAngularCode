import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ResthttpService } from '../resthttp.service';

@Component({
  selector: 'app-singlecountryview',
  templateUrl: './singlecountryview.component.html',
  styleUrls: ['./singlecountryview.component.css']
})
export class SinglecountryviewComponent implements OnInit {

public allCountries;
public currentCountry;

  constructor(public route:ActivatedRoute,public router:Router,public http:ResthttpService) {
    console.log("single country view constructor called")
   }

  ngOnInit() {

      //for single view country details
      
    this.route.params.subscribe(param =>{
      let country_Name = this.route.snapshot.paramMap.get('countryName')
      console.log(country_Name)

      this.http.getSingleCountryView(country_Name).subscribe(
        data =>{          
        console.log(data);
        this.currentCountry = data;
        },
        error =>{
          console.log(error.errorMessage)
        }
      )
    });

    
    this.route.params.subscribe(param =>{
      let nameOfTheCurrency = this.route.snapshot.paramMap.get('byCurrency')

      this.http.getByCurrency(nameOfTheCurrency).subscribe(
        data =>{
          this.allCountries = data;
          console.log(data)
        },
        error =>{
          console.log(error.errorMessage)
        }
      )
    });

    
    this.route.params.subscribe(param =>{
      let nameOfTheLang = this.route.snapshot.paramMap.get('byLanguage')

      this.http.getByLanguage(nameOfTheLang).subscribe(
        data =>{
          this.allCountries = data;
          console.log(data)
        },
        error =>{
          console.log(error.errorMessage)
        }
      )
    });
      
  }

}
