import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

/*
  Generated class for the YelpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YelpServiceProvider {
  constructor(public http: HttpClient) {
    console.log("Hello YelpServiceProvider Provider");
  }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:
        "Bearer C6Vqi6ovDVX17EFT6UNO8r4mwKvR8OOhjMZ3ddKUI2XhEed4srdCW9kCNIuli1FB7hUn_VhBfz_ZFbxWzeMby5sRSo9O2rmb4yk_aRReHRMVX6ArIPUGayHStyINWnYx"
    })
  };

  private yelpBaseURL =
    "https://api.yelp.com/v3/businesses/search?latitude=LAT&longitude=LON&term=restaurants&radius=RAD&category=CUS";

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getResults(
    latitude: number,
    longitude: number,
    radius: number,
    category: string
  ) {
    let reqURL = this.yelpBaseURL;
    reqURL.replace("LAT", latitude.toString());
    reqURL.replace("LON", longitude.toString());
    reqURL.replace("RAD", radius.toString());
    reqURL.replace("CUS", category);
    return this.http
      .get(reqURL, this.httpOptions)
      .do(result => {
        console.log(JSON.stringify(result));
      })
      .catch(this.handleError);
  }
}
