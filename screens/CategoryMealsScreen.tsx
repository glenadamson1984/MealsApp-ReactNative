import React from "react";
import {View, StyleSheet, Text, Button, FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import Colors from "../constants/Colors";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategoryMealsScreen = (props: any) => {
    const catId = props.navigation.getParam("categoryId");

    const availableMeals = useSelector((state: any) => {
        return state.meals.filteredMeals
    });

    const displayedMeals = availableMeals.filter((meal: any) => meal.categoryIds.indexOf(catId) > -1)

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