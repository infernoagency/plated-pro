import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import {
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
    date: {
        width: '100%',
        marginTop: 15,
        marginBottom: 15
    }
});

export default class Date extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2020-03-21"}
  }
 
  render(){
    return (
      <DatePicker
        style={styles.date}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2020-03-21"
        maxDate="2030-03-21"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}