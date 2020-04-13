/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component, Fragment } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, View, ScrollView } from "react-native";

// import components
import Divider from "../../components/divider/Divider";
import ProductCard from "../../components/cards/ProductCard";
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

// import colors
import Colors from "../../theme/colors";

// SearchResultsB Styles
const styles = StyleSheet.create({
  topArea: { flex: 0, backgroundColor: Colors.primaryColor },
  container: {
    flex: 1,
    backgroundColor: Colors.background
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
  productList: {
    paddingVertical: 8
  }
});

// SearchResultsB
export default class Menu extends Component {
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

  onPressRemove = item => () => {
    let { quantity } = item;
    quantity -= 1;

    const { products } = this.state;
    const index = products.indexOf(item);

    if (quantity < 0) {
      return;
    }
    products[index].quantity = quantity;

    this.setState({
      products: [...products]
    });
  };

  onPressAdd = item => () => {
    const { quantity } = item;
    const { products } = this.state;

    const index = products.indexOf(item);
    products[index].quantity = quantity + 1;

    this.setState({
      products: [...products]
    });
  };

  keyExtractor = (item, index) => index.toString();

  renderProductItem = ({ item, index }) => (
    <ProductCard
      onPress={this.navigateTo("Product")}
      onPressRemove={this.onPressRemove(item)}
      onPressAdd={this.onPressAdd(item)}
      key={index}
      activeOpacity={0.7}
      imageUri={item.imageUri}
      title={item.name}
      price={item.price}
      quantity={item.quantity}
      swipeoutDisabled
    />
  );

  renderSeparator = () => <Divider />;

  render() {
    const { products } = this.state;

    return (
      <Fragment>
        <SafeAreaView style={styles.topArea} />
        <SafeAreaView style={styles.container}>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
          />
        <ScrollView>

               <View style={styles.titleContainer}>
              <Heading6 style={styles.titleText}>Meal Prep</Heading6>
            </View>

            <FlatList
              data={products}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderProductItem}
              ItemSeparatorComponent={this.renderSeparator}
            />     
                <View style={styles.titleContainer}>
              <Heading6 style={styles.titleText}>Healthy Meals</Heading6>
            </View>

            <FlatList
              data={products}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderProductItem}
              ItemSeparatorComponent={this.renderSeparator}
            />  
        </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}