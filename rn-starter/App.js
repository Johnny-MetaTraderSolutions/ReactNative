import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import SelfIntroPage from "./src/screens/SelfIntroPage";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ColorPicker from "./src/screens/ColorPicker";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Introduction: SelfIntroPage,
    List : ListScreen,
    ImageScrn:ImageScreen,
    Counter: CounterScreen,
    ColorScrn : ColorScreen,
    Picker: ColorPicker,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "React Native",
    },
  }
);

export default createAppContainer(navigator);
