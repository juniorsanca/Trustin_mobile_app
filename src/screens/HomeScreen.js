import React from "react";
import {
    Text, 
    View,
    StyleSheet, 
    Dimensions,
    TextInput,
} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import Card from "./Card";

const items = [
    {
        id: 1,
        aspectratio: 150/200,
        color:'#F5A64F',
        //image: require('../images/img_slide1.png'),

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
        color:'#CA4172'
    },
    {
        id: 6,
        aspectratio: 500/400,
        color:'#CA4171'
    },
    {
        id: 7,
        aspectratio: 1040/500,
        color:'#F5A64F'
    },
    {
        id: 8,
        aspectratio: 2/1,
        color:'#F5A64F'
    },
    {
        id: 9,
        aspectratio: 1,
        color:'#F5A64F'
    },
    {
        id: 10,
        aspectratio: 375/400,
        color:'#CA4171'
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
                <View style={{marginTop: 10}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nom de l'entreprise"
                        //value=""
                    />
                </View>
                <View style={{marginTop: 10}}>
                    <ScrollView>
                        <View style={{flexDirection:'row'}}>
                            <View style={{marginRight: 5}}>
                                {
                                    items.filter((_,i)=>i%2===0).map(item=><Card color={item.color} aspectratio={item.aspectratio} width={width} key={item.id}/>)
                                }
                            </View>
                            <View style={{marginLeft: 5}}>
                                {
                                    items.filter((_,i)=>i%2!==0).map(item=><Card color={item.color} aspectratio={item.aspectratio} width={width} key={item.id}/>)
                                }
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    search: {
        marginRight: 15,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 85,
        textAlign: 'center'
    },
    body: {
        padding:10,
        alignItems:"center"
    },
    registered: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 40,
        marginRight: 85,
        textAlign: ''
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