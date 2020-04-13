/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component, Fragment } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";

// import components
import Divider from "../../components/divider/Divider";
import ReviewCard from "../../components/cards/ReviewCard";

// import colors
import Colors from "../../theme/colors";

// SearchResultsB Styles
const styles = StyleSheet.create({
  topArea: { flex: 0, backgroundColor: Colors.primaryColor },
  container: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  productList: {
    paddingVertical: 8
  }
});

// SearchResultsB
export default class SearchResultsB extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  keyExtractor = (item, index) => index.toString();

  renderReviewItem = ({ item, index }) => (
    <ReviewCard
      key={index}
      activeOpacity={0.7}
      imageUri={item.imageUri}
      description={item.description}
      calories={item.calories}
      title={item.title}
      rating={item.rating}
      quantity={item.quantity}
      price={item.price}
      quantity={item.quantity}
      swipeoutDisabled
    />
  );

  renderSeparator = () => <Divider />;

  render() {
    const { reviews } = this.state;

    return (
      <Fragment>
        <SafeAreaView style={styles.topArea} />
        <SafeAreaView style={styles.container}>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
          />

          <FlatList
            data={reviews}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderReviewItem}
            ItemSeparatorComponent={this.renderSeparator}
            contentContainerStyle={styles.productList}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}