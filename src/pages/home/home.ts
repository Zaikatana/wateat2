import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ICuisine } from '../../types/types';
import { CusineServiceProvider } from '../../providers/cusine-service/cusine-service';
import { YelpServiceProvider } from '../../providers/yelp-service/yelp-service';

import { Geolocation } from '@ionic-native/geolocation';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	searchForm: FormGroup;
	cuisine: string;
	cuisines: any[];
	displayCuisines: boolean = false;
	radius: number;
	results: any;
	latitude: number;
	longitude: number;
	isSearch: boolean = false;
	
	
	constructor(public navCtrl: NavController,
				public formBuilder: FormBuilder,
				private csp: CusineServiceProvider,
				private ysp: YelpServiceProvider,
				private geolocation: Geolocation) {
		this.searchForm = formBuilder.group({
			cuisine: [''],
			radius: [''],
		});
		this.geolocation.getCurrentPosition().then((resp) => {
			this.latitude = resp.coords.latitude;
			this.longitude = resp.coords.longitude;
			console.log(this.latitude);
			console.log(this.longitude);
		});
	}

	ionViewDidLoad(){
		
	}
	
	searchRestaurants(){
		console.log("Searching For Restaurants");
		let cuisine = this.searchForm.controls['cuisine'].value;
		let radius = this.searchForm.controls['radius'].value;
		if(!radius){
			radius = 100;
		}
		console.log(radius);
		console.log(cuisine);
		this.isSearch = true;
		this.ysp.getResults().subscribe( data => {console.log(data)} );
	}
	
	lookupCuisine(event: any){
		this.cuisines = null;
		let keyword = this.searchForm.value.cuisine;
		if(keyword.length !== 0){
			this.displayCuisines = true;
			this.csp.getResults(keyword).subscribe( data => { this.cuisines = data; });
		}
		else{
			this.displayCuisines = false;
		}
	}
	
	setCuisine(cuisine: any){
		this.searchForm.controls.cuisine.setValue(cuisine);
		this.displayCuisines = false;
	}

}
