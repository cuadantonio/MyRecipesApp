import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateRecipeDto } from './dto/createRecipe.dto';
import { UpdateRecipeDto } from './dto/updateRecipe.dto';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
    constructor(private readonly recipeService: RecipeService) { }

    @Post()
    async createRecipe(@Res() response, @Body() createRecipeDto: CreateRecipeDto) {
        try {
            const newRecipe = await this.recipeService.createRecipe(createRecipeDto);

            return response.status(HttpStatus.CREATED).json({ message: 'Recipe created', newRecipe })
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({ statusCode: 400, message: 'Recipe not created', error: 'Bad request' });
        }
    }

    @Put('/:id')
    async updateRecipe(@Res() response, @Param('id') recipeId: string, @Body() updateRecipeDto: UpdateRecipeDto) {
        try {
            const existingRecipe = await this.recipeService.updateRecipe(recipeId, updateRecipeDto);
            return response.status(HttpStatus.OK).json({ message: 'Recipe updated', existingRecipe });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    async getRecipes(@Res() response) {
        try {
            const recipeData = await this.recipeService.getAllRecipes();
            return response.status(HttpStatus.OK).json({ message: 'Recipes found', recipeData });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async getRecipe(@Res() response, @Param('id') recipeId: string) {
        try {
            const existingRecipe = await this.recipeService.getRecipe(recipeId);
            return response.status(HttpStatus.OK).json({ message: 'Recipe found', existingRecipe });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    /*@Get('/:recipeTitle')
    async getRecipeByTitle(@Param('recipeTitle') recipeTitle: string) {
        return await this.recipeService.getRecipeByTitle(recipeTitle);
    }*/

    @Delete('/:id')
    async deleteRecipe(@Res() response, @Param('id') recipeId: string) {
        try {
            const deletedRecipe = await this.recipeService.deleteRecipe(recipeId);
            return response.status(HttpStatus.OK).json({ message: 'Recipe deleted', deletedRecipe });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}

