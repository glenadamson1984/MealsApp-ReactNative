import React from "react";
import {View, StyleSheet, Text, Button} from "react-native";

const MealDetailScreen = (props: any) => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen!</Text>
            <Button title="Go back to my categories" onPress={() => {
                props.navigation.popToTop();
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

export default MealDetailScreen;