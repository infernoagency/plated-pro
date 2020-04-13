/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Text
} from "react-native";
import Color from "color";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Swiper from "react-native-swiper";
import ModalDropdown from 'react-native-modal-dropdown';
import DatePicker from '../../components/date/Date'
// import components
import Button from "../../components/buttons/Button";
import CreditCard from "../../components/creditcard/CreditCard";
import InfoModal from "../../components/modals/InfoModal";
import LinkButton from "../../components/buttons/LinkButton";
import {
  Caption,
  Subtitle1,
  Subtitle2,
  Heading6
} from "../../components/text/CustomText";
import UnderlineTextInput from "../../components/textinputs/UnderlineTextInput";

// import colors, layout
import Colors from "../../theme/colors";
import Layout from "../../theme/layout";

import Data from "../../data/Times";

// Checkout Config
const INPUT_FOCUSED_BORDER_COLOR = Colors.primaryColor;
const checkmarkIcon =
  Platform.OS === "ios"
    ? "ios-checkmark-circle-outline"
    : "md-checkmark-circle-outline";

// CheckoutA Styles
const styles = StyleSheet.create({
  pt16: { paddingTop: 16 },
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background
  },
  container: {
    flex: 1
  },
  headerContainer: {
    backgroundColor: Colors.primaryColor,
    elevation: 1,
    ...Platform.select({
      ios: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#a7a7aa"
      }
    })
  },
    dropdown: {
    marginTop: 8,
    marginBottom: 18,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderColor: Colors.primaryColor,
    width: '100%',
    height: 20
  },
  stepIndicator: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 48
  },
  stepContainer: {
    width: 75,
    justifyContent: "center",
    alignItems: "center"
  },
  stepText: {
    color: Color(Colors.onPrimaryColor).alpha(0.64)
  },
  activeStepText: {
    color: Colors.onPrimaryColor
  },
  line: {
    width: 48,
    height: 1,
    backgroundColor: Color(Colors.onPrimaryColor).alpha(0.32)
  },
  activeLine: {
    backgroundColor: Colors.onPrimaryColor
  },
  swiperContainer: {
    flex: 1,
    ...Platform.select({
      android: {
        minHeight: Layout.SCREEN_HEIGHT - 3*56
      }
    }),
      
  },
  formContainer: {
    flex: 1
  },
  form: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  overline: {
    color: Color(Colors.secondaryText).alpha(0.6)
  },
  inputContainerStyle: {
    marginTop: 0,
    marginBottom: 18,
    paddingVertical: 0,
    paddingHorizontal: 0
  },
  actionButton: {
    color: Colors.accentColor,
    textAlign: "center",
    marginBottom:20
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: Colors.background
  },
  linkButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16
  },
  linkButton: {
    color: Colors.black
  },
  orderInfo: {
    paddingVertical: 8
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  amount: {
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 24
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
    height: 200,
    width: '100%',
    fontSize: 16,
    textAlign: "left"
  },
});

