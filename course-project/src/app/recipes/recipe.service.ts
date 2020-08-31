import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

// @Injectable({ providedIn: 'root' })
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Carne',
      'Tomate',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Frieds', 20)]
    ),
    new Recipe(
      'Burger',
      'Quejo',
      'https://media.gazetadopovo.com.br/2019/11/20171835/HAMBURGUERIA-AGUA-VERDE_PE%CC%81-VERMEIO_RAFAEL_FESTIVAL-BURGER-FUNFEST_ESTU%CC%81DIO-A%CC%80-MILANESA-960x540.jpg',
      [new Ingredient('Buns', 13), new Ingredient('Mear', 12)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice(); //sending a copy
  }

  addIngredientsToSL(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
