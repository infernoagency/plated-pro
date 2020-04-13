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
  View,
  TextInput,
  FlatList
} from "react-native";
import Color from "color";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Swiper from "react-native-swiper";
import BakingOrderCard from "../../components/cards/BakingOrderCard";
import MenuCard from "../../components/cards/MenuCard";
import Divider from "../../components/divider/Divider";
import ModalDropdown from 'react-native-modal-dropdown';
import DatePicker from '../../components/date/Date'
// import components
import Button from "../../components/buttons/Button";
import CreditCard from "../../components/creditcard/CreditCard";
import InfoModal from "../../components/modals/InfoModal";
import AddModal from "../../components/modals/InfoModal";
import RemoveModal from "../../components/modals/InfoModal";
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

// Checkout Config
const INPUT_FOCUSED_BORDER_COLOR = Colors.primaryColor;
const checkmarkIcon =
  Platform.OS === "ios"
    ? "ios-checkmark-circle-outline"
    : "md-checkmark-circle-outline";

const removeIcon =
  Platform.OS === "ios"
    ? "ios-remove-circle-outline"
    : "md-remove-circle-outline";

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
     titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    paddingHorizontal: 16
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
     titleText: {
    fontWeight: "700"
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
form1: {
    paddingVertical: 24
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
    alignItems: "center",
    marginBottom: 10
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
export default class BakerBooking extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
      activeIndex: 0,
      address: "455 Larkspur Dr.",
      city: "Baviera",
      zip: "92908",
      addressFocused: false,
      cityFocused: false,
      zipFocused: false,
      infoModalVisible: false,
      AddModalVisible: false,
      RemoveModalVisible: false,
      catering: [
        {
          key: 1,
          title: "12 S'more Cannoli's",
          imageUri: require("../../assets/img/cannoli.jpg"),
          feeds: "6-12",
          price: 29.99
        },
        {
          key: 2,
          title: "Tiramisu Cake",
          imageUri: require("../../assets/img/tiramisu.jpg"),
          feeds: "16",
          price: 44.99,
        },
        {
          key: 3,
          title: "Struffoli w/ Honey",
          imageUri: require("../../assets/img/struffoli.jpg"),
          price: 29.99,
          feeds: "10-12"
        },
        ],
        cart: [
        {
          key: 1,
          title: "12 S'more Cannoli's",
          imageUri: require("../../assets/img/cannoli.jpg"),
          feeds: "6-12",
          price: 29.99,
          quantity: 2
        },
        {
          key: 2,
          title: "Tiramisu Cake",
          imageUri: require("../../assets/img/tiramisu.jpg"),
          feeds: "16",
          price: 44.99,
          quantity: 1
        },
        ]
    };
  }

      keyExtractor = (item, index) => index.toString();

      renderSeparator = () => <Divider />;
    
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
      addressFocused: true,
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
      }
    );
  };
    showAddModal = value => () => {
    this.setState({
      AddModalVisible: value
    });
  };

  closeAddModal = value => () => {
    this.setState(
      {
        AddModalVisible: false
      }
    );
  };
    
