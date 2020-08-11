import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import DefaultStyles from "../constants/FontStyle";

const ListItem = (props: any) => {
    return (
        <View style={styles.listItem}>
            <Text style={DefaultStyles.defaultText}>{props.children}</Text>
        </View>
    );
}

const MealDetailScreen = (props: any) => {
    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

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
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal ? selectedMeal.title : null,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName="ios-star"
                    onPress={() => {
                        console.log('Mark as favorite!');
                    }}
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
