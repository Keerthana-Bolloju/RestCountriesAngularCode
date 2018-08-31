import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ResthttpService } from '../resthttp.service';

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css']
})
export class AllcountriesComponent implements OnInit {

  public allCountries;

  constructor(public route:ActivatedRoute,public router:Router,public http:ResthttpService) { }

  ngOnInit() {

    //method to find countries which belongs to same region
    
    this.route.params.subscribe(param =>{
      let nameOfTheRegion = this.route.snapshot.paramMap.get('regionName')

      this.http.getAllCountriesList(nameOfTheRegion).subscribe(
        data =>{
          this.allCountries = data;
          console.log(data)
        },
        error =>{
          console.log(error.errorMessage)
        }
      )
    });
      
    //method to find countries which belongs to same region by same language
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
      

    //method to find countries which belongs to same region by same currency
    
    
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
  }

}
