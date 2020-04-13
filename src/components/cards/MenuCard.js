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
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Swipeout from "react-native-swipeout";
import getImgSource from '../../utils/getImgSource.js';
import Button from "../../components/buttons/Button";
// import components
import Icon from "../icon/Icon";
import { Subtitle1, Subtitle2 } from "../text/CustomText";

// import colors, fonts, layout
import Colors from "../../theme/colors";
import Layout from "../../theme/layout";

// ProductCard Config
const ITEM_WIDTH = Layout.SCREEN_WIDTH;
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
    alignItems: "center",
    marginBottom: 2
  },
  thirdLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
fourthLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4
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
  },
    textInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#e3e3e3",
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 8,
    height: 30,
    width: 50,
    fontSize: 16,
    textAlignVertical: "center"
  },
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
export default class MenuCard extends Component<Props, State> {
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
      chef,
      feeds,
      calories = 0,
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
          <TouchableOpacity  activeOpacity={activeOpacity}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  defaultSource={imgHolder}
                  source={getImgSource(imageUri)}
                  style={[styles.image]}
                />
              </View>

              <View style={styles.textContainer}>
                <View style={styles.firstLine}>
                  <Subtitle1 numberOfLines={1} style={styles.title}>
                    {title}
                  </Subtitle1>
                </View>
                
                <View style={styles.secondLine}>
                  <Subtitle2 numberOfLines={1} style={styles.descriptionText}>
                    QTY: {quantity}
                  </Subtitle2>
                <Button color={Colors.primaryColor} onPress={onPress} title="Edit" rounded remove />
                    
                </View>

                <View style={styles.thirdLine}>
                  <Text style={styles.priceText}>{`$ ${price}`}</Text>
  
                </View>
<View style={styles.fourthLine}>
                  
  
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Swipeout>
    );
  }
}
