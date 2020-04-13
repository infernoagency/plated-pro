/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component, Fragment } from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import Color from "color";
import StarRating from '../../components/starrating/StarRating';
// import utils
import getImgSource from '../../utils/getImgSource.js';

// import components
import TouchableItem from "../../components/TouchableItem";

// import colors, layout
import Colors from "../../theme/colors";
import Layout from "../../theme/layout";

// CategoriesB Config
// CARD_WIDTH = (SCREEN_WIDTH - 2 * categoriesContainer.padding - 4 * card.margin) / 2
const CARD_WIDTH = (Layout.SCREEN_WIDTH - 2 * 8 - 4 * 8) / 2;
const CARD_HEIGHT = CARD_WIDTH * 1.04;
const CARD_BORDER_RADIUS = 8;

// CategoriesB Styles
const styles = StyleSheet.create({
  topArea: { flex: 0, backgroundColor: Colors.primaryColor },
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background
  },
  categoriesContainer: {
    padding: 8
  },
  cardImg: {
    borderRadius: CARD_BORDER_RADIUS
  },
  card: {
    margin: 8,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: "cover"
  },
  cardOverlay: {
    flex: 1,
    borderRadius: CARD_BORDER_RADIUS,
    backgroundColor: Color(Colors.overlayColor).alpha(0.24),
    overflow: "hidden"
  },
  cardContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 16
  },
  cardTitle: {
    paddingBottom: 2,
    fontWeight: "500",
    fontSize: 22,
    color: Colors.white,
    letterSpacing: 1.2,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  items: {
    paddingBottom: 28,
    fontWeight: "500",
    fontSize: 12,
    color: Colors.white,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
});

export default class AllChefs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chefs: [
        {
          key: 1,
          imageUri: require("../../assets/img/chef1.jpg"),
          name: "John Smith",
          rating: 4
        },
        {
          key: 2,
          imageUri: require("../../assets/img/chef4.jpg"),
          name: "Jenna Fox",
          rating: 4
        },
        {
          key: 3,
          imageUri: require("../../assets/img/chef5.jpg"),
          name: "Sarah Day",
          rating: 4
        },
        {
          key: 4,
          imageUri: require("../../assets/img/chef2.jpg"),
          name: "Don Folk",
          rating: 4
        },
        {
          key: 5,
          imageUri: require("../../assets/img/chef3.jpg"),
          name: "Frank Tilt",
          rating: 4
        }
      ]
    };
  }

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  keyExtractor = item => item.key;

  renderChefItem = ({ item, index }) => (
    <ImageBackground
      key={index}
      source={getImgSource(item.imageUri)}
      imageStyle={styles.cardImg}
      style={styles.card}
    >
      <View style={styles.cardOverlay}>
        <TouchableItem
          onPress={this.navigateTo("Category")}
          style={styles.cardContainer}
          // borderless
        >
          <Fragment>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <StarRating rating={item.rating} starColor="#fff" starSize={16} />
          </Fragment>
        </TouchableItem>
      </View>
    </ImageBackground>
  );

  render() {
    const { chefs } = this.state;

    return (
      <Fragment>
        <SafeAreaView style={styles.topArea} />
        <SafeAreaView style={styles.screenContainer}>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
          />

          <FlatList
            data={chefs}
            showsHorizontalScrollIndicator={false}
            alwaysBounceHorizontal={false}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderChefItem}
            numColumns={2}
            contentContainerStyle={styles.categoriesContainer}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}
