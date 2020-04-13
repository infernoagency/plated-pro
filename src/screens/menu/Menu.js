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
  Keyboard,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  View
} from "react-native";
import Color from "color";
import { SafeAreaView } from "react-navigation";
import getImgSource from "../../utils/getImgSource.js";
import LinkButton from "../../components/buttons/LinkButton";
// import components
import TouchableItem from "../../components/TouchableItem";
import { Heading6 } from "../../components/text/CustomText";
import MenuCard from "../../components/cards/MenuCard";
import DrinkCard from "../../components/cards/DrinkCard";
import Divider from "../../components/divider/Divider";
import ActionButton from "react-native-action-button";
// import colors
import Colors from "../../theme/colors";
import Icon from "../../components/icon/Icon";
// Menu Config
const IOS = Platform.OS === "ios";
const imgHolder = require("../../assets/img/imgholder.png");
const editIcon = IOS ? "ios-create" : "md-create";
const fabIcon = IOS ? "ios-add" : "md-add";
const homeIcon = IOS ? "ios-restaurant" : "md-restaurant";
const locationIcon = IOS ? "ios-menu" : "md-menu";
const drinkIcon = IOS ? "ios-wine" : "md-wine";
// Menu Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  container: {
    flex: 1
  },
      categoryNameText: {
    fontWeight: "700",
    color: Colors.white
  },
  titleContainer: {
    paddingHorizontal: 16
  },
  titleText: {
    paddingTop: 16,
    paddingBottom: 8,
    fontWeight: "700"
  },
  inputContainer: {
    marginHorizontal: 16,
    paddingBottom: 10
  },categoriesList: {
    paddingTop: 4,
    paddingRight: 16,
    paddingLeft: 8
  },
    chefList: {
    paddingTop: 4,
    paddingRight: 16,
    paddingLeft: 8
  },
  categoryContainer: {
    marginLeft: 8,
    width: 112,
    height: 112
  }, 
    chefContainer: {
    marginLeft: 8,
    width: 350,
    height: 350
  },
  categoryThumbnail: {
    borderRadius: 8,
    width: "100%",
    height: "100%"
  },
  chefThumbnail: {
    borderRadius: 8,
    width: "100%",
    height: "100%"
  },
  categoryImg: {
    borderRadius: 8
  },
  categoryName: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "rgba(128, 128, 128, 0.8)"
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#efefef",
    paddingLeft: 8,
    paddingRight: 51,
    height: 46,
    fontSize: 16,
    textAlignVertical: "center"
  },
  searchButtonContainer: {
    position: "absolute",
    top: 4,
    right: 4,
    borderRadius: 4,
    backgroundColor: Colors.primaryColor,
    overflow: "hidden"
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 38,
    height: 38
  },
  categoriesList: {
    paddingBottom: 10
  },
  cardImg: { borderRadius: 4 },
  card: {
    marginVertical: 6,
    marginHorizontal: 16,
    height: 150,
    resizeMode: "cover"
  },
  cardOverlay: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: Color(Colors.overlayColor).alpha(0.2),
    overflow: "hidden"
  },
  cardContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  cardTitle: {
    padding: 90,
    fontWeight: "500",
    fontSize: 24,
    color: Colors.white,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
});