showRemoveModal = value => () => {
    this.setState({
      RemoveModalVisible: value
    });
  };

  closeRemoveModal = value => () => {
    this.setState(
      {
        RemoveModalVisible: false
      }
    );
  };
    
    renderCateringItem = ({ item, index }) => (
    <BakingOrderCard
      onPress={this.showAddModal(true)}
      key={index}
      activeOpacity={0.7}
      imageUri={item.imageUri}
      description={item.description}
      feeds={item.feeds}
      title={item.title}
      price={item.price}
      quantity={item.quantity}
      swipeoutDisabled
    />
  );
 renderCart = ({ item, index }) => (
    <BakerCartCard
      key={index}
      activeOpacity={0.7}
      imageUri={item.imageUri}
      description={item.description}
      feeds={item.feeds}
      title={item.title}
      price={item.price}
      quantity={item.quantity}
      swipeoutDisabled
    />
  );

  render() {
    const {
      activeIndex,
      address,
      addressFocused,
      city,
      cityFocused,
      zip,
      zipFocused,
      infoModalVisible,
      AddModalVisible,
      RemoveModalVisible,
      catering,
        cart
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
                  Order
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
                  Details
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
                  Pay
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
        <View style={styles.titleContainer}>
         <Heading6 style={styles.titleText}>Add Your Items:</Heading6>
        </View>
                <View style={styles.form1}>
         <FlatList
              data={catering}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderCateringItem}
              ItemSeparatorComponent={this.renderSeparator}
            />   
                </View>
              </KeyboardAwareScrollView>

              {/* STEP 2 */}
              <View>
                <View style={styles.form}>
        <Heading6 style={styles.overline}>Date</Heading6>
        <DatePicker
    />

                  <Heading6 style={styles.overline}>Delivery Time</Heading6>
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
         
                  <Heading6 style={styles.overline}>Special Occasion</Heading6>
                  <ModalDropdown dropdownStyle={{width: '85%'}} textStyle={{ color: Colors.primaryColor}} style={styles.boxOutline} options={[
        'Birthday Party',
        'Work Event',
        'Holiday Party',
        'Wedding',
        'Other'                                                                                                                                
        ]}
        />
        

                  <Heading6 style={styles.overline}>Extra Details?</Heading6>
            <TextInput
            placeholder="Allergies, Custom Design, etc."
            returnKeyType="Next"
            maxLength={600}
            multiline={true}
            style={styles.textInput}
          />

                </View>

                <View>
                  
                </View>
              </View>

              <KeyboardAwareScrollView>
                        <View style={styles.form1}>
            <FlatList
              data={cart}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderCart}
              ItemSeparatorComponent={this.renderSeparator}
            />   
            </View>
                <View style={styles.form}>
                    <Subtitle2 style={styles.overline}>
                    Delivery Address
                  </Subtitle2>
                  <Subtitle1
                    style={styles.orderInfo}
                  >{`${address}, ${city}, ${zip}`}</Subtitle1>
<LinkButton
                    onPress={this.navigateTo("DeliveryAddress")}
                    title="Edit details"
                    titleStyle={styles.actionButton}
                  />
<Subtitle2 style={styles.overline}>
                    Payment Method
                  </Subtitle2>
                    <CreditCard
                  colors={["#784BA0", "#2B86C5"]}
                  brand="visa"
                  last4Digits="3456"
                  cardHolder="Kristin Evans"
                  expiry="09 / 21"
                />
                      <LinkButton
                    onPress={this.navigateTo("PaymentMethod")}
                    title="Change card"
                    titleStyle={styles.actionButton}
                  />
                  
                  
                  
            
                  
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
<View style={styles.row}>
                    <Subtitle1 style={styles.orderInfo}>Total Amount:</Subtitle1>
                    <Subtitle1 style={styles.amount}>$ 75.40</Subtitle1>
                  </View>
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
            message="Order placed successfully. For more details check your orders."
            buttonTitle="Back to shopping"
            onButtonPress={this.closeInfoModal(false)}
            onRequestClose={this.closeInfoModal(false)}
            visible={infoModalVisible}
          />
<AddModal
            statusBarColor={Colors.primaryColorDark}
            iconName={checkmarkIcon}
            iconColor={Colors.primaryColor}
            title={"Added!".toUpperCase()}
            message="Your prodcuts we're added to your order. You can edit your order under the pay tab."
            buttonTitle="Back to shopping"
            onButtonPress={this.closeAddModal(false)}
            onRequestClose={this.closeAddModal(false)}
            visible={AddModalVisible}
          />
<RemoveModal
            statusBarColor={Colors.primaryColorDark}
            iconName={removeIcon}
            iconColor="#FF0000"
            title={"Removed!".toUpperCase()}
            message="Your prodcut was removed from your cart."
            buttonTitle="Close"
            color="#FF0000"
            onButtonPress={this.closeRemoveModal(false)}
            onRequestClose={this.closeRemoveModal(false)}
            visible={RemoveModalVisible}
          />
        </View>
      </SafeAreaView>
    );
  }
}
