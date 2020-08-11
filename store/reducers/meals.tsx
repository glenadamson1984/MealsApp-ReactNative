import {MEALS} from "../../data/dummy-data";
import {SET_FILTERS, TOGGLE_FAVOURITE} from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            const existingIndex = state.favouriteMeals.findIndex((meal: any) => {
                return meal.id === action.mealId;
            });
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favouriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return {...state, favouriteMeals: updatedFavMeals}
            } else {
                const meal = state.meals.find((meal: any) => {
                    return meal.id === action.mealId;
                })

                return {...state, favouriteMeals: state.favouriteMeals.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updatedfilteredMeals = state.meals.filter((meal: any) => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (appliedFilters.vegetarianFree && !meal.isVegetarian) {
                    return false;
                }
                if (appliedFilters.veganFree && !meal.isVegan) {
                    return false;
                }

                return true;
            })

            return {...state, filteredMeals: updatedfilteredMeals}
        default:
            return state;
    }
    return state;
}

export default mealsReducer;