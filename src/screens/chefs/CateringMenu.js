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
     catering: [
        {
          key: 1,
          title: "Hot Chicken Sandwich Platter",
          imageUri: require("../../assets/img/hot-chicken.jpg"),
          feeds: "10-12",
          price: 89.99
        },
        {
          key: 2,
          title: "Fried Chicken Dinner",
          imageUri: require("../../assets/img/fried-chicken.jpg"),
          feeds: "10-12",
          price: 89.99,
        },
        {
          key: 3,
          title: "Seafood Special",
          imageUri: require("../../assets/img/seafood.jpg"),
          price: 89.99,
          feeds: "10-12"
        },
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

    const { catering } = this.state;
    const index = products.indexOf(item);

    if (quantity < 0) {
      return;
    }
    catering[index].quantity = quantity;

    this.setState({
      catering: [...catering]
    });
  };

  onPressAdd = item => () => {
    const { quantity } = item;
    const { catering } = this.state;

    const index = products.indexOf(item);
    products[index].quantity = quantity + 1;

    this.setState({
      catering: [...catering]
    });
  };

  keyExtractor = (item, index) => index.toString();

  renderCateringItem = ({ item, index }) => (
    <CateringCard
      onPress={this.navigateTo("Product")}
      onPressRemove={this.onPressRemove(item)}
      onPressAdd={this.onPressAdd(item)}
      key={index}
      activeOpacity={0.7}
      imageUri={item.imageUri}
      description={item.description}
      feeds={item.feeds}
      title={item.title}
      rating={item.rating}
      quantity={item.quantity}
      swipeoutDisabled
    />
  );

  renderSeparator = () => <Divider />;

  render() {
    const { catering } = this.state;

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
              <Heading6 style={styles.titleText}>Catering Packages</Heading6>
            </View>

            <FlatList
              data={catering}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderCateringItem}
              ItemSeparatorComponent={this.renderSeparator}
            />     
        </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}