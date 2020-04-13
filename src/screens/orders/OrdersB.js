/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import node modules
import React, { Component, Fragment } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from "react-native";

// import components
import OrderCompletedCard from "../../components/cards/OrderCompletedCard";

// import colors
import Colors from "../../theme/colors";

// OrdersB Styles
const styles = StyleSheet.create({
  topArea: { flex: 0, backgroundColor: Colors.primaryColor },
  container: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  productsContainer: {
    paddingVertical: 8
  }
});

// OrdersB
export default class OrdersB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [
        {
          orderNumber: "09",
          merchant: "Baker",
          orderDate: "05 July, 2019",
          orderStatus: "delivered",
          orderItems: [
            {
              name: "Custom Lemon Cake",
              price: 85.99
            }
          ]
        },
          {
          orderNumber: "08",
          merchant: "Baker",
          orderDate: "05 July, 2019",
          orderStatus: "declined",
          orderItems: [
            {
              name: "Custom Lemon Cake",
              price: 85.99
            }
          ]
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

  keyExtractor = item => item.orderNumber.toString();

  renderItem = ({ item, index }) => (
    <OrderCompletedCard
      key={index}
      activeOpacity={0.8}
      orderNumber={item.orderNumber}
      orderDate={item.orderDate}
      orderItems={item.orderItems}
      merchant={item.merchant}
      orderStatus={item.orderStatus}
      onPress={this.navigateTo("Product")}
    />
  );

  render() {
    const { orders } = this.state;

    return (
      <Fragment>
        <SafeAreaView style={styles.topArea} />
        <SafeAreaView style={styles.container}>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
          />

          <View style={styles.container}>
            <FlatList
              data={orders}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              contentContainerStyle={styles.productsContainer}
            />
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}
