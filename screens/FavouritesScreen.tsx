import React from "react";
import {View, StyleSheet, Text} from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import CategoriesScreen from "./CatergoriesScreen";

const FavouritesScreen = (props: any) => {
    const favMeals = useSelector((state: any) => {
        return state.meals.favouriteMeals;
    })

    if (favMeals.length > 0) {
        return (
            <MealList listData={favMeals} navigation={props.navigation} />
        );
    } else {
        return <Text>No Favourite meals found</Text>
    }

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