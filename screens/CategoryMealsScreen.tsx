import React from "react";
import {View, StyleSheet, Text, Button} from "react-native";

const CategoryMealsScreen = (props: any) => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CategoryMealsScreen;