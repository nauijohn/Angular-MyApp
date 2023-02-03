import { EventEmitter, Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'A Test Recipe',
			'This is simply a test',
			'https://i0.wp.com/www.onceuponachef.com/images/2020/05/best-grilled-chicken-scaled.jpg?resize=1120%2C1547&ssl=1',
			[new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
		),
		new Recipe(
			'Another Test Recipe',
			'This is simply a test',
			'https://i0.wp.com/www.onceuponachef.com/images/2020/05/best-grilled-chicken-scaled.jpg?resize=1120%2C1547&ssl=1',
			[new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
		),
	];

	constructor(private slService: ShoppingListService) {}

	getRecipes() {
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}
