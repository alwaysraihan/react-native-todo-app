import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ToDo from "./Screens/ToDo";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    options={{
                        headerShown: false,
                    }}
                    component={ToDo}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
