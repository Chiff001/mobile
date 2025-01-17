import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "./HomeScreen";
import FullPostScreen from "./FullPostScreen";

const Stack = createNativeStackNavigator()

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: "Лица"}} />
                <Stack.Screen name="FullPost" component={FullPostScreen} options={{title: "Лицо"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}