// CheckoutA
export default class BartenderBooking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      address: "123 Main St",
      address2: "",
      startDate: "03-21-20",
      startTime: "2:00 PM", 
      endDate: "03-22-20", 
      endTime: "12:00 AM", 
      totalHours: '10', 
      totalGuests: '45', 
      eventType: "Birthday", 
      tipJar: "Yes", 
      drinkMenu: "Yes",
      menuFee: "20",
      tipFee: "50",
      guests: "", 
      hours: "",
      city: "Mesa",
      zip: "AZ",
      addressFocused: false,
      cityFocused: false,
      zipFocused: false,
      infoModalVisible: false,
      guestsFocused: false, 
      hoursFocused: false,
      address2Focused: false,
      date:""
    };
        
  }
    
  navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  addressChange = text => {
    this.setState({
      address: text
    });
  };

  addressFocus = () => {
    this.setState({
      addressFocused: true,
      cityFocused: false,
      zipFocused: false
    });
  };
    address2Change = text => {
    this.setState({
      address2: text
    });
  };

  address2Focus = () => {
    this.setState({
      address2Focused: true,
      cityFocused: false,
      zipFocused: false
    });
  };

  cityChange = text => {
    this.setState({
      city: text
    });
  };

  cityFocus = () => {
    this.setState({
      addressFocused: false,
      cityFocused: true,
      zipFocused: false
    });
  };

    hoursChange = text => {
    this.setState({
      hours: text
    });
  };

  hoursFocus = () => {
    this.setState({
      addressFocused: false,
     hoursFocused: true,
      zipFocused: false
    });
  };
    
    guestsChange = text => {
    this.setState({
      guests: text
    });
  };

  guestsFocus = () => {
    this.setState({
      addressFocused: false,
      guestsFocused: true,
      zipFocused: false
    });
  };

  zipChange = text => {
    this.setState({
      zip: text
    });
  };

  zipFocus = () => {
    this.setState({
      addressFocused: false,
      cityFocused: false,
      zipFocused: true
    });
  };

  focusOn = nextFiled => () => {
    if (nextFiled) {
      nextFiled.focus();
    }
  };

  onIndexChanged = index => {
    this.setState({
      activeIndex: index
    });
  };

  nextStep = () => {
    this.swiper.scrollBy(1, true);
  };

  previousStep = () => {
    this.swiper.scrollBy(-1, true);
  };

  showInfoModal = value => () => {
    this.setState({
      infoModalVisible: value
    });
  };

  closeInfoModal = value => () => {
    this.setState(
      {
        infoModalVisible: value
      },
      () => {
        this.goBack();
      }
    );
  };

  render() {
    const {
      activeIndex,
      address,
      addressFocused,
      address2,
      address2Focused,
      city,
      cityFocused,
      guests,
      guestsFocused,
      hours,
      hoursFocused,
      zip,
      menuFee,
      zipFocused,
      infoModalVisible
    } = this.state;
     
    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColor}
          barStyle="light-content"
        />

        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.stepIndicator}>
              <View style={styles.stepContainer}>
                <Subtitle2
                  style={[
                    styles.stepText,
                    activeIndex === 0 && styles.activeStepText
                  ]}
                >
                  Information
                </Subtitle2>
              </View>
              <View
                style={[styles.line, activeIndex > 0 && styles.activeLine]}
              />

              <View style={styles.stepContainer}>
                <Subtitle2
                  style={[
                    styles.stepText,
                    activeIndex === 1 && styles.activeStepText
                  ]}
                >
                  Address
                </Subtitle2>
              </View>

              <View
                style={[styles.line, activeIndex > 1 && styles.activeLine]}
              />

              <View style={styles.stepContainer}>
                <Subtitle2
                  style={[
                    styles.stepText,
                    activeIndex === 2 && styles.activeStepText
                  ]}
                >
                  Deposit
                </Subtitle2>
              </View>
            </View>
          </View>

          <View style={styles.swiperContainer}>
            <Swiper
              ref={r => {
                this.swiper = r;
              }}
              onIndexChanged={this.onIndexChanged}
              loop={false}
              showsPagination={false}
              // scrollEnabled={false}
            >
              {/* STEP 1 */}
              <KeyboardAwareScrollView
                contentContainerStyle={styles.formContainer}
                enableOnAndroid
              >
                <View style={styles.form}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
                  <Subtitle2 style={styles.overline}>Start Date</Subtitle2>
        <DatePicker
    />

                  <Subtitle2 style={styles.overline}>Arrival Time</Subtitle2>
                  <ModalDropdown dropdownTextStyle={{size: 14}} dropdownStyle={{width: '85%'}} textStyle={{ color: Colors.primaryColor}} style={styles.boxOutline} options={[
        '12:00 AM', 
        '12:30 AM', 
        '1:00 AM',
        '1:30 AM', 
        '2:00 AM',
        '2:30 AM',
        '3:00 AM',
        '3:30 AM', 
        '4:00 AM',
        '4:30 AM',
        '5:00 AM',
        '5:30 AM',
        '6:00 AM',
        '6:30 AM', 
        '7:00 AM',
        '7:30 AM',
        '8:00 AM',
        '9:30 AM', 
        '10:00 AM',
        '10:30 AM',
        '11:00 AM',
        '11:30 AM',
        '12:00 PM',
        '12:30 PM',
        '1:00 PM',
        '1:30 PM', 
        '2:00 PM',
        '2:30 PM',
        '3:00 PM',
        '3:30 PM', 
        '4:00 PM',
        '4:30 PM',
        '5:00 PM',
        '5:30 PM',
        '6:00 PM',
        '6:30 PM', 
        '7:00 PM',
        '7:30 PM',
        '8:00 PM',
        '9:30 PM', 
        '10:00 PM',
        '10:30 PM',
        '11:00 PM',
        '11:30 PM'
        ]}
        />
