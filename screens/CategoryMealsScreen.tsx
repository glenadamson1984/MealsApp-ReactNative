import React from "react";
import {View, StyleSheet, Text, Button} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealsScreen = (props: any) => {
    const catId = props.navigation.getParam("categoryId");

    const selectCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            <Text>{selectCategory ? selectCategory.title : null}</Text>
            <Button title="Go to Meal Details" onPress={() => {
                props.navigation.navigate({
                    routeName: "MealDetail"
                });
            }} />
            <Button title="Go Back" onPress={() => {
                props.navigation.goBack();
            }} />
        </View>
    );
}

CategoryMealsScreen.navigationOptions = (navigatonData: any) => {
    const catId = navigatonData.navigation.getParam("categoryId");

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
});

export default CategoryMealsScreen;