import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import PersonalInfo from "../screens/personalinfo";
import Cert from "../screens/cert";

const screens = {
    Home: {
        screen : Home
    },
    Information: {
        screen : PersonalInfo
    },
    Certificate:{
        screen: Cert
    }
}

const Homestack = createStackNavigator(screens);

export default createAppContainer(Homestack);