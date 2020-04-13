/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Swipeout from "react-native-swipeout";
import getImgSource from '../../utils/getImgSource.js';
import Button from "../../components/buttons/Button";

// import components
import { Subtitle1, Subtitle2 } from "../text/CustomText";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
// import colors, fonts, layout
import Colors from "../../theme/colors";
import Layout from "../../theme/layout";

// ProductCard Config
const ITEM_WIDTH = Layout.SCREEN_WIDTH;
const IOS = Platform.OS === "ios";
const MINUS_ICON = IOS ? "ios-remove" : "md-remove";
const PLUS_ICON = IOS ? "ios-add" : "md-add";
const imgHolder = require("../../assets/img/imgholder.png");

// ProductCard Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: ITEM_WIDTH,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#efefef"
  },
  imageContainer: {
    marginRight: 16
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8
  },
  textContainer: {
    flex: 1
  },
  title: {
    flex: 1,
    fontWeight: "700",
    color: Colors.primaryText
  },
  firstLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 4,
    height: 30
  },
  secondLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20
  },
  thirdLine: {
    flexDirection: "row",
    alignItems: "center"
  },
  descriptionText: {
    flex: 1,
    color: Colors.secondaryText
  },
  priceText: {
    fontWeight: "700",
    fontSize: 16,
    color: Colors.primaryColor,
    textAlign: "left"
  },
  amountButtonsContainer: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  quantity: {
    top: -1,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center'
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderRadius: 14,
    width: 28,
    height: 28,
    backgroundColor: '#cacaca'
  }
});

// ProductCard State
type State = {};

// ProductCard Props
type Props = {
  onPress: () => {},
  onPressRemove: () => void,
  onPressAdd: () => void,
  activeOpacity: number,
  imageUri: string,
  title: string,
  price: number,
  quantity: number,
  swipeoutDisabled: boolean,
  swipeoutOnPressRemove: () => {}
};

// ProductCard
export default class DrinkCard extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      activeOpacity,
      onPress,
      imageUri,
      title,
      description,
      date,
      rating,
      price = 0,
      quantity = 0,
      swipeoutDisabled,
      swipeoutOnPressRemove
    } = this.props;

    const swipeoutBtns = [
      {
        text: "Remove",
        backgroundColor: Colors.error,
        onPress: swipeoutOnPressRemove,
        sensitivity: 100
      }
    ];

    return (
      <Swipeout
        right={swipeoutBtns}
        autoClose
        backgroundColor={Colors.surface}
        disabled={swipeoutDisabled}
      >
        <View>
          <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <View style={styles.firstLine}>
                  <Subtitle1 numberOfLines={1} style={styles.title}>
                    {title}
                  </Subtitle1>
                </View>
                
                <View style={styles.secondLine}>
                  <Subtitle2 numberOfLines={5} style={styles.descriptionText}>
                   {description}
                  </Subtitle2>

                  <Button style={{ marginBottom: '10%' }} onPress={onPress} title="Edit" rounded add />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Swipeout>
    );
  }
}
