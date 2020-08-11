import React, { useState, useEffect, useCallback } from "react";
import {View, StyleSheet, Text, Switch} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import FavouritesScreen from "./FavouritesScreen";
import Colors from "../constants/Colors";
import {useDispatch} from "react-redux";
import {setFilters} from "../store/actions/meals";

const FiltersSwitch = (props: any) => {
 return (
     <View style={styles.filterContainer}>
         <Text>{props.text}</Text>
         <Switch trackColor={{true: Colors.accentColor, false: "white"}}
                 thumbColor={Colors.primaryColor}
                 value={props.state}
                 onValueChange={props.onChange} />
     </View>
 );
}

const FiltersScreen = (props: any) => {
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVeganFree, setIsVeganFree] = useState(false);
    const [isVegetarianFree, setIsVegetarianFree] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            veganFree: isVeganFree,
            vegetarianFree: isVegetarianFree
        }

        dispatch(setFilters(appliedFilters));
    },[isGlutenFree, isLactoseFree, isVeganFree, isVegetarianFree, dispatch]);

    useEffect(() => {
        navigation.setParams({
            save: saveFilters()
        });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters/ Restrictions</Text>
            <FiltersSwitch state={isGlutenFree} onChange={(newValue: any) => setIsGlutenFree(newValue)} text="Gluten Free" />
            <FiltersSwitch state={isLactoseFree} onChange={(newValue: any) => setIsLactoseFree(newValue)} text="Lactose Free" />
            <FiltersSwitch state={isVeganFree} onChange={(newValue: any) => setIsVeganFree(newValue)} text="Vegan Free" />
            <FiltersSwitch state={isVegetarianFree} onChange={(newValue: any) => setIsVegetarianFree(newValue)} text="Vegetarian Free" />
        </View>
    );
}

FiltersScreen.navigationOptions = (navigationData: any) => {
    return {
        headerTitle: "Filter Meals",
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => {
                    navigationData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        ),
        headerRight:() => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Save" iconName="ios-save" onPress={
                    navigationData.navigation.getParam("save")
                } />
            </HeaderButtons>
        ),
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
    title:{
        fontFamily: "open-sans",
        fontSize: 22,
        margin: 20,
        textAlign: "center"
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginVertical: 15
    }
});

export default FiltersScreen;