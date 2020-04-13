/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  View
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { FontAwesome as FAIcon } from "@expo/vector-icons";
// import components
import Avatar from "../../components/avatar/Avatar";
import Divider from "../../components/divider/Divider";
import Icon from "../../components/icon/Icon";
import {
  Heading6,
  Subtitle1,
  Subtitle2
} from "../../components/text/CustomText";
import TouchableItem from "../../components/TouchableItem";

// import colors
import Colors from "../../theme/colors";

// SettingsB Config
const IOS = Platform.OS === "ios";


const addressIcon = IOS ? "ios-pin" : "md-pin";
const balanceIcon = IOS ? "ios-cash" : "md-cash";
const paymentIcon = IOS ? "ios-card" : "md-card";
const ordersIcon = IOS ? "ios-list" : "md-list";
const dollar = "dollar"

const aboutIcon = IOS ? "ios-finger-print" : "md-finger-print";
const updateIcon = IOS ? "ios-cloud-download" : "md-cloud-download";
const privacyIcon = IOS
  ? "ios-information-circle-outline"
  : "md-information-circle-outline";
const termsIcon = IOS ? "ios-paper" : "md-paper";

const addIcon = IOS ? "ios-add-circle-outline" : "md-add-circle-outline";
const logoutIcon = IOS ? "ios-exit" : "md-exit";

// SettingsB Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  contentContainerStyle: {
    paddingBottom: 16
  },
  titleContainer: {
    paddingHorizontal: 16
  },
  titleText: {
    paddingTop: 16,
    paddingBottom: 16,
    fontWeight: "700"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16
  },
  profileContainer: {
    // height: 88
    paddingVertical: 16
  },
  leftSide: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  profileInfo: {
    paddingLeft: 16
  },
  name: {
    fontWeight: "500"
  },
  email: {
    paddingVertical: 2
  },
  sectionHeader: {
    paddingTop: 16,
    paddingHorizontal: 16
  },
  setting: {
    height: 48
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    width: 24,
    height: 24
  }
});

// SectionHeader Props
type SectionHeadreProps = {
  title: string
};

// Setting Props
type SettingProps = {
  icon: string,
  faicon: string,
  setting: string,
  type: string,
  onPress: () => {}
};

// SettingsB Components
const SectionHeader = ({ title }: SectionHeadreProps) => (
  <View style={styles.sectionHeader}>
    <Subtitle1>{title}</Subtitle1>
  </View>
);

const Setting = ({ onPress, icon, setting, type }: SettingProps) => (
  <TouchableItem onPress={onPress}>
    <View style={[styles.row, styles.setting]}>
      <View style={styles.leftSide}>
        {icon !== undefined && (
          <View style={styles.iconContainer}>
            <Icon
              name={icon}
              size={20}
              color={
                type === "logout" ? Colors.secondaryColor : Colors.primaryColor
              }
            />
          </View>
        )}
        <Subtitle2
          style={type === "logout" && { color: Colors.secondaryColor }}
        >
          {setting}
        </Subtitle2>
      </View>

      {type !== "logout" && (
        <Icon name="ios-arrow-forward" size={16} color="rgba(0, 0, 0, 0.16)" />
      )}
    </View>
  </TouchableItem>
);

const Setting2 = ({ onPress, faicon, setting, type }: SettingProps) => (
  <TouchableItem onPress={onPress}>
    <View style={[styles.row, styles.setting]}>
      <View style={styles.leftSide}>
        {faicon !== undefined && (
          <View style={styles.iconContainer}>
               <FAIcon
              name={faicon}
              size={20}
              color={
                Colors.primaryColor
              }
            />
          </View>
        )}
        <Subtitle2
          style={type === "logout" && { color: Colors.secondaryColor }}
        >
          {setting}
        </Subtitle2>
      </View>

      {type !== "logout" && (
        <Icon name="ios-arrow-forward" size={16} color="rgba(0, 0, 0, 0.16)" />
      )}
    </View>
  </TouchableItem>
);

// SetingsB
export default class SettingsB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: "2,065.89",
        merchant: "bartender"
    };
  }

  navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };


  render() {
    const { balance, merchant } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.titleContainer}>
            <Heading6 style={styles.titleText}>Settings</Heading6>
          </View>

          <TouchableItem useForeground onPress={this.navigateTo("EditProfile")}>
            <View style={[styles.row, styles.profileContainer]}>
              <View style={styles.leftSide}>
                <Avatar
                  imageUri={require("../../assets/img/chef2.jpg")}
                  size={60}
                  rounded
                />
                <View style={styles.profileInfo}>
                  <Subtitle1 style={styles.name}>James Flor</Subtitle1>
                  <Subtitle2 style={styles.email}>
                    james@platedapp.co
                  </Subtitle2>
                </View>
              </View>
            </View>
          </TouchableItem>

          <Divider />
<SectionHeader title="Payments" />
          <Setting
            onPress={this.navigateTo("Balance")}
            icon={balanceIcon}
            setting={`Balance: $${balance}`}
          />
<Setting
            onPress={this.navigateTo("PaymentMethod")}
            icon={paymentIcon}
            setting="Add Your Payout Method"
          />
{merchant === 'bartender' &&
<Setting2
            onPress={this.navigateTo("HourlyRate")}
            faicon={dollar}
            setting="Your Rates"
          />}
          

          <SectionHeader title="Address" />
          <Setting
            onPress={this.navigateTo("DeliveryAddress")}
            icon={addressIcon}
            setting="Set Business Address"
          />
          

          <SectionHeader title="Bookings" />
          <Setting
            onPress={this.navigateTo("Orders")}
            icon={ordersIcon}
            setting="Previous Bookings"
          />

          <SectionHeader title="About" />
          <Setting icon={updateIcon} setting="App Updates" />
          {/* <Setting icon={privacyIcon} setting="Privacy Policy" /> */}
          <Setting
            onPress={this.navigateTo("TermsConditions")}
            icon={termsIcon}
            setting="Terms of Use"
          />
          
          <Setting
            onPress={this.navigateTo("Welcome")}
            icon={logoutIcon}
            setting="Log Out"
            type="logout"
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
