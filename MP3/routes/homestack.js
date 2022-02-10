import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import PersonalInfo from "../screens/personalinfo";

const screens = {
    Home: {
        screen : Home
    },
    PersonalInfo: {
        screen : PersonalInfo
    }
}

const Homestack = createStackNavigator(screens);

export default createAppContainer(Homestack);