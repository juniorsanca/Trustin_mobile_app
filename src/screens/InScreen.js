import React from "react";

import {useState, useEffect} from "react";

import {
    Text,
    View,
    StyleSheet,
    Image
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
        return  <Text>influencer not found</Text>;
    }

    return (
        <SafeAreaView style={{}}>
            <View style={styles.root}>

                <View style={styles.arrowleft} >
                    <Pressable onPress={goBack}>
                        <Icon name="arrowleft" size={20} color="black" style={styles.icon} /> 
                    </Pressable>
                    <Text>Influenceurs</Text>
                </View>
         
                <Image 
                    source={{ uri: influencer.image}} 
                    style={[styles.image, { aspectRatio: ratio }]}/>
                <Text style={styles.title}>{influencer.title}</Text>
            </View>
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
        borderRadius : 50,
        marginTop: 10
        //height: 300
    },
    title: {
        textAlign: "center",
        margin:15,
        fontWeight: "bold",
        fontSize: 15
    },
    arrowleft: {
        flexDirection: "row"
    },
    icon: {
        marginRight: 10
    }
});

export default InScreen;