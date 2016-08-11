1) Open a command prompt in the project's root directory (APM - Start)

2) Type: `npm install`
    This installs the dependencies as defined in the package.json file.
    
3) Type: `npm start`
    This launches the TypeScript compiler (tsc) to compile the application and wait for changes. 
    It also starts the lite-server and launches the browser to run the application.



# These are the local storage keys that are used in the storage service
mealDayMealsKey: string = 'mealDayMeals';
>>example key -> mealDayMeals:{idOfMealDay}
>>Gets all the meals for a Meal Day
mealDaysKey: string = 'mealDays';
>>example key -> mealDays
>>this key has no other parameters as Meal Days is the top level object
foodsKey: string = 'foods';
>>example key -> foods:{mealId}:{mealDayId}
>>this gets the foods that have been saved to a meal
savedFoodsKey: string = 'savedFoods';
>>example key -> savedFoods
>>this gets the foods that have been saved for reuse in other meals


#How to get the total macros for a meal day on the meal-days-list
1) Foreach MealDay get a collection of Meals pertaining to the day
2) Foreach Meal get the collection of Foods pertaining to the meal 
3) Foreach Food add together the macros