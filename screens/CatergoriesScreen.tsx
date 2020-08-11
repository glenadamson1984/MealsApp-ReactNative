import React from "react";
import {View, StyleSheet, Text, Button, FlatList, TouchableOpacity} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import Colors from "../constants/Colors"
import CategoryGridTile from "../components/CategoryGridTiles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton"

const CategoriesScreen = (props: any) => {
    const renderGridItem = (itemData: any) => {
        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={() => {
                props.navigation.navigate({
                    routeName: "CategoryMeals",
                    params: {
                        categoryId: itemData.item.id
                    }
                });
            }} />
        );
    }

    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
    );
}

CategoriesScreen.navigationOptions = (navigationData: any) => {
    return {
        headerTitle: "Meal Categories",
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

export default CategoriesScreen;

