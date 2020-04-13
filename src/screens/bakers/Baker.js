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
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import Color from "color";
import { SafeAreaView } from "react-navigation";
import PriceRating from '../../components/pricerating/PriceRating';
// import utils
import getImgSource from '../../utils/getImgSource.js';

// import components
import Button from "../../components/buttons/Button";
import { Caption, Heading5, SmallText } from "../../components/text/CustomText";
import GradientContainer from "../../components/gradientcontainer/GradientContainer";
import Icon from "../../components/icon/Icon";
import TouchableItem from "../../components/TouchableItem";
import { Heading6 } from "../../components/text/CustomText";
import LinkButton from "../../components/buttons/LinkButton";
import ChefProductCard from "../../components/cards/ChefProductCard";
import ReviewCard from "../../components/cards/ReviewCard";
import CateringCard from "../../components/cards/CateringCard";
import Divider from "../../components/divider/Divider";
// import colors
import Colors from "../../theme/colors";

// ProductB Config
const IOS = Platform.OS === "ios";
const MINUS_ICON = IOS ? "ios-remove" : "md-remove";
const MESSAGE_ICON = IOS ? "ios-chatbubbles" : "md-chatbubbles";
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
    height: 450,
    resizeMode: "cover"
  },
  bottomOverlay: { flex: 1 },
  topButton: {
    position: "absolute",
    top: '20%',
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
    close: {
    backgroundColor: Colors.secondaryColor
  },
    message: {
    backgroundColor: Colors.primaryColor
  },
  productDescription: {
    marginTop: 100,
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
right2: { right: 65 },
  priceText: {
    fontWeight: "700",
    fontSize: 18,
    color: Colors.primaryColor
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
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 12
  },
  titleText: {
    fontWeight: "700"
  },
  viewAllText: {
    color: Colors.primaryColor
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
    padding: 16,
    backgroundColor: "#efefef"
  },
  bottomArea: { flex: 0, backgroundColor: "#efefef" }
});

// ProductB
export default class Baker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: [
        {
          key: 1,
          imageUri: require("../../assets/img/Pasta-Primavera.jpg"),
          name: "Pasta Primavera",
          calories: 900,
          price: 10.99,
          quantity: 0
        },
        {
          key: 2,
          imageUri: require("../../assets/img/hot-chicken.jpg"),
          name: "Hot Chicken Sandwich",
          calories: 700,
          price: 8.99,
          quantity: 0,
          quantity: 0
        },
        {
          key: 3,
          imageUri: require("../../assets/img/lobster-mac.jpg"),
          name: "Lobster Mac & Cheese",
          calories: 400,
          price: 8.49,
          quantity: 0
        },
        {
          key: 4,
          imageUri: require("../../assets/img/acai-bowl.jpg"),
          name: "Acai bowl",
          calories: 400,
          price: 6.49,
          quantity: 0
        }
      ],
        featuredProducts: [
        {
          key: 1,
          imageUri: require("../../assets/img/Pasta-Primavera.jpg"),
          name: "Pasta Primavera",
          calories: 900,
          price: 10.99,
          quantity: 0
        },
        {
          key: 2,
          imageUri: require("../../assets/img/hot-chicken.jpg"),
          name: "Hot Chicken Sandwich",
          calories: 700,
          price: 8.99,
          quantity: 0,
          quantity: 0
        },
        ],
        reviews: [
        {
          key: 1,
          title: "The tiramisu is amazing!",
          description: "She is an amazing baker! Tiramisu was the best I've ever had.",
          date: "01-31-20",
          rating: 5
        },
        {
          key: 2,
          title: "Cannoli's were perfect!",
          description: "We ordered the cannol'is for a party and everyone loved them!",
          date: "12-31-19",
          rating: 3.6
        },
        {
          key: 3,
          title: "Cured My Sweet Tooth!",
          description: "Julie sure knows how to cure a sweet tooth.",
          date: "12-14-19",
          rating: 4.2
        },
        ],
        catering: [
        {
          key: 1,
          title: "12 S'more Cannoli's",
          imageUri: require("../../assets/img/cannoli.jpg"),
          feeds: "6-12",
          price: 29.99
        },
        {
          key: 2,
          title: "Tiramisu Cake",
          imageUri: require("../../assets/img/tiramisu.jpg"),
          feeds: "16",
          price: 44.99,
        },
        {
          key: 3,
          title: "Struffoli w/ Honey",
          imageUri: require("../../assets/img/struffoli.jpg"),
          price: 29.99,
          feeds: "10-12"
        },
        ],
        
      baker: {
        imageUri: require("../../assets/img/baker1.jpg"),
        name: "Julie Garapolo",
        description: "Welcome to my page! I'm a baker and have been baking for over 60 years. My speciality is making Itailian desserts for any occasion you may be having.",
        price: 3,
        singleProductPrice: 10.9,
        quantity: 1,
        sideDish: 20,
        total: 10.9,
        
      },
      favorite: false
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

  onPressAddToFavorites = () => {
    const { favorite } = this.state;

    this.setState({
      favorite: !favorite
    });
  };


  keyExtractor = (item, index) => index.toString();

      renderSeparator = () => <Divider />;
      
