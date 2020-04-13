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
    Dimensions,
  ScrollView,
  StatusBar,
  TextInput,
  StyleSheet,
  Text,
  Image,
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
import ModalDropdown from 'react-native-modal-dropdown';
// import colors
import Colors from "../../theme/colors";
import TouchableItem from "../../components/TouchableItem";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
const { width, height } = Dimensions.get("screen");
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
    height: 120,
    width: '100%',
    fontSize: 16,
    textAlign: "left"
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
    paddingBottom: '12%',
      paddingLeft: 16,
      paddingRight: 16,
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
export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userCategories: 
        [
            "Meal Prep", 
            "Catering"
        ],
        productImage: null,
        hasCameraPermission: null,
        imageText: null,
        minFeed: null,
        maxFeed: null,
        quantity: null,
        calories: null
    
    };
  }

    async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === 'granted' });
  };
    

    
navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  render() {
      const { userCategories, productImage, imageText} = this.state;
    return (
       <Fragment>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
          />
        <ScrollView
        showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
         <Subtitle2 style={styles.overline}>
                    Product Name:
                  </Subtitle2>
        <TextInput
            placeholder=""
            returnKeyType="Enter"
            maxLength={12}
            style={styles.textInput}
          />
        <Subtitle2 style={styles.overline}>
                    Product Price:
                  </Subtitle2>
        <TextInput
            placeholder="20.00"
            returnKeyType="Enter"
            maxLength={12}
            style={styles.textInput}
          />
        <Subtitle2 style={styles.overline}>
                    Calories Per Serving:
                  </Subtitle2>
        <TextInput
            placeholder={this.state.calories}
            returnKeyType="Enter"
            maxLength={12}
            style={styles.textInput}
          />
        <Subtitle2 style={styles.overline}>
                    Category:
                  </Subtitle2>
        <ModalDropdown dropdownTextStyle={{size: 14}} dropdownStyle={{width: '85%'}} textStyle={{ color: Colors.primaryColor}} style={styles.boxOutline} options={userCategories}
        />
            <Subtitle2 style={styles.overline}>
                    Minimum Servings:
                  </Subtitle2>
        <TextInput
            placeholder={this.state.minFeed}
            returnKeyType="Enter"
            maxLength={3}
            style={styles.textInput}
          />
        <Subtitle2 style={styles.overline}>
                    Maximum Servings:
                  </Subtitle2>
        <TextInput
            placeholder={this.state.maxFeed}
            returnKeyType="Enter"
            maxLength={3}
            style={styles.textInput}
          />
        <Subtitle2 style={styles.overline}>
                    Description:
                  </Subtitle2>
        <TextInput
            placeholder="Write about your maels ingredients, what comes with it, etc."
            returnKeyType="Enter"
            maxLength={12}
            multiline={true}
            style={styles.textInput1}
          />
         <Subtitle2 style={styles.overline}>
                    Product Image:
                  </Subtitle2>
        <TouchableItem onPress={this._pickImage}>
        <View style={styles.boxOutline}>
        {imageText === null &&
           (<Subtitle1 styles={styles.imageText}>Click Here To Add An Image</Subtitle1>)}
        {imageText !== null &&
           (<Subtitle1 styles={styles.imageText}>{this.state.imageText}</Subtitle1>)}
          </View>
        </TouchableItem>
        {productImage &&
          <Image source={{ uri: this.state.productImage }} style={{ marginTop: 25, width: width * 0.9, height: 200 }} />}
                </View>
      
        </ScrollView>
          <View style={styles.buttonContainer}>
                 <Button
                  title="Add"
                  rounded
                />
          </View>
        
        
      </Fragment>
    );
  }
      _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ productImage: result.uri, imageText: result.uri });
    }
}
}
