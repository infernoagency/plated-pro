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
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import Color from "color";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Swiper from "react-native-swiper";

// import components
import Button from "../../components/buttons/Button";
import CreditCard from "../../components/creditcard/CreditCard";
import InfoModal from "../../components/modals/InfoModal";
import LinkButton from "../../components/buttons/LinkButton";
import {
  Caption,
  Subtitle1,
  Subtitle2
} from "../../components/text/CustomText";
import UnderlineTextInput from "../../components/textinputs/UnderlineTextInput";

// import colors, layout
import Colors from "../../theme/colors";
import Layout from "../../theme/layout";

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
  stepIndicator: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 48
  },
  stepContainer: {
    width: 70,
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
    })
  },
  formContainer: {
    flex: 1
  },
  form: {
    paddingVertical: 24,
    paddingHorizontal: 20
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
    textAlign: "center"
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
  }
});

// CheckoutA
export default class AddCreditCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      address: "",
      city: "",
      zip: "",
      cvv: "",
      cvvFocused: false, 
      card: "",
      cardFocused: false, 
      expiration: "",
      expirationFocused: false, 
      addressFocused: false,
      cityFocused: false,
      zipFocused: false,
      infoModalVisible: false
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

  clearInputs = () => {
    this.address.clear();
    this.city.clear();
    this.zip.clear();
  };

  addressChange = text => {
    this.setState({
      address: text
    });
  };

  addressFocus = () => {
    this.setState({
      cityFocused: false,
      zipFocused: false,
      cardHolderFocused: false,
      cardFocused: false,
      expiration2Focused: false,
      expirationFocused: false,
      cvvFocused: false,
      addressFocused: true
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
      zipFocused: false,
      cardHolderFocused: false,
      cardFocused: false,
      expiration2Focused: false,
      expirationFocused: false,
      cvvFocused: false,
      cityFocused: true
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
      cardHolderFocused: false,
      cardFocused: false,
      expiration2Focused: false,
      expirationFocused: false,
      cvvFocused: false,
      zipFocused: true
    });
  };
    cvvChange = text => {
    this.setState({
      cvv: text
    });
  };

  cvvFocus = () => {
    this.setState({
      addressFocused: false,
      cityFocused: false,
      zipFocused: false,
      cardHolderFocused: false,
      cardFocused: false,
      expiration2Focused: false,
      expirationFocused: false,
      cvvFocused: true
    });
  };
    cardChange = text => {
    this.setState({
      card: text
    });
  };

  cardFocus = () => {
    this.setState({
      addressFocused: false,
      cityFocused: false,
      zipFocused: false,
      cardHolderFocused: false,
      cardFocused: false,
      expiration2Focused: false,
      expirationFocused: false,
      cardFocused: true
    });
  };
    cardHolderChange = text => {
    this.setState({
      cardHolder: text
    });
  };

  cardHolderFocus = () => {
    this.setState({
      addressFocused: false,
      cityFocused: false,
      zipFocused: false,
      cardHolderFocused: false,
      cardFocused: false,
      expiration2Focused: false,
      expirationFocused: false,
      cardHolderFocused: true
    });
  };
    expirationChange = text => {
    this.setState({
      expiration: text
    });
  };

  expirationFocus = () => {
    this.setState({
      addressFocused: false,
      cityFocused: false,
      cardHolderFocused: false,
      cardFocused: false,
      zipFocused: false,
      expiration2Focused: false,
      expirationFocused: true
    });
  };
