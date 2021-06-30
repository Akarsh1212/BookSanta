import React , {Component} from 'react'
import {StyleSheet , View , Text, TouchableOpacity} from 'react-native'
import {DrawerItems} from 'react-native-drawer'
import firebase from 'firebase'
export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style = {styles.drawersItemsContainer}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style = {styles.logoutContainer}>
                   <TouchableOpacity styles = {styles.logoutButton}
                   onPress = {()=>{
                       this.props.navigation.navigate('WelcomeScreen')
                       firebase.auth().signOut()
                   } 
                   }>
                    <Text>Log Out</Text>
                   </TouchableOpacity>
                </View>
            </View>
        )
    }
}