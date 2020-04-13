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
  TextInput,
  StyleSheet,
  View
} from "react-native";
import { FontAwesome as FAIcon } from "@expo/vector-icons";
import Color from "color";
import LinkButton from "../../components/buttons/LinkButton";
// import components
import BottomSheet from "../../components/bottomsheet/BottomSheet";
import Button from "../../components/buttons/Button";
import CreditCard from "../../components/creditcard/CreditCard";
import { Caption, Heading6, Subtitle1, Subtitle2 } from "../../components/text/CustomText";

// import colors
import Colors from "../../theme/colors";


// PaymentMethodA Styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainerStyle: {
    paddingVertical: 8
  },
      actionButton: {
    color: Colors.accentColor,
    textAlign: "center"
  },
      form: {
    paddingVertical: 24,
    paddingHorizontal: 20
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
           boxOutline: {
    borderWidth: 1,
    borderColor: "#aaa",
    paddingLeft: 8,
    paddingRight: 8,
    paddingVertical: 10,
    marginRight: 8,
    marginTop: 16,
    marginBottom: 16,
    height: 40,
    width: '100%',
    fontSize: 16,
    textAlign: "center"
  },
    textInput: {
    borderWidth: 1,
    borderColor: "#aaa",
    paddingLeft: 8,
    paddingRight: 8,
    paddingVertical: 10,
    marginRight: 8,
    marginTop: 16,
    marginBottom: 16,
    height: 40,
    width: '100%',
    fontSize: 16,
    textAlign: "left"
  },
    textInput1: {
    borderWidth: 1,
    borderColor: "#aaa",
    paddingLeft: 8,
    paddingRight: 8,
    paddingVertical: 10,
    marginRight: 8,
    marginTop: 16,
    marginBottom: 16,
    height: 150,
    width: '100%',
    fontSize: 16,
    textAlign: "left"
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
export default class HourlyRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hourlyRate: "24.00",
        tipJar: "50.00",
        drinkMenu: "40.00"
        
    };
  }


navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  render() {
    return (
      <Fragment>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
          />
                <View style={styles.form}>
        <Subtitle1 style={{ textAlign: 'center', marginBottom: 20 }}>
                    Set an the hourly wage you would like to make when people are looking to book you for events and parties. You can also add fees for no tip jar and if you are requested to create a custom drink menu. All alcohol will be paid for by the customer.
                    </Subtitle1>
         <Subtitle2 style={styles.overline}>
                   Hourly Rate:
                  </Subtitle2>
        <TextInput
            placeholder={this.state.hourlyRate}
            returnKeyType="Next"
            keyboardType='numeric'
            maxLength={12}
            style={styles.textInput}
          />  
        <Subtitle2 style={styles.overline}>
                   No Tip Jar Fee:
                  </Subtitle2>
        <TextInput
            placeholder={this.state.tipJar}
            returnKeyType="Next"
            keyboardType='numeric'
            maxLength={12}
            style={styles.textInput}
          />  
        <Subtitle2 style={styles.overline}>
                   Custom Drink Menu Creation:
                  </Subtitle2>
        <TextInput
            placeholder={this.state.drinkMenu}
            keyboardType='numeric'
            maxLength={12}
            style={styles.textInput}
          />  
                </View>

          <View style={styles.buttonContainer}>
                 <Button
                  title="Save"
                  rounded
                />
          </View>
      </Fragment>
    );
  }
}