expiration2Change = text => {
    this.setState({
      expiration2: text
    });
  };

  expiration2Focus = () => {
    this.setState({
      addressFocused: false,
      cardHolderFocused: false,
      cardFocused: false,
      cvvFocused: false,
      zipFocused: false,
      cityFocused: false,
      expirationFocused: false,
      expiration2Focused: true
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
      city,
      cityFocused,
      zip,
      zipFocused,
      cvv,
      cvvFocused,
      card,
      cardFocused,
      cardHolder,
      cardHolderFocused,
      expiration,
      expirationFocused,
      expiration2,
      expiration2Focused,
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
                <Caption
                  style={[
                    styles.stepText,
                    activeIndex === 0 && styles.activeStepText
                  ]}
                >
                  Card
                </Caption>
                <Caption
                  style={[
                    styles.stepText,
                    activeIndex === 0 && styles.activeStepText
                  ]}
                >
                  Number
                </Caption>
              </View>

              <View
                style={[styles.line, activeIndex > 0 && styles.activeLine]}
              />

              <View style={styles.stepContainer}>
                <Caption
                  style={[
                    styles.stepText,
                    activeIndex === 1 && styles.activeStepText
                  ]}
                >
                  Billing
                </Caption>
                <Caption
                  style={[
                    styles.stepText,
                    activeIndex === 1 && styles.activeStepText
                  ]}
                >
                  Address
                </Caption>
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
                  <Subtitle2 style={styles.overline}>Card Holder Name</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.cardHolder = r;
                    }}
                    value={cardHolder}
                    onChangeText={this.cardHolderChange}
                    onFocus={this.cardHolderFocus}
                    inputFocused={cardHolderFocused}
                    onSubmitEditing={this.focusOn(this.card)}
                    returnKeyType="next"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                <Subtitle2 style={styles.overline}>Card Number</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.card = r;
                    }}
                    value={card}
                    onChangeText={this.cardChange}
                    onFocus={this.cardFocus}
                    inputFocused={cardFocused}
                    maxLength={10}
                    onSubmitEditing={this.focusOn(this.expiration)}
                    returnKeyType="next"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />

                  <Subtitle2 style={styles.overline}>Expiration Month</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.expiration = r;
                    }}
                    value={expiration}
                    onChangeText={this.expirationChange}
                    onFocus={this.expirationFocus}
                    inputFocused={expirationFocused}
                    maxLength={2}
                    onSubmitEditing={this.focusOn(this.expiration2)}
                    returnKeyType="next"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                
                      <Subtitle2 style={styles.overline}>Expiration Year</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.expiration2 = r;
                    }}
                    value={expiration2}
                    onChangeText={this.expiration2Change}
                    onFocus={this.expiration2Focus}
                    inputFocused={expiration2Focused}
                    onSubmitEditing={this.focusOn(this.cvv)}
                    maxLength={2}
                    returnKeyType="next"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />

                  <Subtitle2 style={styles.overline}>CVV</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.cvv = r;
                    }}
                    value={cvv}
                    maxLength={3}
                    onChangeText={this.cvvChange}
                    onFocus={this.cvvFocus}
                    inputFocused={cvvFocused}
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                </View>
              </KeyboardAwareScrollView>

              {/* STEP 2 */}
              <View>
               <View style={styles.form}>
                  <Subtitle2 style={styles.overline}>Billing Address Line 1</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.cardHolder = r;
                    }}
                    value={cardHolder}
                    onChangeText={this.cardHolderChange}
                    onFocus={this.cardHolderFocus}
                    inputFocused={cardHolderFocused}
                    onSubmitEditing={this.focusOn(this.card)}
                    returnKeyType="next"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                <Subtitle2 style={styles.overline}>Billing Address Line 2</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.card = r;
                    }}
                    value={card}
                    onChangeText={this.cardChange}
                    onFocus={this.cardFocus}
                    inputFocused={cardFocused}
                    maxLength={10}
                    onSubmitEditing={this.focusOn(this.expiration)}
                    returnKeyType="next"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />

                  <Subtitle2 style={styles.overline}>Billing City</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.expiration = r;
                    }}
                    value={expiration}
                    onChangeText={this.expirationChange}
                    onFocus={this.expirationFocus}
                    inputFocused={expirationFocused}
                    maxLength={2}
                    onSubmitEditing={this.focusOn(this.expiration2)}
                    returnKeyType="next"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                
                      <Subtitle2 style={styles.overline}>Billing State</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.expiration2 = r;
                    }}
                    value={expiration2}
                    onChangeText={this.expiration2Change}
                    onFocus={this.expiration2Focus}
                    inputFocused={expiration2Focused}
                    onSubmitEditing={this.focusOn(this.cvv)}
                    maxLength={2}
                    returnKeyType="next"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />

                  <Subtitle2 style={styles.overline}>Billing Zip Code</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.cvv = r;
                    }}
                    value={cvv}
                    maxLength={3}
                    onChangeText={this.cvvChange}
                    onFocus={this.cvvFocus}
                    inputFocused={cvvFocused}
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                <Subtitle2 style={styles.overline}>Billing Phone Number</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.cvv = r;
                    }}
                    value={cvv}
                    maxLength={3}
                    onChangeText={this.cvvChange}
                    onFocus={this.cvvFocus}
                    inputFocused={cvvFocused}
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                </View>
              </View>

              <KeyboardAwareScrollView>
                <View style={styles.form}>
                  <Subtitle2 style={styles.overline}>
                    Delivery Address
                  </Subtitle2>
                  <Subtitle1
                    style={styles.orderInfo}
                  >{`${address}, ${city}, ${zip}`}</Subtitle1>

                  <Subtitle2 style={[styles.overline, styles.pt16]}>
                    Payment Method
                  </Subtitle2>
                  <Subtitle1 style={styles.orderInfo}>
                    XXXX XXXX XXXX 3456
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
              {activeIndex < 1 && (
                <Button onPress={this.nextStep} title="Next" rounded />
              )}

              {activeIndex === 1 && (
                <Button
                  onPress={this.showInfoModal(true)}
                  title="Save Card"
                  rounded
                />
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
            message="Your card has been saved to your profile for future purchases."
            buttonTitle="Back"
            onButtonPress={this.closeInfoModal(false)}
            onRequestClose={this.closeInfoModal(false)}
            visible={infoModalVisible}
          />
        </View>
      </SafeAreaView>
    );
  }
}
