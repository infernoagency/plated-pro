/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import node modules
import React, {Fragment} from 'react';
import { StyleSheet, View } from 'react-native';

// import components
import Button from '../buttons/Button';
import { Caption, Subtitle1, Subtitle2, Heading6 } from '../text/CustomText';
import TouchableItem from '../TouchableItem';
import Avatar from "../../components/avatar/Avatar";

// import colors. layout
import Colors from '../../theme/colors';
import Layout from '../../theme/layout';

// OrderItemA Config

// OrderItemA Styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    marginHorizontal: 12,
    borderRadius: 16,
    backgroundColor: Colors.background
  },
  content: {
    width: Layout.SCREEN_WIDTH - 2 * 12
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16
  },
  orderNumber: {
    paddingBottom: 2,
    color: Colors.primaryColorDark
  },
  flexEnd: {
    alignItems: 'flex-end'
  },
  divider: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#efefef'
  },
  circleMask: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#efefef'
  },
  leftCircle: {
    left: -9
  },
  rightCircle: {
    right: -9
  },
  pv8: {
    paddingVertical: 8
  },
  itemContainer: {
    marginVertical: 4,
    backgroundColor: Colors.background
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 36
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  extraSmallButton: {
    width: 116,
    height: 32,
    borderRadius: 16
  },
  onTheWay: {
    color: Colors.tertiaryColor
  },
  pending: {
    color: Colors.secondaryColor
  },
  delivered: {
    color: Colors.primaryColor
  },
    expires: {
    color: Colors.primaryColor,
        textAlign: 'right'
  },
     row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16
  },
  profileContainer: {
    // height: 88
    paddingVertical: 16
  },
  leftSide: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
rightSide: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: '10%'
  },
  profileInfo: {
    paddingLeft: 16
  },
  name: {
    fontWeight: "500",
    width: 110
  },
  email: {
    paddingVertical: 2
  },
});

const renderOrderItemsTotal = (items) => {
  const total = items.reduce((prev, next) => prev + next.price, 0);
  return total;
};


// OrderItemB Props
type Props = {
  approveOnPress: () => {},
  declineOnPress: () => {},
  messageOnPress: () => {},
  activeOpacity: number,
  orderNumber: number,
  orderDate: string,
  merchant: string,
  orderItems: Array,
  orderStatus: string
};

// OrderItemB
const OrderItemB = ({
  approveOnPress,
  declineOnPress,
  messageOnPress,
  activeOpacity,
  orderNumber,
  orderDate,
  orderItems,
  merchant,
  orderStatus
}: Props) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.header}>
    <TouchableItem messageOnPress={messageOnPress} activeOpacity={activeOpacity}>
        <View style={[styles.row, styles.profileContainer]}>
              <View style={styles.leftSide}>
                <Avatar
                  imageUri={require("../../assets/img/profile.jpg")}
                  size={60}
                  rounded
                />
                <View style={styles.profileInfo}>
                  <Subtitle1 style={styles.name}>Kristin Evans </Subtitle1>
                </View>
              </View>
            <View style={styles.rightSide}>
             <Button title="Message"  buttonStyle={styles.extraSmallButton} />   
             </View>
             </View>
             </TouchableItem>
      </View>
                    <View style={styles.divider}>
        <View style={[styles.circleMask, styles.leftCircle]} />
        <View style={styles.dividerLine} />
        <View style={[styles.circleMask, styles.rightCircle]} />
      </View>
<View style={styles.header}>
        <View>
         {merchant === "chef" && (<Subtitle2 style={styles.orderNumber}>{`Booking #${orderNumber}`}</Subtitle2>)}
{merchant === "baker" && (<Subtitle2 style={styles.orderNumber}>{`Booking #${orderNumber}`}</Subtitle2>)}
        {merchant === "bartender" && (<Subtitle2 style={styles.orderNumber}>{`Bartender Booking #${orderNumber}`}</Subtitle2>)}
          <Caption>{orderDate}</Caption>
        </View>
        <View style={styles.flexEnd}>
          <Subtitle1>{`Your Total: $ ${(renderOrderItemsTotal(orderItems) - (renderOrderItemsTotal(orderItems) * .08)).toFixed(2)}`}</Subtitle1>
          <Subtitle1>Fee: ${(renderOrderItemsTotal(orderItems) * .08).toFixed(2)}</Subtitle1>
        </View>
      </View>

      <View style={styles.divider}>
        <View style={[styles.circleMask, styles.leftCircle]} />
        <View style={styles.dividerLine} />
        <View style={[styles.circleMask, styles.rightCircle]} />
      </View>

      <View style={styles.pv8}>
        {orderItems.map((item, index) => (
          <View key={index.toString()} style={styles.itemContainer}>
            <TouchableItem activeOpacity={activeOpacity}>
              <View style={styles.item}>
                <Subtitle2>{item.name}</Subtitle2>
                <Subtitle2>{`$ ${item.price}`}</Subtitle2>
              </View>
            </TouchableItem>
          </View>
        ))}
      </View>

      {orderStatus === 'on-the-way' && (
        <View style={styles.footer}>
          <View>
            <Subtitle2>Status</Subtitle2>
            <Subtitle2 style={styles.delivered}>Confirmed</Subtitle2>
          </View>
         
        </View>
      )}

      {orderStatus === 'pending' && (
<Fragment>
        <View style={styles.footer}>
          <View>
        <Subtitle2>Status</Subtitle2>
            <Subtitle2 style={styles.pending}>Pending Approval</Subtitle2>
          </View>
<View>
        <Subtitle2>Expires In:</Subtitle2>
            <Subtitle2 style={styles.expires}>48 Hours</Subtitle2>
          </View>
        </View>
<View style={styles.footer}>
          <View>
        <Button
            declineOnPress={declineOnPress}
            title="Decline"
            color={Colors.secondaryColor}
            buttonStyle={styles.extraSmallButton}
          />
          </View>
        <Button
            approveOnPress={approveOnPress}
            title="Approve"
            color={Colors.priimaryColor}
            buttonStyle={styles.extraSmallButton}
          />

        </View>

</Fragment>
      )}
      {orderStatus === 'delivered' && (
        <View style={styles.footer}>
          <View>
            <Subtitle2>Status</Subtitle2>
            <Subtitle2 style={styles.delivered}>Completed</Subtitle2>
          </View>
        </View>
      )}
    </View>
  </View>
);

export default OrderItemB;
