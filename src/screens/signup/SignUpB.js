/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
// import components
import ContainedButton from "../../components/buttons/ContainedButton";
import GradientContainer from "../../components/gradientcontainer/GradientContainer";
import UnderlinePasswordInput from "../../components/textinputs/UnderlinePasswordInput";
import UnderlineTextInput from "../../components/textinputs/UnderlineTextInput";
import UnderlinePhoneInput from "../../components/textinputs/UnderlinePhoneInput";
// import colors, layout
import Colors from "../../theme/colors";
import Layout from "../../theme/layout";

import data from '../../data/Countries';

// SignUpB Config
const PLACEHOLDER_TEXT_COLOR = "rgba(255, 255, 255, 0.7)";
const INPUT_TEXT_COLOR = "#fff";
const INPUT_BORDER_COLOR = "rgba(255, 255, 255, 0.4)";
const INPUT_FOCUSED_BORDER_COLOR = "#fff";

const defaultFlag = data.filter(
  obj => obj.name === 'United States'
  )[0].flag


// SignUpB Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  },
  contentContainerStyle: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: "space-between"
  },
  form: {
    paddingHorizontal: Layout.SMALL_PADDING
  },
  inputContainer: { marginBottom: 7 },
  vSpacer: {
    height: 15
  },
  buttonContainer: {
    paddingVertical: 23
  },
  buttonsGroup: {
    paddingTop: 23
  },
  separator: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  line: {
    width: 64,
    height: 1,
    backgroundColor: INPUT_BORDER_COLOR
  },
  orText: {
    top: -2,
    paddingHorizontal: 8,
    color: PLACEHOLDER_TEXT_COLOR
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%"
  },
  termsContainer: {
    flexDirection: "row"
  },
  footerText: {
    fontWeight: "300",
    fontSize: 13,
    color: Colors.white
  },
  footerLink: {
    fontWeight: "400",
    textDecorationLine: "underline"
  }
});



