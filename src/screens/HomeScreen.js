import {
    Text, 
    View,
    StyleSheet, 
    TextInput,
    TouchableOpacity
} from 'react-native';
import ins from "../assets/data/ins";
import React from "react";
import Influencers from "./components/Influencers";


const HomeScreen = ({navigation}) => {

    return (
            <View style={styles.body}>
                <View style={styles.parent}>
                    <Text style={[styles.search]} >Parcourir</Text>
                    <Text style={[styles.registered]} >Enregistré</Text>
                </View>

                <View style={{margin: 15, alignItems: "center"}}>
                    <TextInput style={styles.input} placeholder="Trouver un T'in" />
                </View>
                <TouchableOpacity 
                                    style={[styles.btn]} 
                                    onPress={() => navigation.replace('ProfileScreen')}>
                                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                                        GET STARTED
                                    </Text>
                                </TouchableOpacity>

                <Influencers ins={ins} />
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
    },
    parent: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginLeft: 100,
        marginRight: 100,

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
        padding: 0,
        //flexDirection: "row"
    },
    column: {
        flex: 1,
    }
   
});
export default HomeScreen;