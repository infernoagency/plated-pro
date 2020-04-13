/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from "react";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { MaterialIcons as Icons } from "@expo/vector-icons";
import type { ColorProp } from "react-native/Libraries/StyleSheet/ColorPropType";

// import components
import TabBadgeIcon from "../components/navigation/TabBadgeIcon";

// import Home screen
import Home from "../screens/home/HomeB";

// import Search screen
import Menu from "../screens/menu/Menu";

// import Favorites screen
import Favorites from "../screens/messages/AllMesssages";

// import Cart screen
import Cart from "../screens/cart/CartB";

// import Settings screen
import Settings from "../screens/settings/SettingsB";

// import colors
import Colors from "../theme/colors";

// HomeNavigator Config

type Props = {
  focused: string,
  horizontal: number,
  tintColor: ColorProp
};

// HomeNavigator
const HomeNavigator = createBottomTabNavigator(
  {
    Home,
    Menu,
    Favorites,
    Settings
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }: Props) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home${focused ? "" : "-outline"}`;
        } else if (routeName === "Menu") {
          iconName = "silverware-fork-knife";
        } else if (routeName === "Favorites") {
          iconName = `message${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `settings${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Icon name={iconName} size={horizontal ? 24 : 28} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
      inactiveTintColor: Colors.secondaryText,
      showLabel: false, // hide labels
      style: {
        backgroundColor: Colors.surface // TabBar background
      },
      keyboardHidesTabBar: true
    }
  }
);

export default HomeNavigator;
