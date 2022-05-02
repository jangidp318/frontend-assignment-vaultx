import * as React from 'react';
import { Text, View, StyleSheet, Image, Header,TouchableOpacity,ScrollView,Footer,TouchableHighlight } from 'react-native';
import { MaterialIcons,MaterialCommunityIcons,Entypo,Feather,Ionicons,FontAwesome,FontAwesome5  } from '@expo/vector-icons';
import {Card} from 'react-native-paper';

import {Calendar, CalendarList, Agenda,Arrow} from 'react-native-custom-calendars';

export default function BannerPage() {
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
        <Text style={{fontSize:24,fontFamily:'Aileron',margin:20}}>Today, March 25</Text>
      <View style={styles.eventContainer}>
        <View style={{padding: 10, borderWidth:3, borderRadius:25,width:50,height:50,justifyContent:"center",alignItems:'center',borderColor:'#FF602E',marginTop:5}}>
          <FontAwesome5 name="percent" size={24} color="#FF602E" />
        </View>
        <View style={styles.activeHPEventCard}>
          <Text style={styles.cardText}>{'20% of on ICICI Debit\nCards'}</Text>
          <View style={{marginVertical:20, flexDirection:'row', alignItems:'center'}}>
          <Ionicons name="location-sharp" size={40} color="white" />
          <Text style={{fontFamily:'Aileron', fontSize:18, color:'white'}}>  Amazon</Text>
          </View>
          <Text style={{color:'white',fontSize:14}}>Description</Text>
          <Text style={{fontSize:18,color:'white',marginVertical:20}}>{'This Offer applies only on ICICI Debit Cards Payments made on Amazon'}</Text>
          <TouchableOpacity style={styles.inviteButton}>
            <Text style={{fontSize:14, fontWeight:'bold',color:'#FF602E'}}>Invite</Text>
          </TouchableOpacity>

        <View style={{flexDirection:'row', marginTop:50,justifyContent:'space-between'}}>
          <TouchableOpacity style={{padding:15,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={{padding:15,justifyContent:'center',alignItems:'center',}}>
            <Text style={{color:'white',fontSize:18,fontWeight:'bold',}}>Reminder On</Text>
          </TouchableOpacity>
        </View>
        </View>
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
    paddingBottom:0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
    
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
  inviteButton:{
    backgroundColor:'white',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center', 
    padding:15,
    width:100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  }
});
