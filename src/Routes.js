import Home from "./screens/Home";
import DashboardTabRoutes from "./screens/Dashboard/Routes";
import { createStackNavigator } from "react-navigation";

const Routes = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: "Home",
      }
    },
    Dashboard: {
      screen: DashboardTabRoutes,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      animationEnabled: true
    }
  }
);

export default Routes;
