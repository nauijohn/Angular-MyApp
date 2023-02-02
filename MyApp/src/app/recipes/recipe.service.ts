import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'A Test Recipe',
			'This is simply a test',
			'https://i0.wp.com/www.onceuponachef.com/images/2020/05/best-grilled-chicken-scaled.jpg?resize=1120%2C1547&ssl=1'
		),
		new Recipe(
			'Another Test Recipe',
			'This is simply a test',
			'https://i0.wp.com/www.onceuponachef.com/images/2020/05/best-grilled-chicken-scaled.jpg?resize=1120%2C1547&ssl=1'
		),
	];

	getRecipes() {
		return this.recipes.slice();
	}
}
