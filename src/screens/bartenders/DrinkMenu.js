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
import DrinkCard from "../../components/cards/DrinkCard";

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
export default class DrinkMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    const { drinks } = this.state;
    const index = products.indexOf(item);

    if (quantity < 0) {
      return;
    }
    drinks[index].quantity = quantity;

    this.setState({
      drinks: [...drinks]
    });
  };

  onPressAdd = item => () => {
    const { quantity } = item;
    const { drinks } = this.state;

    const index = drinks.indexOf(item);
    drinks[index].quantity = quantity + 1;

    this.setState({
      drinks: [...drinks]
    });
  };

  keyExtractor = (item, index) => index.toString();

  renderDrinkItem = ({ item, index }) => (
    <DrinkCard
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
    const { drinks } = this.state;

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
              <Heading6 style={styles.titleText}>Cocktails</Heading6>
            </View>

            <FlatList
              data={drinks}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderDrinkItem}
              ItemSeparatorComponent={this.renderSeparator}
            />     
        </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}