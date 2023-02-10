import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'maybe some description, idk man i wanna find job', 'https://www.century-foods.com/wp-content/uploads/2023/01/px653047-image-kwvxn16x.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
