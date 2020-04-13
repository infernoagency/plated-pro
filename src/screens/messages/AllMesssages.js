/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import node modules
import React, { Component, Fragment } from "react";
import {
  StatusBar,
  FlatList,
  StyleSheet,
  View
} from "react-native";
import remove from "lodash/remove";
import { SafeAreaView } from "react-navigation";

// import components
import Divider from "../../components/divider/Divider";
import EmptyState from "../../components/emptystate/EmptyState";
import MessageCard from "../../components/cards/MessageCard";
import { Heading6, SmallText } from "../../components/text/CustomText";

// import colors
import Colors from "../../theme/colors";

// FavoritesA Config
const EMPTY_STATE_ICON = "message";

// FavoritesB Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  titleContainer: {
    paddingHorizontal: 16
  },
  titleText: {
    paddingVertical: 16,
    fontWeight: "700"
  },
  bottomTextInfo: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16
  }
});

// FavoritesB
export default class AllMesssages extends Component {
  constructor(props) {
    super(props);

    this.state = {
     messages: [
        {
          key: 1,
          imageUri: require("../../assets/img/profile.jpg"),
          name: "Kristin Evans",
          message: "Hey I was wondering if you're available on March 13th at 3pm? ",
          date: '03-23-2020'
        },
        {
          key: 2,
          imageUri: require("../../assets/img/profile2.jpg"),
          name: "Jason Forester",
          message: "Thanks for everything!! Food was amazing.",
          date: '03-21-2020'
        },
        {
          key: 3,
          imageUri: require("../../assets/img/profile3.jpg"),
          name: "Stacy Parker",
          message: "Do you offer meal prep? ",
          date: '03-20-2020'
        }
      ]
    };
  }

  navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  keyExtractor = item => item.key.toString();

  renderMessageItem = ({ item }) => (
    <MessageCard
      key={item.key}
      onPress={this.navigateTo("Messages")}
      activeOpacity={0.7}
      imageUri={item.imageUri}
      name={item.name}
      message={item.message}
      date={item.date}
      swipeoutDisabled={true}
    />
  );

  // base on list item dimensions
  // marginLeft={116} // 116 = 100 + 16
  renderSeparator = () => <Divider type="inset" marginLeft={0} />;

  render() {
    const { messages } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <View style={styles.titleContainer}>
          <Heading6 style={styles.titleText}>Messages</Heading6>
        </View>

        {
          messages.length === 0 ? (
            <EmptyState
              showIcon
              iconName={EMPTY_STATE_ICON}
              title="You have no messages"
              message="Send a message to learn more about a chef, bartender or baker."
            />
          ) : (
            <Fragment>
              <FlatList
                data={messages}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderMessageItem}
                ItemSeparatorComponent={this.renderSeparator}
              />
            </Fragment>
          )
        }
      </SafeAreaView>
    );
  }
}
