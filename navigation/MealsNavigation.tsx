import { createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CatergoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "red"
            },
            headerTintColor: "white",
        }
    },
    MealDetail: MealDetailScreen
    }, {
    defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: "white",
    }, mode: "modal"
});

export default createAppContainer(MealsNavigator);