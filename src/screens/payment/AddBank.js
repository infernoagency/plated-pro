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
export default class AddBank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      routing: "",
      bankOwner: "",
      bankName: "",
      account: "",
      bankNameFocused: false, 
      accountFocused: false, 
      routingFocused: false,
      bankOwnerFocused: false,
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

  bankOwnerChange = text => {
    this.setState({
      bankOwner: text
    });
  };

  bankOwnerFocus = () => {
    this.setState({
      bankOwnerFocused: true,
      accountFocused: false,
      bankNameFocused: false,
      routingFocused: false
    });
  };

  bankNameChange = text => {
    this.setState({
      bankName: text
    });
  };

  bankNameFocus = () => {
    this.setState({
      bankOwnerFocused: false,
      accountFocused: false,
      bankNameFocused: true,
      routingFocused: false
    });
  };

  routingChange = text => {
    this.setState({
      routing: text
    });
  };

  routingFocus = () => {
    this.setState({
      accountFocused: false,
      bankOwnerFocused: false,
      bankNameFocused: false,
      routingFocused: true
    });
  };
   
   accountChange = text => {
    this.setState({
      account: text
    });
  };

   accountFocus = () => {
    this.setState({
     bankOwnerFocused: false,
      bankNameFocused: false,
      routingFocused: false,
      accountFocused: true
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
      bankOwner,
      bankOwnerFocused,
      bankName,
      bankNameFocused,
      routing,
      routingFocused,
      account,
      accountFocused,
      infoModalVisible
    } = this.state;

    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColor}
          barStyle="light-content"
        />

        <View style={styles.container}>
          

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
                  <Subtitle2 style={styles.overline}>Bank Account Owner Name</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.bankOwner = r;
                    }}
                    value={bankOwner}
                    textContentType="name"
                    onChangeText={this.bankOwnerChange}
                    onFocus={this.bankOwnerFocus}
                    inputFocused={bankOwnerFocused}
                    onSubmitEditing={this.focusOn(this.bankName)}
                    returnKeyType="next"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                  
                  <Subtitle2 style={styles.overline}>Bank Name</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.bankName = r;
                    }}
                    value={bankName}
                    maxLength={3}
                    onChangeText={this.bankNameChange}
                    onFocus={this.bankNameFocus}
                    inputFocused={bankNameFocused}
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />
                <Subtitle2 style={styles.overline}>Routing Number</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.routing = r;
                    }}
                    value={routing}
                    onChangeText={this.routingChange}
                    onFocus={this.routingFocus}
                    inputFocused={routingFocused}
                    maxLength={10}
                    onSubmitEditing={this.focusOn(this.account)}
                    returnKeyType="next"
                    keyboardType="number-pad"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />

                  <Subtitle2 style={styles.overline}>Account Number</Subtitle2>
                  <UnderlineTextInput
                    onRef={r => {
                      this.account = r;
                    }}
                    value={account}
                    onChangeText={this.accountChange}
                    onFocus={this.accountFocus}
                    inputFocused={accountFocused}
                    secureTextEntry={true}
                    keyboardType="number-pad"
                    returnKeyType="save"
                    focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                    inputContainerStyle={styles.inputContainerStyle}
                  />

                </View>
              </KeyboardAwareScrollView>
            </Swiper>

            <View style={styles.buttonContainer}>
                <Button
                  onPress={this.showInfoModal(true)}
                  title="Save Bank Information"
                  rounded
                />
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
