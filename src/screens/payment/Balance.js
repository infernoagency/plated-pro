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
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import ActionButton from "react-native-action-button";

// import components
import Divider from "../../components/divider/Divider";
import HeaderIconButton from "../../components/navigation/HeaderIconButton";
import Icon from "../../components/icon/Icon";
import {
  Caption,
  Subtitle1,
  Subtitle2
} from "../../components/text/CustomText";
import TouchableItem from "../../components/TouchableItem";

// import colors, fonts
import Colors from "../../theme/colors";

// DeliveryAddressA Config
const IOS = Platform.OS === "ios";
const saveIcon = IOS ? "ios-checkmark" : "md-checkmark";
const dollar = IOS ? "ios-cash" : "md-cash";
const editIcon = IOS ? "ios-create" : "md-create";
const fabIcon = IOS ? "ios-add" : "md-add";
const homeIcon = IOS ? "ios-home" : "md-home";
const locationIcon = IOS ? "ios-pin" : "md-pin";

// DeliveryAddressB Styles
const styles = StyleSheet.create({
  topArea: { flex: 0, backgroundColor: Colors.primaryColor },
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background
  },
  container: {
    flex: 1
  },
  addressList: {
    paddingVertical: 8
  },
  addressCard: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 20
  },
  active: {
    backgroundColor: "#f7f7f7"
  },
  leftAddresContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  addressInfo: { flex: 1, marginRight: 4 },
  caption: {
    paddingVertical: 2,
    color: Colors.accentColor
  },
  radioIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    marginTop: 12,
    width: 24,
    height: 24
  },
  addressText: { paddingVertical: 4 },
  editIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24
  }
});

// DeliveryAddressB Props
type Props = {
  onPress: () => {},
  onPressEdit: () => {},
  type: String,
  date: String,
  number: String,
  status: String,
  active: String
};

// DeliveryAddressB Components
const Transactions = ({
  onPress,
  onPressEdit,
  type,
  date,
  status,
  number,
  active
}: Props) => (
    <View style={[styles.addressCard, active && styles.active]}>
      <View style={styles.leftAddresContainer}>
        <View style={styles.radioIconContainer}>
            <Icon name={dollar} size={21} color={Colors.primaryColor} />
        </View>

        <View style={styles.addressInfo}>
          {type !== "" && (
            <Caption style={styles.caption}>
              {`${type.toUpperCase()}`}
            </Caption>
          )}
{type === "Money Received" && (<Subtitle1 style={styles.addressText}>
            {`+ $${number}`}
          </Subtitle1>)}
{type === "Payout" && (<Subtitle1 style={styles.addressText}>
            {`- $${number}`}
          </Subtitle1>)}
{type === "Payout" && (<Subtitle2>{`Status: ${status} `}</Subtitle2>)}
        </View>
      </View>
 <View style={{ textAlign: 'center', marginTop: 16 }}>
             <Subtitle2>{`${date} `}</Subtitle2>
      </View>
    </View>
);

// DeliveryAddressB
export default class Balance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [
        {
          id: "address1",
          type: "Payout",
          number: "160.43",
          date: "03-20-20",
          status: "Deposited",
          active: false
        },
        {
          id: "address2",
          type: "Payout",
          number: "221.67",
          status: "Pending",
          date: "03-20-20",
          active: false
        },
        {
          id: "address3",
          type: "Money Received",
          number: "212.45",
date: "03-20-20",
          active: false
        }
      ]
    };
  }

  // react navigatin header options
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <HeaderIconButton
        onPress={() => navigation.goBack()}
        name={saveIcon}
        color={Colors.onPrimaryColor}
      />
    )
  });

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  keyExtractor = (item, index) => index.toString();

  renderTransactions = ({ item }) => (
    <Transactions
      key={item.id}
      onPressEdit={this.navigateTo("EditAddress")}
      type={item.type}
      date={item.date}
      status={item.status}
      number={item.number}
      active={item.active}
    />
  );

  renderSeparator = () => <Divider />;

  handleFabPress = () => {
    // alert('FAB Pressed');
  };

  renderFabIcon = () => (
    <Icon name={fabIcon} size={24} color={Colors.onAccentColor} />
  );

  render() {
    const { transactions } = this.state;

    return (
      <Fragment>
        <SafeAreaView style={styles.topArea} />
        <SafeAreaView style={styles.screenContainer}>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
          />

          <View style={styles.container}>
            <FlatList
              data={transactions}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderTransactions}
              ItemSeparatorComponent={this.renderSeparator}
              contentContainerStyle={styles.addressList}
            />

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
                title="Request Payout"
                onPress={this.navigateTo("Payout")}
              >
                <Icon name={dollar} size={22} color={Colors.onPrimaryColor} />
              </ActionButton.Item>
            </ActionButton>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}
