import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground} from "react-native";
import DefaultStyles from "../constants/FontStyle"

const MealItem = (props: any) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                        <View style={styles.titleContainer}>
                            <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                    <Text style={DefaultStyles.defaultText}>{props.duration}m</Text>
                    <Text style={DefaultStyles.defaultText}>{props.complexity.toUpperCase()}</Text>
                    <Text style={DefaultStyles.defaultText}>{props.affordability.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
      fontFamily: "open-sans-bold",
      fontSize: 22,
      color: "white",
      textAlign: "center"
    },
    mealRow: {
        flexDirection: "row",
    },
    mealHeader: {
        height: "85%",
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        height: "15%"
    }
});

export default MealItem;