<Subtitle2 style={styles.overline}>End Date</Subtitle2>
        <DatePicker
    />
            <Subtitle2 style={styles.overline}>End Time</Subtitle2>
                  <ModalDropdown dropdownTextStyle={{size: 14}} dropdownStyle={{width: '85%'}} textStyle={{ color: Colors.primaryColor}} style={styles.boxOutline} options={[
        '12:00 AM', 
        '12:30 AM', 
        '1:00 AM',
        '1:30 AM', 
        '2:00 AM',
        '2:30 AM',
        '3:00 AM',
        '3:30 AM', 
        '4:00 AM',
        '4:30 AM',
        '5:00 AM',
        '5:30 AM',
        '6:00 AM',
        '6:30 AM', 
        '7:00 AM',
        '7:30 AM',
        '8:00 AM',
        '9:30 AM', 
        '10:00 AM',
        '10:30 AM',
        '11:00 AM',
        '11:30 AM',
        '12:00 PM',
        '12:30 PM',
        '1:00 PM',
        '1:30 PM', 
        '2:00 PM',
        '2:30 PM',
        '3:00 PM',
        '3:30 PM', 
        '4:00 PM',
        '4:30 PM',
        '5:00 PM',
        '5:30 PM',
        '6:00 PM',
        '6:30 PM', 
        '7:00 PM',
        '7:30 PM',
        '8:00 PM',
        '9:30 PM', 
        '10:00 PM',
        '10:30 PM',
        '11:00 PM',
        '11:30 PM'
        ]}
        />
          <Subtitle2 style={styles.overline}>Total Number of Hours</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.hours = r;
                    }}
                    value={hours}
                    onChangeText={this.hoursChange}
                    onFocus={this.hoursFocus}
                    inputFocused={hoursFocused}
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />

                  <Subtitle2 style={styles.overline}>Total Number of Guests</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.guests = r;
                    }}
                    value={guests}
                    onChangeText={this.guestsChange}
                    onFocus={this.guestsFocus}
                    inputFocused={guestsFocused}
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
       
                  
                  <Subtitle2 style={styles.overline}>Type of Event</Subtitle2>
                  <ModalDropdown dropdownStyle={{width: '85%'}} textStyle={{ color: Colors.primaryColor}} style={styles.boxOutline} options={[
        'Birthday Party',
        'Work Event',
        'Holiday Party',
        'Wedding',
        'Other'                                                                                                                                
        ]}
        />
            <Subtitle2 style={styles.overline}>Tip Jar?</Subtitle2>
            <Caption style={styles.overline}>This bartender charges a ${this.state.tipFee} fee for "no" tip jar.</Caption>
                  <ModalDropdown dropdownStyle={{width: '85%'}} textStyle={{ color: Colors.primaryColor}} style={styles.boxOutline} options={[
        'Yes',
        'No'
        ]}
        />
        <Subtitle2 style={styles.overline}>Would you like your bartender to create a drink menu?</Subtitle2>
                  <ModalDropdown dropdownStyle={{width: '85%'}} textStyle={{ color: Colors.primaryColor}} style={styles.boxOutline} options={[
        `Yes +$${this.state.menuFee}`,
        'No'
        ]}
        />

        <Subtitle2 style={styles.overline}>Extra Details?</Subtitle2>
            <TextInput
            placeholder=""
            returnKeyType="Next"
            maxLength={600}
            multiline={true}
            style={styles.textInput}
          />
