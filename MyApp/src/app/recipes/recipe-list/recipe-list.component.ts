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
			'https://www.google.com/imgres?imgurl=https%3A%2F%2Flh3.googleusercontent.com%2F3MTaO0OfMwrDKcuhwDjHzKKdO-_daDhCPCqmFfSZSkQC5oXq60Ogpd6I57zjE-ZSsCrom1Wrw4i305jccSlbNXMQ1oaI7AVvMA%3Dw1667-h1667-c-rj-v1-e365&imgrefurl=https%3A%2F%2Fwww.yummly.com%2Frecipes&tbnid=y8WNo4nQ1woZvM&vet=12ahUKEwiHz9nSiO_8AhWJBaYKHXpNDzsQMyghegUIARDUAg..i&docid=vTLa09D8U97lwM&w=1667&h=1667&q=recipe&ved=2ahUKEwiHz9nSiO_8AhWJBaYKHXpNDzsQMyghegUIARDUAg'
		),
	];

	constructor() {}

	ngOnInit(): void {}
}
