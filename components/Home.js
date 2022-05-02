import * as React from 'react';
import { Text, View, StyleSheet, Image, Header,TouchableOpacity,ScrollView } from 'react-native';
import { MaterialIcons,MaterialCommunityIcons,Entypo,Feather,Ionicons,FontAwesome  } from '@expo/vector-icons';
import {Card} from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function CalHome() {
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
      <View style={styles.eventContainer}>
        <View style={styles.eventday}>
          <Text style={{fontSize:14,fontFamily:'Aileron'}}>Sat</Text>
          <Text style={styles.date}>28</Text>
        </View>
        <TouchableOpacity style={styles.inactiveEventCard}>
          <Text style={styles.cardText}>{'Makar Sankranti Festive Offer'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={{fontSize:14,fontFamily:'Aileron',marginLeft:80}}>25 - 28 March</Text>

      <View style={styles.eventContainer}>
        <View style={styles.eventday}>
          <Text style={{fontSize:14,fontFamily:'Aileron'}}>Wed</Text>
          <View style={{backgroundColor:'#FF602E',borderRadius:20,padding:5}}>
          <Text style={{fontSize:22,fontFamily:'Aileron',fontWeight:'bold',color:'white'}}>25</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.activeHPEventCard}>
          <Text style={styles.cardText}>{'20% of on ICICI Debit Cards'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.eventContainer}>
        <View style={styles.eventday}>
          <Text style={{fontSize:14,fontFamily:'Aileron'}}>Wed</Text>
          <Text style={styles.date}>25</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.activeLPEventCard}>
            <Text style={styles.cardText}>{'Holi Festive Offer'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.activeLPEventCard}>
            <Text style={styles.cardText}>{'20% of on HDFC Net Banking'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.activeHPEventCard}>
            <Text style={styles.cardText}>{'Sales on D-Mart Store'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={{fontSize:14,fontFamily:'Aileron',marginLeft:80}}>25 - 30 April</Text>
      
      <View style={styles.eventContainer}>
        <View style={styles.eventday}>
          <Text style={{fontSize:14,fontFamily:'Aileron'}}>Sat</Text>
          <Text style={styles.date}>25</Text>
        </View>
        <TouchableOpacity style={styles.activeHPEventCard}>
          <Text style={styles.cardText}>{'Navratri Festive Offer'}</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
{/*Footer*/}
      <View style={styles.footer}>
        <Feather  style={{alignSelf:'center'}} name="calendar" size={24} color="black" onPress={()=> navigation.navigate('CalMonth')} />
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
    flex:1
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
  eventContainer:{
    flexDirection:"row",
    padding:10,
  },
  inactiveEventCard:{
    flex:1,
    padding:20,
    backgroundColor:'#7E858E',
    borderRadius:15,
    marginBottom:10
    
  },
  activeHPEventCard:{
    flex:1,
    padding:20,
    backgroundColor:'#FF602E',
    borderRadius:15,
    marginBottom:10,
    
  },
  activeLPEventCard:{
    flex:1,
    padding:20,
    backgroundColor:'#3FBCFF',
    borderRadius:15,
    marginBottom:10
  },
  cardText:{
    fontFamily:"Aileron",
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  },
  eventday:{
    alignItems:'center',
    margin:10,
  },
  date:{
    fontSize:24,
    fontFamily:'Aileron',
    fontWeight:'bold'
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
  }
});
