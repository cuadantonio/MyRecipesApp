import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://root:eODi!SbR5Xqo@cluster0.e9hmo.mongodb.net/?retryWrites=true&w=majority', { dbName: 'myrecipesapp' }),
    RecipeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
