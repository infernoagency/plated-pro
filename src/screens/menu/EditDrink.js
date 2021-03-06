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
    paddingBottom: '6%',
      paddingLeft: 16,
      paddingRight: 16,
  },
buttonContainer1: {
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
export default class EditDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
        imageText: 'file:///Users/isaiah/Library/Developer/CoreSimulator/Devices/9C82A8A9-C29A-4508-B436-B161505E52C7/data/Containers/Data/Application/E79CAC80-26C2-4D08-BA1E-E67F752F9377/Library/Caches/ExponentExperienceData/%2540ioio1234%252Fplated-pro/ImagePicker/AD639A6B-828B-4AE4-AF6B-2D0CE4AA57E4.jpg',
        productName: '1942 Margarita',
        description: 'Made with Don Julio 1942. Served on the rocks or blended.'    
    };
  }
    

    
navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  render() {
      const { 
          userCategories, 
          productImage, 
          imageText,
          productName,
          productPrice,
          category,
          description,
          minFeed,
          maxFeed
            } = this.state;
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
                    Drink Name:
                  </Subtitle2>
        <TextInput
            placeholder={this.state.productName}
            returnKeyType="Enter"
            maxLength={12}
            style={styles.textInput}
          />
        <Subtitle2 style={styles.overline}>
                    Description:
                  </Subtitle2>
        <TextInput
            placeholder={this.state.description}
            returnKeyType="Enter"
            maxLength={12}
            editable
            multiline={true}
            style={styles.textInput1}
          />
                </View>
     
        
        </ScrollView>
         <View style={styles.buttonContainer}>
                 <Button
                  title="Update"
                  rounded
                />
          </View>
          <View style={styles.buttonContainer1}>
                 <Button
                  color='#b90039'
                  title="Delete"
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
