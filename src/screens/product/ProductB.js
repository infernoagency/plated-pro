/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component, Fragment } from "react";
import {
  Platform,
  StatusBar,
  ImageBackground,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";
import Color from "color";
import { SafeAreaView } from "react-navigation";
import Divider from "../../components/divider/Divider";
// import utils
import getImgSource from '../../utils/getImgSource.js';

// import components
import Button from "../../components/buttons/Button";
import { Caption, Heading5, SmallText, Subtitle1, Subtitle2 } from "../../components/text/CustomText";
import GradientContainer from "../../components/gradientcontainer/GradientContainer";
import Icon from "../../components/icon/Icon";
import TouchableItem from "../../components/TouchableItem";
import ReviewCard from "../../components/cards/ReviewCard";
// import colors
import Colors from "../../theme/colors";

// ProductB Config
const IOS = Platform.OS === "ios";
const MINUS_ICON = IOS ? "ios-remove" : "md-remove";
const PLUS_ICON = IOS ? "ios-add" : "md-add";
const FAVORITE_ICON = IOS ? "ios-heart" : "md-heart";
const CLOSE_ICON = IOS ? "ios-close" : "md-close";
const imgHolder = require("../../assets/img/imgholder.png");

// ProductB Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background
  },
  header: {
    width: "100%",
    height: 236
  },
  productImg: {
    width: "100%",
    height: 236,
    resizeMode: "cover"
  },
  bottomOverlay: { flex: 1 },
  topButton: {
    position: "absolute",
    top: 45,
    borderRadius: 18,
    backgroundColor: Colors.background
  },
  left: { left: 16 },
  right: { right: 16 },
  buttonIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: 36
  },
  favorite: {
    backgroundColor: Colors.secondaryColor
  },
  productDescription: {
    marginTop: -20,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 16,
    backgroundColor: Colors.surface
  },
  productTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 10
  },
  productTitle: {
    fontWeight: "700"
  },
  priceText: {
    fontWeight: "700",
    fontSize: 18,
    color: Colors.black
  },
  shortDescription: {
    paddingVertical: 8
  },
  caption: {
    padding: 16,
    fontWeight: "700"
  },
  dishContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    height: 56
  },
  indicator: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  emptyIndicator: {
    marginRight: 24,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Color(Colors.black).alpha(0.4),
    backgroundColor: Colors.background
  },
  filledIndicator: {
    marginRight: 24,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Color(Colors.black).alpha(0.4)
  },
  dishName: {
    top: -1,
    lineHeight: 22
  },
  dishPrice: {
    color: Colors.secondaryText
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  amountButtonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  quantity: {
    top: -1,
    paddingHorizontal: 18,
    fontSize: 18,
    color: Colors.black,
    textAlign: "center"
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Color(Colors.primaryColor).alpha(0.88)
  },
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    width: "100%",
    padding: 20,
    backgroundColor: "#efefef"
  },
  bottomArea: { flex: 0, backgroundColor: "#efefef" }
});

// ProductB
export default class ProductB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        imageUri: require("../../assets/img/hot-chicken.jpg"),
        name: "Hot Chicken Sandwich",
        description: "Topped with homeade southern slaw, pickles, and special sauce on a toasted brioche bun",
        price: 10.9,
        feeds: "1",
        calories: "1230",
        sideDish: 20,
        total: 10.9
      },
      favorite: false,
      productReviews: [
        {
          key: 1,
          title: "The food is to die for!",
          description: "He is an amazing chef! We hired him to cook for our family 3 times per week.",
          date: "01-31-20",
          rating: 5
        },
        {
          key: 2,
          title: "Catering was perfect!",
          description: "We used John to cater our event and the food was amazing everyone asked where I found him!",
          date: "12-31-19",
          rating: 3.6
        },
        {
          key: 3,
          title: "Lobster Mac is Awesome!",
          description: "Try the lobster mac you'll love it.",
          date: "12-14-19",
          rating: 4.2
        },
        ]
    };
  }

  navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

      keyExtractor = (item, index) => index.toString();

      renderSeparator = () => <Divider />;
    
    renderReviewItem = ({ item, index }) => (
    <ReviewCard
      key={index}
      activeOpacity={0.7}
      description={item.description}
      calories={item.calories}
      title={item.title}
      rating={item.rating}
      quantity={item.quantity}
      swipeoutDisabled
    />
  );

  render() {
    const { product, favorite, extras, sides, productReviews } = this.state;
    const {
      price,
      description,
      calories,
      feeds,
      total
    } = product;

    return (
      <Fragment>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
          />

          <ScrollView>
            <View style={styles.header}>
              <ImageBackground
                defaultSource={imgHolder}
                source={getImgSource(product.imageUri)}
                style={styles.productImg}
              >
                <GradientContainer
                  colors={[Colors.black, "transparent"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0.6 }}
                  containerStyle={styles.bottomOverlay}
                />
              </ImageBackground>

              <View style={[styles.topButton, styles.left]}>
                <TouchableItem onPress={this.goBack} borderless>
                  <View style={styles.buttonIconContainer}>
                    <Icon
                      name={CLOSE_ICON}
                      size={22}
                      color={Colors.secondaryText}
                    />
                  </View>
                </TouchableItem>
              </View>

            </View>

            <View style={styles.productDescription}>
              <View style={styles.productTitleContainer}>
                <Heading5 style={styles.productTitle}>{product.name}</Heading5>
                <Text style={styles.priceText}>
                  {`$ ${(price).toFixed(2)}`}
                </Text>
              </View>

             <Subtitle2 style={styles.shortDescription}>
               {description}
             </Subtitle2>
             <Subtitle2 style={styles.shortDescription}>
               Calories: {calories}
             </Subtitle2>
             <Subtitle2 style={styles.shortDescription}>
               Feeds: {feeds}
             </Subtitle2>
             <Heading5 style={[styles.productTitle, {marginTop: 10}]}>Reviews</Heading5>
             </View>
             <FlatList
              data={productReviews}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderReviewItem}
              ItemSeparatorComponent={this.renderSeparator}
              />
              </ScrollView>

         <View style={styles.bottomButtonsContainer}>
            <Button
              onPress={this.navigateTo("Booking")}
              title={`Start An Order`}
              titleColor={Colors.onPrimaryColor}
              height={44}
              color={Colors.primaryColor}
              medium
              rounded
            />
          </View>
     
      </Fragment>
    );
  }
}
