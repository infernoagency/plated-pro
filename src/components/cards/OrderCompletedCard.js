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
import { Caption, Subtitle1, Subtitle2 } from '../text/CustomText';
import TouchableItem from '../TouchableItem';

// import colors. layout
import Colors from '../../theme/colors';
import Layout from '../../theme/layout';
import StarRating from "../../components/starrating/StarRating";

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
  }
});

const renderOrderItemsTotal = (items) => {
  const total = items.reduce((prev, next) => prev + next.price, 0);
  return total;
};

// OrderItemA Props
type Props = {
  onPress: () => {},
  activeOpacity: number,
  orderNumber: number,
  orderDate: string,
  merchant: string,
  orderItems: Array,
  orderStatus: string
};

// OrderItemA
const OrderItemA = ({
  onPress,
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
        <View>
          <Subtitle2 style={styles.orderNumber}>{`${merchant} Booking #${orderNumber}`}</Subtitle2>
          <Caption>{orderDate}</Caption>
        </View>
        <View style={styles.flexEnd}>
          <Subtitle1>{`$ ${renderOrderItemsTotal(orderItems)}`}</Subtitle1>
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
            <TouchableItem onPress={onPress} activeOpacity={activeOpacity}>
              <View style={styles.item}>
                <Subtitle2>{item.name}</Subtitle2>
                <Subtitle2>{`$ ${item.price}`}</Subtitle2>
              </View>
            </TouchableItem>
          </View>
        ))}
      </View>
{orderStatus === 'declined' && (
<Fragment>
        <View style={styles.footer}>
          <View>
        <Subtitle2>Status</Subtitle2>
            <Subtitle2 style={styles.pending}>Declined</Subtitle2>
          </View>
<View>
<Subtitle2>Refunded</Subtitle2>
          <Subtitle1 style={{textAlign: 'right'}}>${(renderOrderItemsTotal(orderItems))}</Subtitle1>
        </View>
</View>

</Fragment>
      )}

      {orderStatus === 'delivered' && (
        <View style={styles.footer}>
          <View>
            <Subtitle2>Status</Subtitle2>
            <Subtitle2 style={styles.delivered}>Completed</Subtitle2>
          </View>
 <StarRating rating={4} starColor={Colors.primaryColor} starSize={16} />
        </View>
      )}
    </View>
  </View>
);

export default OrderItemA;