// SignUpB
export default class SignUpB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailFocused: false,
      phoneNumber: "",
      phoneFocused: false,
      password: "",
      passwordFocused: false,
      secureTextEntry: true
    };
  }

  emailChange = text => {
    this.setState({
      email: text
    });
  };

  emailFocus = () => {
    this.setState({
      emailFocused: true,
      phoneFocused: false,
      passwordFocused: false
    });
  };

  phoneChange = text => {
    this.setState({
      phoneNumber: text
    });
  };

  phoneFocus = () => {
    this.setState({
      phoneFocused: true,
      emailFocused: false,
      passwordFocused: false
    });
  };

  passwordChange = text => {
    this.setState({
      password: text
    });
  };

  passwordFocus = () => {
    this.setState({
      passwordFocused: true,
      emailFocused: false,
      phoneFocused: false
    });
  };

  onTogglePress = () => {
    const { secureTextEntry } = this.state;
    this.setState({
      secureTextEntry: !secureTextEntry
    });
  };

  navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  createAccount = async () => {
      //const { email, phone, password } = this.state;
	try {
	  const response = await fetch('https://plated-api.firebaseapp.com/create-user', {
	    method: 'POST',
        body: JSON.stringify({
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        password: this.state.password
        }),
	    headers: {
    	  'Content-Type': 'application/json',
    	}
	});
	  const result = await response.json();
	  console.log(response);
	  console.log('Success:', JSON.stringify(result))
      .then((this.navigateTo('Verification')));
      
    
	} catch (error) {
	  Alert.alert('Error:', error);
	}
};

  focusOn = nextFiled => () => {
    if (nextFiled) {
      nextFiled.focus();
    }
  };

  render() {
    const {
      emailFocused,
      phoneFocused,
      password,
      passwordFocused,
      secureTextEntry
    } = this.state;

    return (
      <GradientContainer>
        <StatusBar
          backgroundColor={Colors.primaryColor}
          barStyle="light-content"
        />

        <SafeAreaView style={styles.screenContainer}>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.contentContainerStyle}
          >
            <View style={styles.content}>
              <View />

              <View style={styles.form}>
                <UnderlineTextInput
                  onRef={r => {
                    this.email = r;
                  }}
                  onChangeText={this.emailChange}
                  onFocus={this.emailFocus}
                  inputFocused={emailFocused}
                  onSubmitEditing={this.focusOn(this.phoneNumber)}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  keyboardType="email-address"
                  placeholder="E-mail"
                  placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                  inputTextColor={INPUT_TEXT_COLOR}
                  borderColor={INPUT_BORDER_COLOR}
                  focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                  inputContainerStyle={styles.inputContainer}
                />
                <UnderlinePhoneInput
                  onRef={r => {
                    this.phoneNumber = r;
                  }}
                  onChangeText={this.phoneChange}
                  onFocus={this.phoneFocus}
                  inputFocused={phoneFocused}
                  onSubmitEditing={this.focusOn(this.password)}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  keyboardType="phone-pad"
                  placeholder="Phone number"
                  placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                  inputTextColor={INPUT_TEXT_COLOR}
                  borderColor={INPUT_BORDER_COLOR}
                  focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                  inputContainerStyle={styles.inputContainer}
                />

                <UnderlinePasswordInput
                  onRef={r => {
                    this.password = r;
                  }}
                  onChangeText={this.passwordChange}
                  onFocus={this.passwordFocus}
                  inputFocused={passwordFocused}
                  onSubmitEditing={this.createAccount}
                  returnKeyType="done"
                  placeholder="Password"
                  placeholderTextColor={PLACEHOLDER_TEXT_COLOR}
                  inputTextColor={INPUT_TEXT_COLOR}
                  secureTextEntry={secureTextEntry}
                  borderColor={INPUT_BORDER_COLOR}
                  focusedBorderColor={INPUT_FOCUSED_BORDER_COLOR}
                  toggleVisible={password.length > 0}
                  toggleText={secureTextEntry ? "Show" : "Hide"}
                  onTogglePress={this.onTogglePress}
                  inputContainerStyle={styles.inputContainer}
                />

                <View style={styles.buttonContainer}>
                  <ContainedButton
                    onPress={this.createAccount}
                    color={Colors.accentColor}
                    title={"Create Account".toUpperCase()}
                  />
                </View>

                <View style={styles.separator}>
                  <View style={styles.line} />
                  <Text style={styles.orText}>or</Text>
                  <View style={styles.line} />
                </View>

                <View style={styles.buttonsGroup}>
                  <ContainedButton
                    onPress={this.createAccount}
                    color={Colors.surface}
                    socialIconName="facebook-square"
                    iconColor="#3b5998"
                    title={"Sign Up With Facebook".toUpperCase()}
                    titleColor="#3b5998"
                  />
                  <View style={styles.vSpacer} />
                  <ContainedButton
                    onPress={this.createAccount}
                    color={Colors.surface}
                    socialIconName="google"
                    iconColor="#db4437"
                    title={"Sign Up With Google".toUpperCase()}
                    titleColor="#db4437"
                  />
                <View style={styles.vSpacer} />
                  <ContainedButton
                    onPress={this.createAccount}
                    color={Colors.surface}
                    socialIconName="apple"
                    iconColor="#000"
                    title="Sign Up With Apple"
                    titleColor="#000"
                  />
                </View>
              </View>

              <TouchableWithoutFeedback onPress={this.navigateTo("TermsConditions")}>
                <View style={styles.footer}>
                  <Text style={styles.footerText}>
                    By registering, you accepts our
                  </Text>
                  <View style={styles.termsContainer}>
                    <Text style={[styles.footerText, styles.footerLink]}>
                      Terms & Conditions
                    </Text>
                    <Text style={styles.footerText}> and </Text>
                    <Text style={[styles.footerText, styles.footerLink]}>
                      Privacy Policy
                    </Text>
                    <Text style={styles.footerText}>.</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </GradientContainer>
    );
  }
}
