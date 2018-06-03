import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ICuisine } from '../../types/types';

/*
  Generated class for the CusineServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CusineServiceProvider {
	private cuisineJSON = './assets/api/cuisines/cuisines.json';
	
	constructor(public http: HttpClient) {
		
	}
	
	private handleError(err: HttpErrorResponse){
		console.log(err.message);
		return Observable.throw(err.message);
	}
	
	getResults(keyword:string){
		return this.http.get<ICuisine[]>(this.cuisineJSON)
				.map( result=>{
					return (result as any).filter(item => item.title.toLowerCase().startsWith(keyword.toLowerCase()));
				})
				.catch(this.handleError);
	}
}
