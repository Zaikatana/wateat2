import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	search: FormGroup;
	cuisine: string;
	radius: number;
	isSearch: boolean = false;
	
	constructor(public navCtrl: NavController,
				public formBuilder: FormBuilder) {
		this.search = formBuilder.group({
			cuisine: [''],
			radius: [''],
		});
	}

	ionViewDidLoad(){
		console.log("Executing command on startup");
	}
	
	searchRestaurants(){
		console.log("Searching For Restaurants");
		let radius = this.search.controls['radius'].value;
		if(!radius){
			radius = 100;
		}
		console.log(radius);
		this.isSearch = true;
	}
	
}
