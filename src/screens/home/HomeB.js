/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component, Fragment } from "react";
import {
  ImageBackground,
  ScrollView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-navigation";
import getImgSource from '../../utils/getImgSource.js';
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import TouchableItem from "../../components/TouchableItem";
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
// import components
import Divider from "../../components/divider/Divider";
import LinkButton from "../../components/buttons/LinkButton";
import OrderItem from "../../components/cards/OrderItemB";
import Color from "color";
import Layout from "../../theme/layout";
import ReviewCard from "../../components/cards/ReviewCard";

import StarRating from '../../components/starrating/StarRating';
import { Heading6 } from "../../components/text/CustomText";

// import colors
import Colors from "../../theme/colors";

// Current Location Config
const LOCATION_ICON = "map-marker";

// HomeB Config
const imgHolder = require("../../assets/img/imgholder.png");

const CARD_WIDTH = (Layout.SCREEN_WIDTH - 2 * 8 - 4 * 8) / 3.1;
const CARD_HEIGHT = CARD_WIDTH * 1.04;
const CARD_BORDER_RADIUS = 8;

// HomeB Styles
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  productsContainer: {
    paddingVertical: 8
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
    borderRadius: CARD_BORDER_RADIUS,
    resizeMode: "cover",
    backgroundColor: Colors.primaryColor,
  },
  cardOverlay: {
    flex: 1,
    borderRadius: CARD_BORDER_RADIUS,
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
    fontSize: 18,
    color: Colors.white,
    letterSpacing: 1.2
  },
    cardInfo: {
    paddingBottom: 15,
    fontWeight: "500",
    fontSize: 20,
    color: Colors.white,
    letterSpacing: 1.2,

  },
    cardInfo1: {
    paddingBottom: 12,
    fontWeight: "500",
    fontSize: 24,
    color: Colors.white,
    letterSpacing: 1.2,
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

// HomeB
export default class HomeB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "James",
      bookings: [
        {
          orderNumber: "10",
          merchant: "bartender",
          orderDate: "10 July, 2019",
          orderStatus: "pending",
          orderItems: [
            {
              name: "8 Hours",
              price: 200.00
            }
          ]
        },
          {
            
          orderNumber: "11",
          merchant: "chef",
          orderDate: "22 July, 2019",
          orderStatus: "on-the-way",
          orderItems: [
            {
              name: "Hot Chicken Catering Package",
              price: 89.99,
              qty: 2
            },
          ]
        }
      ],
        reviews: [
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
        ],
      analytics: [
        {
          key: 1,
          name: "Bookings",
          bookings: 5
        },
        {
          key: 2,
          name: "Sales",
          sales: 223.65
        },
        {
          key: 3,
          name: "Rating",
          rating: 4.3
        },
      ]
    };
    }

    navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
    };

    renderSeparator = () => <Divider />;

    registerForPushNotifications = async (user) => {
    const { status: exsistingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = exsistingStatus;

    if (exsistingStatus !== 'granted'){
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus.status;
    }
    
    if (finalStatus !== 'granted') { 
        return; 
    }
    
    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
    
    var updates = {}
    updates['expoToken'] = token
    const document = db.collection('users').doc('1@z.co');
        document.update(updates);
    };
    
    
keyExtractor1 = item => item.orderNumber.toString();
      keyExtractor = item => item.key;
    
    renderItem = ({ item, index }) => (
    <OrderItem
      key={index}
      activeOpacity={0.8}
      orderNumber={item.orderNumber}
      orderDate={item.orderDate}
      orderItems={item.orderItems}
      merchant={item.merchant}
      orderStatus={item.orderStatus}
      approveOnPress={() => this.navigateTo("Product")}
      declineOnPress={() => this.navigateTo("Product")}
      messageOnPress={() => {this.navigateTo("Messages")}}
    />
    );


  renderAnalytics = ({ item, index }) => (
    <ImageBackground
      key={index}
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
            {item.name === "Bookings" && ( <Text style={styles.cardInfo1}>{item.bookings}</Text> )}
            {item.name === "Sales" && ( <Text style={styles.cardInfo}>${item.sales}</Text> )}
            {item.name === "Rating" && ( <Text style={styles.cardInfo1}>{item.rating}</Text> )}
            <Text style={styles.cardTitle}>{item.name}</Text>
          </Fragment>
        </TouchableItem>
      </View>
    </ImageBackground>
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
  
  render() {
    const { firstName, analytics, bookings, reviews } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
            barStyle="dark-content"
          />


        <View style={styles.container}>
          <ScrollView
           showsVerticalScrollIndicator={false}
          >
             <View style={styles.titleContainer}>
              <Heading6 style={styles.titleText}>Welcome, {firstName} </Heading6>
            </View>
        <FlatList
            data={analytics}
            showsHorizontalScrollIndicator={false}
            alwaysBounceHorizontal={false}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderAnalytics}
            numColumns={3}
            contentContainerStyle={styles.categoriesContainer}
          />
  
        <View style={styles.titleContainer}>
              <Heading6 style={styles.titleText}>Upcoming Bookings: </Heading6>
            </View>
          <View style={styles.container}>
            <FlatList
              data={bookings}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor1}
              contentContainerStyle={styles.productsContainer}
            />
          </View>
 <View style={styles.titleContainer}>
              <Heading6 style={styles.titleText}>Latest Reviews: </Heading6>
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
        
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
