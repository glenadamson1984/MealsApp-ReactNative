import React from "react";
import {View, StyleSheet, Text} from "react-native";
import MealList from "../components/MealList";
import {MEALS} from "../data/dummy-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import CategoriesScreen from "./CatergoriesScreen";

const FavouritesScreen = (props: any) => {
    const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");

    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    );
}

FavouritesScreen.navigationOptions = (navigationData: any) => {
    return {
        headerTitle: "Your Favourites",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => {
                    navigationData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default FavouritesScreen;