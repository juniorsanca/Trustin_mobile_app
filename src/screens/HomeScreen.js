import React from "react";
import {
    Text, 
    View,
    StyleSheet, 
    Dimensions,
    TextInput,
    Image,
    ScrollView
} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
//import { ScrollView } from "react-native-gesture-handler";
//import { color } from "react-native-reanimated";
import In from "./components/In";
import ins from "../assets/data/ins";



const HomeScreen = ({navigation}) => {

    //const width= (Dimensions.get('window').width/2)-20;

    return (
            <View style={styles.body}>
                <View style={styles.parent}>
                    <Text style={[styles.search]} >Parcourir</Text>
                    <Text style={[styles.registered]} >Enregistré</Text>
                </View>

                <View style={{marginTop: 15, alignItems: "center"}}>
                    <TextInput style={styles.input} placeholder="Trouver un T'in" />
                </View>

                <ScrollView>
                    <View style={styles.container}>
                        {/*<FlatList data={ins} renderItem={({item}) => <In in={item} />} numColumns={2} />*/}
                        <View style={styles.column}>
                            {/*
                                <In in={ins[1]} />
                                <In in={ins[2]} />
                                <In in={ins[1]} />
                            */}
                            {ins
                                .filter((item, index) => index % 2 === 0)
                                .map((ins) => (
                                    <In in={ins} />
                            ))}
                        </View>

                        <View style={styles.column}>
                            {ins
                                .filter((item, index) => index % 2 === 1)
                                .map((ins) => (
                                    <In in={ins} />
                                ))}
                        </View>

                    </View> 
                </ScrollView>
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
        //alignItems:"center"
    },
    registered: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 40,
        marginRight: 85,
    },
    parent: {
        alignItems:"center",
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
    container: {
        flexDirection: "row",
        padding: 10,
        //flexDirection: "row"
    },
    column: {
        flex: 1,
    }
   
});
export default HomeScreen;