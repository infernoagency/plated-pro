/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Fragment} from "react";
import { StyleSheet, View } from "react-native";
import Color from "color";
import { FontAwesome as FAIcon } from "@expo/vector-icons";
import type { ColorProp } from "react-native/Libraries/StyleSheet/ColorPropType";
import Icon from "../../components/icon/Icon";
const moreIcon = IOS ? "ios-more" : "md-more";
const IOS = Platform.OS === "ios";
import TouchableItem from "../../components/TouchableItem";

// import components
import GradientContainer from "../gradientcontainer/GradientContainer";
import { Caption, Heading6 } from "../text/CustomText";

// import colors, layout
import Colors from "../../theme/colors";

// CreditCard Styles
const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
    height: 228
  },
  creditCard: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 8
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
  cardNumberContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    maxWidth: 286
  },
  caption: {
    color: Color(Colors.white).alpha(0.8)
  },
  whiteText: {
    color: Colors.white
  }
});

// Button Props
type Props = {
  colors: [ColorProp, ColorProp],
  brand: "visa" | "mastercard" | "discover" | "amex",
  last4Digits: number,
  cardHolder: string,
  expiry: string,
  onPress: () => {}
};

// Button
const CreditCard = ({
  colors,
  brand,
  onPress,
  last4Digits,
  cardHolder,
  expiry
}: Props) => (
  <View style={styles.container}>
    <GradientContainer colors={colors} containerStyle={styles.creditCard}>
      <View style={styles.cardInfo}>
    <FAIcon name={`cc-${brand}`} size={36} color={Colors.white} />
<View style={styles.editButtonContainer}>
                    <TouchableItem
                      onPress={onPress}
                      borderless
                    >
                      <View style={styles.editButton}>
                        <Icon name={moreIcon} size={22} color={Colors.black} />
                      </View>
</TouchableItem>
                  </View>
      </View>

      <View style={styles.cardNumberContainer}>
        <Heading6 style={styles.whiteText}>XXXX</Heading6>
        <Heading6 style={styles.whiteText}>XXXX</Heading6>
        <Heading6 style={styles.whiteText}>XXXX</Heading6>
        <Heading6 style={styles.whiteText}>{last4Digits}</Heading6>
      </View>

      <View style={styles.cardInfo}>
        <View>
          <Caption style={styles.caption}>Card Holder</Caption>
          <Heading6 style={styles.whiteText}>{cardHolder}</Heading6>
        </View>
        <View>
          <Caption style={styles.caption}>Expires</Caption>
          <Heading6 style={styles.whiteText}>{expiry}</Heading6>
        </View>
      </View>
    </GradientContainer>

  </View>
);

export default CreditCard;
