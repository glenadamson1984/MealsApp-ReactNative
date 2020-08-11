import React from "react";
import {View, StyleSheet, FlatList} from "react-native";
import MealItem from "./MealItem";
import {useSelector} from "react-redux";

const MealList = (props: any) => {
    const favouriteMeals = useSelector((state: any) => {
        return state.meals.favouriteMeals
    });

    const renderMealItem = (itemData: any) => {
        const isFavourite = favouriteMeals.some((meal: any) => {
            return meal.id === itemData.item.id;
        })
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
                                  mealId: itemData.item.id,
                                  mealTitle: itemData.item.title,
                                  isFav:isFavourite
                              }
                          })
                      }} />
        );
    }

    return (
        <View style={styles.list}>
            <FlatList data={props.listData} renderItem={renderMealItem} style={styles.flatList} />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    flatList: {
        width: "100%",
    }
});

export default MealList;