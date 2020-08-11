import React from "react";
import {View, StyleSheet, Text, Button, FlatList} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import Colors from "../constants/Colors";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props: any) => {
    const renderMealItem = (itemData: any) => {
        return (
            <MealItem title={itemData.item.title}
                      duration={itemData.item.duration}
                      complexity={itemData.item.complexity}
                      affordability={itemData.item.affordability}
                      image={itemData.item.imageUrl}
                      onSelectMeal={() => {
                          props.navigation.navigate({
                              routeName: "MealDetail",
                              params: {
                                  mealId: itemData.item.id
                              }
                          })
                      }} />
        );
    }

    const catId = props.navigation.getParam("categoryId");

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) > -1)

    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} renderItem={renderMealItem} style={styles.flatList} />
        </View>
    );
}

CategoryMealsScreen.navigationOptions = (navigationData: any) => {
    const catId = navigationData.navigation.getParam("categoryId");

    const selectCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectCategory ? selectCategory.title : null,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    flatList: {
        width: "100%",
    }
});

export default CategoryMealsScreen;