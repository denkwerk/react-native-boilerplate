import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import Tab1Screen from "./Tabs/Tab1Screen";
import Tab1Details from "./Tabs/Tab1Details";
import Tab2Screen from "./Tabs/Tab2Screen";

const Tab1 = createStackNavigator(
  {
    Tab1: {
      screen: Tab1Screen,
      navigationOptions: {
        headerLeft: null,
        headerTitle: "Tab 1 Screen"
      }
    },
    Tab1Details: {
      screen: Tab1Details,
      navigationOptions: {
        headerTitle: "Tab 1 without bottom bar"
      }
    }
  }
);

const Tab2 = createStackNavigator(
  {
    Tab2: {
      screen: Tab2Screen,
      navigationOptions: {
        headerLeft: null,
        headerTitle: "Tab 2 Screen"
      }
    }
  }
);


const DashboardTabRoutes = createBottomTabNavigator(
  {
    Tab1: Tab1,
    Tab2: Tab2,
  },
  {
    initialRouteName: "Tab1",
    navigationOptions: ({ navigation }) => {
      const { routeName, routes } = navigation.state;
      let params = routes && routes[1] && routes[1].params;
      return {
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Tab1') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Tab2') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          }
  
          // You can return any component that you like here! For demo we use an
          // icon component from react-native-vector-icons
          return <Icon name={iconName} size={25} color={tintColor} />;
        },
        tabBarVisible:
          params && params.hideTabBar != null ? !params.hideTabBar : true,
        swipeEnabled:
          params && params.hideTabBar != null ? !params.hideTabBar : true
      };
    },
    tabBarOptions: {
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      style: {
        height: 60,
        paddingVertical: 5,
        backgroundColor: "#fff"
      },
      labelStyle: {
        fontSize: 12,
        lineHeight: 20
      }
    },
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: true
  }
);

export default DashboardTabRoutes;
