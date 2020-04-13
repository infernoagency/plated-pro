/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component, Fragment } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  View
} from "react-native";
import { FontAwesome as FAIcon } from "@expo/vector-icons";
import Color from "color";
import CreditCard from "../../components/creditcard/CreditCard";
import Bank from "../../components/bank/Bank";

// import components
import BottomSheet from "../../components/bottomsheet/BottomSheet";
import Button from "../../components/buttons/Button";
import GradientContainer from "../../components/gradientcontainer/GradientContainer";
import HeaderIconButton from "../../components/navigation/HeaderIconButton";
import Icon from "../../components/icon/Icon";
import { Caption, Heading6, Subtitle1 } from "../../components/text/CustomText";
import TouchableItem from "../../components/TouchableItem";

// import colors
import Colors from "../../theme/colors";

// PaymentMethodA Config
const IOS = Platform.OS === "ios";
const saveIcon = IOS ? "ios-checkmark" : "md-checkmark";
const visaIcon = "cc-visa";
const discoverIcon = "cc-discover";
const mastercardIcon = "cc-mastercard";
const amexIcon = "cc-amex";
const bankIcon = "bank";
const moreIcon = IOS ? "ios-more" : "md-more";
const editIcon = IOS ? "ios-create" : "md-create";
const savePaymentIcon = IOS ? "ios-save" : "md-save";
const removeIcon = IOS ? "ios-remove-circle" : "md-remove-circle";
const BOTTOM_SHEET_PB = IOS ? 16 : 0;


// PaymentMethodA Styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainerStyle: {
    paddingVertical: 8
  },
  cardContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: "100%",
    height: 228
  },
  creditCard: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 8
  },
  cardNumberContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    maxWidth: 286
  },
  editButtonContainer: {
    borderRadius: 16,
    backgroundColor: Colors.white
  },
  editButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32
  },
  whiteText: {
    color: Colors.white
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  caption: {
    color: Color(Colors.white).alpha(0.8)
  },
  buttonContainer: {
    padding: 16
  },
    buttonContainer1: {
    paddingRight: 16,
        paddingTop: 16,
    paddingLeft: 16,
    marginBottom: 6
  },
  bottomSheetItem: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    height: 64
  },
  bottomSheetCaption: { paddingVertical: 2 },
  bottomSheetAction: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    width: "100%",
    height: 56
  },
  bottomSheetIconContainer: {
    marginRight: 32,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center"
  }
});

// PaymentMethodA
export default class PaymentMethodA extends Component {
  constructor(props) {
    super(props);
    this.state = {
       cards: [
           {
               key: 1,
               colors: ["#784BA0", "#2B86C5"],
               brand: "visa",
               last4Digits: "3456",
               cardHolder: "Kristin Evans",
               expiry: "09 / 21",
               primary: true
               
           },
           {
               key: 2,
               colors: ["#0D324D", "#7F5A83"],
               brand: "discover",
               last4Digits: "8673",
               cardHolder: "Kristin Evans",
               expiry: "02 / 24",
               primary: false
           },
           {
               key: 3,
               colors: ["#fc7878", "#a6c1ff"],
               brand: "mastercard",
               last4Digits: "9431",
               cardHolder: "Kristin Evans",
               expiry: "07 / 23",
               primary: false
           },
           {
               key: 4,
               colors: ["#f5d963", "#fe9c98"],
               brand: "amex",
               last4Digits: "9431",
               cardHolder: "Kristin Evans",
               expiry: "07 / 23",
               primary: false
           }
       ],
        banks: [
            {
              key: 1,
               colors: ["#784BA0", "#2B86C5"],
               last4Digits: "3456",
               cardHolder: "Kristin Evans" ,
               primary: false
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
navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  openEditShet = () => {
    this.editSheet.open();
  };
    
    renderCard = ({ item, index }) => (
           <CreditCard
            key={index}
            colors={item.colors}
            brand={item.brand}
            last4Digits={item.last4Digits}
            cardHolder={item.cardHolder}
            expiry={item.expiry}
            onPress={() => this.editSheet.open()}
                />
           );
renderBank = ({ item, index }) => (
           <Bank
            key={index}
            colors={item.colors}
            last4Digits={item.last4Digits}
            cardHolder={item.cardHolder}
                />
           );

  render() {
      const { 
         cards, 
         banks
    
            } = this.state;
    return (
      <Fragment>
        <SafeAreaView style={styles.topArea} />
        <SafeAreaView style={styles.container}>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
          />

          <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <FlatList
              data={cards}
              renderItem={this.renderCard}
              keyExtractor={this.keyExtractor}
              contentContainerStyle={styles.productsContainer}
            />
       
          </ScrollView>

          <View style={styles.buttonContainer1}>
            <Button
              onPress={this.navigateTo("AddCreditCard")}
              title={"Add A New Card".toUpperCase()}
              height={48}
              rounded
              color={Colors.accentColor}
            />
          </View>
            <View style={styles.buttonContainer}>
            <Button
              onPress={this.navigateTo("AddBank")}
              title={"Add A New bank Account".toUpperCase()}
              height={48}
              rounded
              color={Colors.accentColor}
            />
          </View>
          <BottomSheet
            ref={ref => {
              this.editSheet = ref;
            }}
            // FIX: closeOnSwipeDown need height to work properly
            height={232 + BOTTOM_SHEET_PB} // height of BottomSheet = 64 + 3 * 56 + 16
            statusBarColor={Colors.primaryColorDark}
          >

            <TouchableItem>
              <View style={styles.bottomSheetAction}>
                <View style={styles.bottomSheetIconContainer}>
                  <Icon name={editIcon} size={22} color={Colors.accentColor} />
                </View>
                <Subtitle1>Edit card details</Subtitle1>
              </View>
            </TouchableItem>

            <TouchableItem>
              <View style={styles.bottomSheetAction}>
                <View style={styles.bottomSheetIconContainer}>
                  <Icon
                    name={savePaymentIcon}
                    size={22}
                    color={Colors.accentColor}
                  />
                </View>
                <Subtitle1>Save for checkouts</Subtitle1>
              </View>
            </TouchableItem>

            <TouchableItem>
              <View style={styles.bottomSheetAction}>
                <View style={styles.bottomSheetIconContainer}>
                  <Icon
                    name={removeIcon}
                    size={22}
                    color={Colors.accentColor}
                  />
                </View>
                <Subtitle1>Remove card</Subtitle1>
              </View>
            </TouchableItem>
          </BottomSheet>
        </SafeAreaView>
      </Fragment>
    );
  }
}
