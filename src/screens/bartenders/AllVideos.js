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
import { Video } from 'expo-av';
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
  },
categoriesList: {
    paddingBottom: 8
  }
});

// SearchResultsB
export default class AllVideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
     videos: [
        {
          key: 1,
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          
        },
        {
          key: 2,
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        },
        {
          key: 3,
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
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
    const { videos } = this.state;

    return (
      <Fragment>
        <SafeAreaView style={styles.topArea} />
        <SafeAreaView style={styles.container}>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
          />

            <ScrollView
                contentContainerStyle={styles.categoriesList}
              >
                {videos.map(video => (
                    <View   key={video.key} style={styles.categoryContainer}>
<Video
  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  useNativeControls
  style={{ width: 415, height: 300 }}
/>
                      
                    </View>
                ))}
        </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}