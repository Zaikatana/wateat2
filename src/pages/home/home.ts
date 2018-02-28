import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ICuisine } from '../../types/types';
import { CusineServiceProvider } from '../../providers/cusine-service/cusine-service';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	search: FormGroup;
	cuisine: string;
	radius: number;
	isSearch: boolean = false;
	cuisineList: ICuisine[];
	filteredList: ICuisine[];
	
	_query:string
	get query(): string {
        return this._query;
    }
    set query(value: string) {
        this._query = value;
        this.filteredList = this.query ? this.filterCuisines(this.query) : this.cuisineList;
    }
	
	constructor(public navCtrl: NavController,
				public formBuilder: FormBuilder,
				private csp: CusineServiceProvider) {
		this.search = formBuilder.group({
			cuisine: [''],
			radius: [''],
		});
	}

	ionViewDidLoad(){
		console.log("Executing command on startup");
		this.csp.getCuisines()
				.subscribe(c => {
					console.log("Cuisine List loaded");
					this.cuisineList = c;
					this.filteredList = this.cuisineList;
				},
				error => console.log(error));
		
	}
	
	searchRestaurants(){
		console.log("Searching For Restaurants");
		let cuisine = this.search.controls['cuisine'].value;
		let radius = this.search.controls['radius'].value;
		if(!radius){
			radius = 100;
		}
		console.log(radius);
		console.log(cuisine);
		this.isSearch = true;
	}
	
	filterCuisines(query:string): ICuisine[]{
		query = query.toLocaleLowerCase();
        return this.cuisineList.filter((c: ICuisine) =>
              c.title.toLocaleLowerCase().indexOf(query) !== -1);
	}
}
