import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Ingredient } from "src/models/ingredient.interface";

@Schema()
export class Recipe {
    @Prop()
    title: string;

    @Prop()
    photo: string;

    @Prop()
    ingredients: Ingredient[];

    @Prop()
    steps: string[]
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);