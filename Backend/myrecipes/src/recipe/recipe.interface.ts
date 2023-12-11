import { Document } from "mongoose";
import { Ingredient } from "src/models/ingredient.interface";

export interface IRecipe extends Document {
    readonly title: string;
    readonly photo: string;
    readonly ingredients: Ingredient[];
    readonly steps: string[];
}