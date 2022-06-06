import React from "react";
import {
    Text, 
    View,
    StyleSheet, 
    Dimensions,
    TextInput,
    Image,
} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import In from "./components/In";

const items = [
    {
        id: 1,
        aspectratio: 170/200,
        color:'red',
        image: require('../images/img_slide1.png'),
        text: 'azerty',
    },
    {
        id: 2,
        aspectratio: 1,
        color:'#fff'
    },
    {
        id: 3,
        aspectratio: 120/100,
        color:'#000'
    },
    {
        id: 4,
        aspectratio: 200/150,
        color:'#CA4171'
    },
    {
        id: 5,
        aspectratio: 375/400,
        color:'violet'
    },
    {
        id: 6,
        aspectratio: 500/400,
        color:'#CA4171'
    },
    {
        id: 7,
        aspectratio: 600/500,
        color:'#F5A64F'
    },
    {
        id: 8,
        aspectratio: 1/1,
        color:'yellow'
    },
    {
        id: 9,
        aspectratio: 1,
        color:'green'
    },
    {
        id: 10,
        aspectratio: 315/400,
        color:'orange'
    },
    {
        id: 11,
        aspectratio: 375/400,
        color:'violet'
    },
    {
        id: 12,
        aspectratio: 500/400,
        color:'#CA4171'
    },
    {
        id: 13,
        aspectratio: 600/500,
        color:'#F5A64F'
    },
    {
        id: 14,
        aspectratio: 1/1,
        color:'yellow'
    },
    {
        id: 15,
        aspectratio: 1,
        color:'green'
    },
    {
        id: 16,
        aspectratio: 315/400,
        color:'orange'
    },

]

const HomeScreen = ({navigation}) => {

    const width= (Dimensions.get('window').width/2)-20;

    return (
            <View style={styles.body}>
                <View style={styles.parent}>
                    <Text style={[styles.search]} >Parcourir</Text>
                    <Text style={[styles.registered]} >Enregistré</Text>
                </View>

                <View style={{marginTop: 15}}>
                    <TextInput style={styles.input} placeholder="Trouver un T'in" />
                </View>

                <View style={styles.container}>
                    {/* In */}
                        <In 
                            in={{
                                title : "Cristiano",
                                image : "https://pbs.twimg.com/media/FK0JaziXEAQdpXn?format=jpg&name=large"
                            }}
                            />
                        <In  
                            in={{
                                title : "Adesanya",
                                image : "https://dicodusport.fr/blog/wp-content/uploads/2021/03/UFC-259-Israel-Adesanya-en-route-pour-marquer-lhistoire.png"
                            }}
                            />
                    {/* In */}
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    search: {
        flex: 1,
        marginRight: 15,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 85,
        textAlign: 'center'
    },
    body: {
        flex: 1,
        padding:10,
        alignItems:"center"
    },


    registered: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 40,
        marginRight: 85,
    },
    parent: {
        flexDirection: "row",
        justifyContent: "space-around",
      },

    input: {
        width:270,
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff',
        paddingLeft: 30,
      },
   
});
export default HomeScreen;