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
import Message from "../../components/cards/Message";
import { Heading6, SmallText } from "../../components/text/CustomText";
import { GiftedChat } from "react-native-gifted-chat";
// import colors
import Colors from "../../theme/colors";

// FavoritesA Config
const EMPTY_STATE_ICON = "message";

// FavoritesB Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
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
export default class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
     messages: [
        {
        _id: 1,
        text: "Fuck 12",
        createdAt: new Date(),
         user: {
                _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
                }
        }
    ]
    };
  }

 onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  keyExtractor = item => item.key.toString();
  // base on list item dimensions
  // marginLeft={116} // 116 = 100 + 16
  renderSeparator = () => <Divider type="inset" marginLeft={0} />;

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="light-content"
        />
            <Fragment>
            <GiftedChat 
             messages={this.state.messages}
             onSend={messages => this.onSend(messages)}
             user={{
             _id: 1,
            }}
        />
            </Fragment>
      </SafeAreaView>
    );
  }
}
