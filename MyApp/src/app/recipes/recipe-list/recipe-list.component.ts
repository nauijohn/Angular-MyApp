import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe(
			'A Test Recipe',
			'This is simply a test',
			'https://i0.wp.com/www.onceuponachef.com/images/2020/05/best-grilled-chicken-scaled.jpg?resize=1120%2C1547&ssl=1'
		),
		new Recipe(
			'A Test Recipe',
			'This is simply a test',
			'https://i0.wp.com/www.onceuponachef.com/images/2020/05/best-grilled-chicken-scaled.jpg?resize=1120%2C1547&ssl=1'
		),
	];

	constructor() {}

	ngOnInit(): void {}
}
