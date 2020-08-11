import {MEALS} from "../../data/dummy-data";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state: any = initialState, action: any) => {
    return state;
}

export default mealsReducer;