</ScrollView>
                </View>
              </KeyboardAwareScrollView>

              {/* STEP 2 */}
              <View>
                <View style={styles.form}>
                  <Subtitle2 style={styles.overline}>Address</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.address = r;
                    }}
                    value={address}
                    onChangeText={this.addressChange}
                    onFocus={this.addressFocus}
                    inputFocused={addressFocused}
                    onSubmitEditing={this.focusOn(this.address2)}
                    returnKeyType="next"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                
                      <Subtitle2 style={styles.overline}>Address Line 2</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.address2 = r;
                    }}
                    value={address2}
                    onChangeText={this.address2Change}
                    onFocus={this.address2Focus}
                    inputFocused={address2Focused}
                    onSubmitEditing={this.focusOn(this.city)}
                    returnKeyType="next"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />

                  <Subtitle2 style={styles.overline}>City</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.city = r;
                    }}
                    value={city}
                    onChangeText={this.cityChange}
                    onFocus={this.cityFocus}
                    inputFocused={cityFocused}
                    onSubmitEditing={this.focusOn(this.zip)}
                    returnKeyType="next"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />

                  <Subtitle2 style={styles.overline}>ZIP Code</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.zip = r;
                    }}
                    value={zip}
                    onChangeText={this.zipChange}
                    onFocus={this.zipFocus}
                    inputFocused={zipFocused}
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                </View>

                <View>
                  
                </View>
              </View>

              <KeyboardAwareScrollView>
                <View style={styles.form}>
                    <CreditCard
                  colors={["#784BA0", "#2B86C5"]}
                  brand="visa"
                  last4Digits="3456"
                  cardHolder="Kristin Evans"
                  expiry="09 / 21"
                />
                      <LinkButton
                    onPress={this.navigateTo("PaymentMethod")}
                    title="Edit details"
                    titleStyle={styles.actionButton}
                  />
                  
                  <Subtitle2 style={styles.overline}>
                    Event Address
                  </Subtitle2>
                  <Subtitle1
                    style={styles.orderInfo}
                  >{`${address}, ${city}, ${zip}`}</Subtitle1>

                  <Subtitle2 style={[styles.overline, styles.pt16]}>
                    Booking Information
                  </Subtitle2>
                  <Subtitle1 style={styles.orderInfo}>
                    Start Date: {this.state.startDate} at {this.state.startTime}
                  </Subtitle1>
                 <Subtitle1 style={styles.orderInfo}>
                    End Date: {this.state.endDate} at {this.state.endTime}
                  </Subtitle1>
                 <Subtitle1 style={styles.orderInfo}>
                    Total Hours: {this.state.totalHours}
                  </Subtitle1>
                  <Subtitle1 style={styles.orderInfo}>
                    Total Guests: {this.state.totalGuests}
                  </Subtitle1>
                  <Subtitle1 style={styles.orderInfo}>
                    Event Type: {this.state.eventType}
                  </Subtitle1>
                 <Subtitle1 style={styles.orderInfo}>
                    Drink Menu Requested: {this.state.drinkMenu} +${this.state.menuFee}
                  </Subtitle1>
                 <Subtitle1 style={styles.orderInfo}>
                    Bartender Tip Jar: {this.state.drinkMenu}
                  </Subtitle1>
                 

                  <Subtitle2 style={[styles.overline, styles.pt16]}>
                    Your Order
                  </Subtitle2>
                  <View style={styles.row}>
                    <Subtitle1 style={styles.orderInfo}>Total amount</Subtitle1>
                    <Subtitle1 style={styles.amount}>$ 75.40</Subtitle1>
                  </View>
                </View>
              </KeyboardAwareScrollView>
            </Swiper>

            <View style={styles.buttonContainer}>
              <View style={styles.backButtonContainer} />
              {activeIndex < 2 && (
                <Button onPress={this.nextStep} title="Next" rounded />
              )}

              {activeIndex === 2 && (
                <View>
<View style={{ paddingBottom: 12 }}>
                <Button
                  onPress={this.showInfoModal(true)}
                  title="Place Order"
                  rounded
                /></View>
                <Button
                color='#000'
                onPress={this.showInfoModal(true)}
                socialIconName="apple"
                iconColor="#fff"
                title="Pay With Apple Pay"
                titleColor="#fff"
                  rounded
                />
                </View>
              )}

              {activeIndex === 0 && (
                <View style={styles.linkButtonContainer}>
                  <LinkButton
                    onPress={this.goBack}
                    title="Cancel"
                    titleStyle={styles.linkButton}
                  />
                </View>
              )}

              {activeIndex > 0 && (
                <View style={styles.linkButtonContainer}>
                  <LinkButton
                    onPress={this.previousStep}
                    title="Back"
                    titleStyle={styles.linkButton}
                  />
                </View>
              )}
            </View>
          </View>

          <InfoModal
            statusBarColor={Colors.primaryColorDark}
            iconName={checkmarkIcon}
            iconColor={Colors.primaryColor}
            title={"Success!".toUpperCase()}
            message="You will recieve an email when the bartender confirms your booking. You will be refunded if the bartender cancels or doesn't confirm your booking within 48 hours of your booking. "
            buttonTitle="Thanks!"
            onButtonPress={this.closeInfoModal(false)}
            onRequestClose={this.closeInfoModal(false)}
            visible={infoModalVisible}
          />
        </View>
      </SafeAreaView>
    );
  }
}