// SearchA
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
     merchant: 'bartender',
     cart: [
        {
          key: 1,
          imageUri: require("../../assets/img/hot-chicken.jpg"),
          name: "Hot Chicken Sandwich",
          calories: 700,
          price: 10.00,
          quantity: 4,
          feeds: "1",
        },
        {
          key: 2,
          imageUri: require("../../assets/img/lobster-mac.jpg"),
          name: "Lobster Mac & Cheese",
          calories: 400,
          price: 25.00,
          quantity: 2,
          feeds: "1",
        },
            
        ],
        drinks: [
        {
          key: 1,
          title: "Moscow Mule",
          description: "Lime, Vodka, Gin`1",
          date: "01-31-20",
          rating: 0
        },
        {
          key: 2,
          title: "1942 Margarita",
          description: "Made with Don Julio 1942.",
          date: "12-31-19",
          rating: 0
        },
        {
          key: 3,
          title: "Mimomsa Platter",
          description: "4 different flavors of mimosa: orange, grapefruit, passion fruit, & strawberry!",
          date: "12-14-19",
          rating: 0
        },
        ],
    };
  }

  navigateTo = screen => () => {
    const { navigation } = this.props;

    Keyboard.dismiss();

    navigation.navigate(screen);
  };

  keyExtractor = (item, index) => index.toString();

      renderSeparator = () => <Divider />;
    
   renderMenu = ({ item, index }) => (
    <MenuCard
      key={index}
      activeOpacity={0.7}
      imageUri={item.imageUri}
      description={item.description}
      feeds={item.feeds}
      title={item.name}
      price={item.price}
      quantity={item.quantity}
      onPress={this.navigateTo('EditProduct')}
      swipeoutDisabled
    />
  );
    
    renderDrinkItem = ({ item, index }) => (
    <DrinkCard
      key={index}
      activeOpacity={0.7}
      imageUri={item.imageUri}
      description={item.description}
      feeds={item.feeds}
      title={item.title}
      rating={item.rating}
      quantity={item.quantity}
      onPress={this.navigateTo('EditDrink')}
      swipeoutDisabled
    />
  );

     handleFabPress = () => {
    // alert('FAB Pressed');
  };

  renderFabIcon = () => (
    <Icon name={fabIcon} size={24} color={Colors.onAccentColor} />
  );



  render() {
    const { cart, merchant, drinks } = this.state;

    return (
        
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />
{merchant === "chef" && (
        <Fragment>
        <View style={styles.titleContainer}>
          <Heading6 style={styles.titleText}>Menu</Heading6>
        </View>

        
        <View style={styles.container}>
           <FlatList
              data={cart}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderMenu}
              ItemSeparatorComponent={this.renderSeparator}
            />   
        </View>
        <ActionButton
              buttonColor={Colors.accentColor}
              onPress={this.handleFabPress}
              offsetX={16}
              offsetY={16}
              renderIcon={this.renderFabIcon}
              bgColor="rgba(255, 255, 255, 0.56)"
            >
              <ActionButton.Item
                buttonColor={Colors.primaryColor}
                title="Add A Product"
                onPress={this.navigateTo("AddProduct")}
              >
                <Icon name={homeIcon} size={22} color={Colors.onPrimaryColor} />
              </ActionButton.Item>
              <ActionButton.Item
                buttonColor={Colors.tertiaryColor}
                title="Create A New Category"
                onPress={this.navigateTo("AddCategory")}
              >
                <Icon
                  name={locationIcon}
                  size={22}
                  color={Colors.onTertiaryColor}
                />
              </ActionButton.Item>
            </ActionButton>
                </Fragment>
                )}
{merchant === "baker" && (
        <Fragment>
        <View style={styles.titleContainer}>
          <Heading6 style={styles.titleText}>Menu</Heading6>
        </View>

        
        <View style={styles.container}>
           <FlatList
              data={cart}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderMenu}
              ItemSeparatorComponent={this.renderSeparator}
            />   
        </View>
        <ActionButton
              buttonColor={Colors.accentColor}
              onPress={this.handleFabPress}
              offsetX={16}
              offsetY={16}
              renderIcon={this.renderFabIcon}
              bgColor="rgba(255, 255, 255, 0.56)"
            >
              <ActionButton.Item
                buttonColor={Colors.primaryColor}
                title="Add A Product"
                onPress={this.navigateTo("AddProduct")}
              >
                <Icon name={homeIcon} size={22} color={Colors.onPrimaryColor} />
              </ActionButton.Item>
              <ActionButton.Item
                buttonColor={Colors.tertiaryColor}
                title="Create A New Category"
                onPress={this.navigateTo("AddCategory")}
              >
                <Icon
                  name={locationIcon}
                  size={22}
                  color={Colors.onTertiaryColor}
                />
              </ActionButton.Item>
            </ActionButton>
                </Fragment>
                )}

{merchant === "bartender" && (
        <Fragment>
        <View style={styles.titleContainer}>
          <Heading6 style={styles.titleText}>Drink Menu</Heading6>
        </View>

        
        <View style={styles.container}>
           <FlatList
              data={drinks}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderDrinkItem}
              ItemSeparatorComponent={this.renderSeparator}
            />  
        </View>
        <ActionButton
              buttonColor={Colors.accentColor}
              onPress={this.handleFabPress}
              offsetX={16}
              offsetY={16}
              renderIcon={this.renderFabIcon}
              bgColor="rgba(255, 255, 255, 0.56)"
            >
              <ActionButton.Item
                buttonColor={Colors.primaryColor}
                title="Add A Drink"
                onPress={this.navigateTo("AddDrink")}
              >
                <Icon name={drinkIcon} size={22} color={Colors.onPrimaryColor} />
              </ActionButton.Item>
            </ActionButton>
                </Fragment>
                )}
      </SafeAreaView>
                
    );
  }
}
