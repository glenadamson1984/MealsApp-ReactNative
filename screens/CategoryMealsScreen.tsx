import React from "react";
import {View, StyleSheet, Text, Button, FlatList} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import Colors from "../constants/Colors";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props: any) => {
    const catId = props.navigation.getParam("categoryId");

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) > -1)

    return (
        <MealList listData={displayedMeals}navigation={props.navigation}  />
    );
}

CategoryMealsScreen.navigationOptions = (navigationData: any) => {
    const catId = navigationData.navigation.getParam("categoryId");

    const selectCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectCategory ? selectCategory.title : null,
    }
}

export default CategoryMealsScreen;