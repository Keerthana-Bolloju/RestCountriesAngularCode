import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';
import { AllcountriesComponent } from './allcountries/allcountries.component';
import { SinglecountryviewComponent } from './singlecountryview/singlecountryview.component';
import { HttpClientModule } from '@angular/common/http';
import { ResthttpService } from './resthttp.service';

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    AllcountriesComponent,
    SinglecountryviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'region',component:RegionComponent},
      {path:'region-name/:regionName',component:AllcountriesComponent},
      {path:'allcountries/language/:byLanguage',component:AllcountriesComponent},
      {path:'allcountries/currency/:byCurrency',component:AllcountriesComponent},
      {path:'single-country-view/:countryName',component:SinglecountryviewComponent},
      {path:'',redirectTo:'region',pathMatch:'full'},
      {path:'**',component:RegionComponent}
    ])
  ],
  providers: [ResthttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
