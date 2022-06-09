import React from "react";

import {useState, useEffect} from "react";
import Rating from "./components/Rating";

import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import { Directions } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native'

import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import ins from "../assets/data/ins";


const InScreen = () => {
    //const influencer = ins[0];
    const [ratio, setRatio] = useState(1);

    const navigation = useNavigation();
    const route = useRoute();
    //console.log(route);

    const inId = route.params?.id;
    const influencer = ins.find((p) => p.id === inId);

    useEffect(() => {
        if(influencer?.image){
            Image.getSize(influencer.image, (width, height) => setRatio(width / height));
        }
    }, [influencer]);


    const goBack = () => {
        navigation.goBack();
    };

    if (!influencer) {
        return  <Text style={styles.notfound}>Influencer not found</Text>;
    }

    return (
        <SafeAreaView style={{}}>
            <ScrollView>
            <View style={styles.root}>

                <View style={styles.arrowleft} >
                    <Pressable onPress={goBack}>
                        <Icon name="arrowleft" size={20} color="black" style={styles.icon} /> 
                    </Pressable>
                    <Text>Influenceurs</Text>
                </View>
         
                <View>
                    <Image 
                        source={{ uri: influencer.image}} 
                        style={[styles.image, { aspectRatio: ratio }]}/>
                    <Text style={styles.iname}>{influencer.iname}</Text>
                </View>

                <View>
                    <Text style={styles.about}>{influencer.about}</Text>
                </View>

                <View style={styles.socials}>
                    <Image source={{ uri: influencer.social1}}  style={[styles.social]}/>
                    <Image source={{ uri: influencer.social2}}  style={[styles.social]}/>
                    <Image source={{ uri: influencer.social3}}  style={[styles.social]}/>
                </View>

                <View>
                    <Rating />
                </View>

            </View>
            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    root: {
        height: "100%",
        borderTopLeftRadius: 50,
        borderTopLeftRadius: 50,
        margin: 30,

    },
    image: {
        width: "100%",
        borderRadius : 40,
        marginTop: 10
        //height: 300
    },
    iname: {
        textAlign: "center",
        margin:15,
        fontWeight: "bold",
        fontSize: 15
    },
    arrowleft: {
        flexDirection: "row",
        marginBottom: 20
    },
    icon: {
        marginRight: 10
    },
    about: {
        textAlign: "center"
    },
    socials: {
        flexDirection: "row",
        //backgroundColor: "red",
        padding: 0,
        marginTop: 5,
        marginLeft: 50,
        marginRight: 30,
    },
    social: {
        padding: 0,
        width: 50,
        height: 50,
        margin: 10
    },
    notfound : {
        marginLeft: 120,
        marginRight: 120,
        marginTop: 200,
        fontWeight: "bold"
    }
 
});

export default InScreen;