renderProductItem = ({ item, index }) => (
    <ChefProductCard
      onPress={this.navigateTo("Product")}
      key={index}
      activeOpacity={0.7}
      imageUri={item.imageUri}
      description={item.description}
      calories={item.calories}
      title={item.name}
      price={item.price}
      quantity={item.quantity}
      swipeoutDisabled
    />
  );
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
renderCateringItem = ({ item, index }) => (
    <CateringCard
      onPress={this.navigateTo("Product")}
      key={index}
      activeOpacity={0.7}
      imageUri={item.imageUri}
      description={item.description}
      feeds={item.feeds}
      title={item.title}
      price={item.price}
      quantity={item.quantity}
      swipeoutDisabled
    />
  );

  render() {
    const { baker, favorite, extras, products, featuredProducts, reviews, catering } = this.state;
    const {
      price,
      description,
      quantity,
      total
    } = baker;

    return (
      <Fragment>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
          />

          <ScrollView 
           showsVerticalScrollIndicator={false} 
           >
        
            <View style={styles.header}>
              <ImageBackground
                defaultSource={imgHolder}
                source={getImgSource(baker.imageUri)}
                style={styles.productImg}
              >
                <GradientContainer
                  colors={[Colors.black, "transparent"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0.6 }}
                  containerStyle={styles.bottomOverlay}
                />
              </ImageBackground>

              
                  <View style={[styles.topButton, styles.left, styles.close]}>
                    <TouchableItem onPress={this.goBack} borderless>
                      <View style={styles.buttonIconContainer}>
                        <Icon
                          name={CLOSE_ICON}
                          size={22}
                          color={Colors.white}
                        />
                      </View>
                    </TouchableItem>
                  </View>

                    <View
                    style={[
                      styles.topButton,
                      styles.right,
                      favorite && styles.favorite
                    ]}
                  >
                    <TouchableItem onPress={this.navigateTo("Messages")} borderless>
                      <View style={styles.buttonIconContainer}>
                        <Icon
                          name={MESSAGE_ICON}
                          size={19}
                          color={Colors.primaryColor}
                        />
                      </View>
                    </TouchableItem>
                  </View>
          
            </View>


            <View style={styles.productDescription}>
              <View style={styles.productTitleContainer}>
                <Heading5 style={styles.productTitle}>{baker.name}</Heading5>
                  <PriceRating price={baker.price} currencyColor={Colors.primaryColor} currencySize={16} />
              </View>

              <SmallText style={styles.shortDescription}>
                {description}</SmallText> 
            </View>
                <View style={styles.titleContainer}>
              <Heading6 style={styles.titleText}>Catering Packages</Heading6>
              <LinkButton
                title="View Menu"
                titleStyle={styles.viewAllText}
                onPress={this.navigateTo("CateringMenu")}
              />
            </View>

            <FlatList
              data={catering}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderCateringItem}
              ItemSeparatorComponent={this.renderSeparator}
            />     
            <View style={styles.titleContainer}>
              <Heading6 style={styles.titleText}>Reviews</Heading6>
              <LinkButton
                title="View All"
                titleStyle={styles.viewAllText}
                onPress={this.navigateTo("AllReviews")}
              />
            </View>

            <FlatList
              data={reviews}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderReviewItem}
              ItemSeparatorComponent={this.renderSeparator}
            />
            <Divider />
<TouchableOpacity onPress={this.navigateTo("Deposit")}>
           <View style={styles.titleContainer}>

              <Heading6 style={styles.titleText}>Custom Payment</Heading6>
              <LinkButton
                title="Send Payment >"
                titleStyle={styles.viewAllText}
              />

            </View>
</TouchableOpacity>


          </ScrollView>

          <View style={styles.bottomButtonsContainer}>
            <Button
              onPress={this.navigateTo("BakerBooking")}
              title="Start An Order"
              titleColor={Colors.onPrimaryColor}
              height={44}
              color={Colors.primaryColor}
              medium
              rounded
            />
          </View>
        <SafeAreaView style={styles.bottomArea} />
      </Fragment>
    );
  }
}
