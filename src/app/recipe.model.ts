import { interval } from "rxjs";

export interface Recipe {
    id: string;
    recipeName: string;
    timeToCook: string;
    imageUrl: string;
    ingredients: string[];

}