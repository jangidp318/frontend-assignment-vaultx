import * as React from 'react';
import { Text, View, StyleSheet, Image, Header,TouchableOpacity,ScrollView,Footer } from 'react-native';
import { MaterialIcons,MaterialCommunityIcons,Entypo,Feather,Ionicons,FontAwesome,FontAwesome5  } from '@expo/vector-icons';
import {Card} from 'react-native-paper';

import {Calendar, CalendarList, Agenda,Arrow} from 'react-native-custom-calendars';
import { useNavigation } from '@react-navigation/native';

export default function CalMonth() {
  
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
{/* Header */}
      <View style={styles.header}>
        <Image style={styles.menuIcon} source={require('../assets/menu.png')}/>
        <MaterialCommunityIcons name="chevron-left" size={20} color="gray" />
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:20}}>March</Text>
          <Text style={{fontSize:10,color:'gray'}}>2020</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={20} color="gray" />
        <MaterialIcons name="notifications-none" size={30} color="black" />
      </View>
{/* Content */}
      <ScrollView>
          <Calendar
  // Initially visible month. Default = now
  current={'2022-05-25'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2022-05-01'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2022-05-30'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={day=>{console.log('day pressed')}}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day=>{console.log('day long pressed')}}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  // Hide month navigation arrows. Default = false
  hideArrows={true}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  renderArrow={direction => <MaterialCommunityIcons name="chevron-left" size={20} color="gray" />}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={false}
  // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={false}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={false}
  // Show week numbers to the left. Default = false
  showWeekNumbers={false}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  // Disable left arrow. Default = false
  disableArrowLeft={true}
  // Disable right arrow. Default = false
  disableArrowRight={true}
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  disableAllTouchEventsForDisabledDays={false}
  // Replace default month and year title with custom one. the function receive a date as parameter
  renderHeader={date => {
    /*Return JSX*/
  }}
  // Enable the option to swipe between months. Default = false
  enableSwipeMonths={false}
  markedDates={{
    '2022-05-11': {disabled:true},
    '2022-05-31': {disabled:false},
    '2022-05-28': {marked: true, dotColor: '#FF602E',activeOpacity: 0},
    '2022-05-25': {selected:true,selectedColor: '#FF602E',}
  }}
/>

      <Text style={{fontSize:24,fontFamily:'Aileron',margin:20}}>Today, March 25</Text>
      <View style={styles.eventContainer}>
        <View style={{padding: 10, borderWidth:3, borderRadius:25,width:50,height:50,justifyContent:"center",alignItems:'center',borderColor:'#FF602E',marginTop:5}}>
          <FontAwesome5 name="percent" size={24} color="#FF602E" />
        </View>
        <TouchableOpacity style={styles.activeHPEventCard} onPress={()=> navigation.navigate('BannerPage')}>
          <Text style={styles.cardText}>{'20% of on ICICI Debit Cards'}</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
{/*Footer*/}
      <View style={styles.footer}>
        <Feather  style={{alignSelf:'center'}} name="calendar" size={24} color="black" />
        <TouchableOpacity style={styles.addButton}>
          <FontAwesome name="plus" size={24} color="white" />
        </TouchableOpacity>
        <Ionicons style={{alignSelf:'center'}}name="md-search" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white'
  },
  header:{
    flexDirection:"row",
    marginTop:20,
    padding:10,
    justifyContent:"space-between",
  },
  footer:{
    flexDirection:"row",
    padding:20,
    justifyContent:"space-between",
    borderTopColor:'#d3d3d3',
    borderTopWidth:1,
  },
  menuIcon:{
    height:30,
    width:30,
  },
  addButton:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#FF602E",
    width:120,
    height:50,
    borderRadius:15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  activeHPEventCard:{
    flex:1,
    padding:20,
    backgroundColor:'#FF602E',
    borderRadius:15,
    marginLeft:10,
    
  },
  cardText:{
    fontFamily:"Aileron",
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  },
  eventContainer:{
    flexDirection:"row",
    padding:10,
  },
});
