import React, {useEffect, useCallback} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultStyles from "../constants/FontStyle";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavourite } from "../store/actions/meals";

const ListItem = (props: any) => {
    return (
        <View style={styles.listItem}>
            <Text style={DefaultStyles.defaultText}>{props.children}</Text>
        </View>
    );
}

const MealDetailScreen = (props: any) => {
    const mealId = props.navigation.getParam('mealId');

    const availableMeals = useSelector((state: any) => {
        return state.meals.meals;
    })

    const currentMealIsFav = useSelector((state: any) => {
        return state.meals.favouriteMeals.some((meal: any) => meal.id === mealId);
    })

    const selectedMeal = availableMeals.find((meal: any) => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavouriteHandler = useCallback( () => {
        dispatch(toggleFavourite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({
            toggleFav: toggleFavouriteHandler
        });

    }, [toggleFavouriteHandler])

    useEffect(() => {
        props.navigation.setParams({
            isFav: currentMealIsFav
        })
    }, [currentMealIsFav]);

    if (selectedMeal) {
        return (
            <ScrollView>
                <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
                <View style={styles.details}>
                    <Text style={DefaultStyles.defaultText}>{selectedMeal.duration}m</Text>
                    <Text style={DefaultStyles.defaultText}>{selectedMeal.complexity.toUpperCase()}</Text>
                    <Text style={DefaultStyles.defaultText}>{selectedMeal.affordability.toUpperCase()}</Text>
                </View>
                <Text style={styles.title}>Ingredients</Text>
                {selectedMeal.ingredients.map((ingredient: any) => {
                    return <ListItem key={ingredient}>{ingredient}</ListItem>
                })}
                <Text style={styles.title}>Steps</Text>
                {selectedMeal.ingredients.map((step: any) => {
                    return <ListItem key={step}>{step}</ListItem>
                })}
            </ScrollView>
        );
    } else {
        return <View></View>
    }
};

MealDetailScreen.navigationOptions = (navigationData: any) => {
    const mealTitle = navigationData.navigation.getParam("mealTitle");
    const toggleFavourite = navigationData.navigation.getParam("toggleFav");
    const isFavourite = navigationData.navigation.getParam("isFav");
    return {
        headerTitle: mealTitle,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName = {isFavourite ? "ios-star" : "ios-star-outline"}
                    onPress={toggleFavourite}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
    },
    details: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-around",
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        textAlign: "center",
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
    }
});

export default MealDetailScreen;
