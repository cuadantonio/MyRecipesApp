import { IsNotEmpty, IsArray, IsString, MaxLength } from "class-validator";

export class CreateRecipeDto {
    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    readonly photo: string;

    @IsArray()
    @IsNotEmpty()
    readonly ingredients: string[];

    @IsArray()
    @IsNotEmpty()
    readonly steps: string;
}