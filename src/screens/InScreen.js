import React from "react";

import {useState, useEffect} from "react";
import Rating from "./components/Rating";
import RatingNote from "./components/RatingNote";
import RatingNotes from "./components/RatingNotes";
import BottomSheet from "./components/BottomSheet";

import { Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native'

import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import ins from "../assets/data/ins";
import Influencers from "./components/Influencers";

import { GestureHandlerRootView } from "react-native-gesture-handler";



const InScreen = () => {


    const [defaulRating, setdefaultRating] = useState(2)
    const [maxRating, setmaxRating] = useState([1,2,3,4,5])

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
        <GestureHandlerRootView style={{flex: 1}}>
        <ScrollView>
        <SafeAreaView style={styles.container}>

            <View style={styles.root}>
                <View style={styles.iinfo}>
                    <View>
                        <Image source={{ uri: influencer.image}} style={[styles.image, { aspectRatio: ratio }]}/>

                        <View style={{marginTop: 20, flexDirection: "row"}}>
                            <Icon name="message1" size={25} color="black" style={{marginLeft: 15}} /> 
                            <Icon name="staro" size={25} color="black"  style={{position: 'absolute', right: 0, marginRight: 15}}/> 
                        </View>
                        <Text style={{fontSize:20, fontWeight: "bold", marginLeft: 150, marginBottom: 15, marginTop: -30}}>{influencer.iname}</Text>

                    </View>

                    <Pressable onPress={goBack} style={styles.backBtn}>
                        <Icon name="left" size={20} color="black" /> 
                    </Pressable>

                    <View>
                        <Text style={styles.about}>{influencer.about}</Text>
                    </View>

                    <View style={styles.socials}>
                        <Image source={{ uri: influencer.social1}}  style={[styles.social]}/>
                        <Image source={{ uri: influencer.social2}}  style={[styles.social]}/>
                        <Image source={{ uri: influencer.social3}}  style={[styles.social]}/>
                    </View>

                </View>

                <View style={styles.notation}>
                        <View style={styles.rating}>
                            <Rating />
                            <Text style={styles.note}>{defaulRating + '/' + maxRating.length}</Text>
                            <Icon name="infocirlceo" size={25} color="black" style={styles.icon} /> 
                            <Text style={{margin: 5}}>Avis 428</Text>
                        </View>
                </View>
            <View>
              
                <View style={styles.usersComments}>
                        <View style={styles.usersCommentCard}>
                            <View style={styles.userComment}>
                                <View style={{ flexDirection : "row"}}>
                                    <Image source={{ uri: influencer.social3}} style={[styles.userProfile]}/>
                                    <Text style={styles.uname}>Utilisateur1</Text>
                                </View>
                            </View>
                               
                            <View style={{ borderBottomColor: '#F2F2F5', borderBottomWidth: 1, marginLeft: 20}}/>
                            
                            <View style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
                                <RatingNotes />
                            </View>
                            <View>
                                <Text style={styles.comentary}>
                                    Boutique en ligne de vêtements bio, naturels et écologiques en laine, soie, lin, chanvre, coton bio pour bébé, enfant et femme. 
                                </Text>
                            </View>
                        </View>

                        <View style={styles.usersCommentCard}>
                            <View style={styles.userComment}>
                                <View style={{ flexDirection : "row"}}>
                                    <Image source={{ uri: influencer.social3}} style={[styles.userProfile]}/>
                                    <Text style={styles.uname}>Utilisateur2</Text>
                                </View>
                            </View>
                               
                            <View style={{ borderBottomColor: '#F2F2F5', borderBottomWidth: 1, marginLeft: 20}}/>
                            
                            <View style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
                                <RatingNotes />
                            </View>
                            <View>
                                <Text style={styles.comentary}>
                                    Boutique en ligne de vêtements bio, naturels et écologiques en laine, soie, lin, chanvre, coton bio pour bébé, enfant et femme. 
                                </Text>
                            </View>
                        </View>

                        <View style={styles.usersCommentCard}>
                            <View style={styles.userComment}>
                                <View style={{ flexDirection : "row"}}>
                                    <Image source={{ uri: influencer.social3}} style={[styles.userProfile]}/>
                                    <Text style={styles.uname}>Utilisateur3</Text>
                                </View>
                            </View>
                               
                            <View style={{ borderBottomColor: '#F2F2F5', borderBottomWidth: 1, marginLeft: 20}}/>
                            
                            <View style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
                                <RatingNotes />
                            </View>
                            <View>
                                <Text style={styles.comentary}>
                                    Boutique en ligne de vêtements bio, naturels et écologiques en laine, soie, lin, chanvre, coton bio pour bébé, enfant et femme123. 
                                </Text>
                            </View>
                        </View>

                        <Influencers ins={ins}/>

                    </View>
                </View>
            </View>
        </SafeAreaView>
        </ScrollView>

        <BottomSheet />
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#000',
        justifyContent: 'center',
        marginHorizontal: 0,
      },
      containery: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'c'
      },
    RatingNote : {
        marginTop : 20
      },
      note: {
        marginTop: 1,
        marginLeft: 5,
        marginRight: 10,
        marginBottom: 1,
        padding: 5,
      },
    root: {
        height: "100%",
        //borderTopLeftRadius: 50,
        //borderTopLeftRadius: 50,
        border: 0,
        marginTop: 0,
    },
    backBtn : {
        backgroundColor: 'white',
        padding: 6,
        borderRadius: 30,
        position: "absolute",
        top: 20,
        left: 10,
    },
    iinfo : {
        borderColor: '#FFF',
        backgroundColor: "#fff",
        borderWidth: 3,
        //borderRadius: 30,

        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    usersComments: {
        marginTop : 10,
    },
    usersCommentCard : {
        marginTop : 0,
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: 5,
    },
    userComment : {
        flexDirection: "row"
    },
    comentary : {
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    date : {
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
    },
    uname : {
        fontWeight: "bold",
        fontSize: 13,
        marginRight: 10,

        marginTop: 25
    },
    comments : {
        backgroundColor: "green",
        fontWeight: "bold",
        fontSize: 15,
    },
    input: {
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 0,
        borderWidth: 1,
        borderColor: '#fff',
        paddingLeft: 30,
      },
    image: {
        width:"100%",
        //height: "50%",
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
        
        //borderRadius: 300
    },
    rating: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 25,
        paddingLeft: 40,
        flexDirection: "row",
        marginTop: 3

    },
    iname: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25
    },

    about: {
        textAlign: "center",
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30
    },
    socials: {
        marginTop: 0,
        flexDirection: "row",
        //backgroundColor: "red",
        padding: 0,
        flex: 1,
        justifyContent: 'center',
        padding: 15
    },
    social: {
        padding: 0,
        width: 40,
        height: 40,
        margin: 3
    },
    userProfile :{
        padding: 0,
        width: 35,
        height: 35,
        margin: 5,
        margin: 17
    },
    notfound : {
        marginLeft: 120,
        marginRight: 120,
        marginTop: 200,
        fontWeight: "bold"
    },


    heartBtns: {
        backgroundColor: '#D3CFD4',
        position: 'absolute',
        bottom: 10,
        right: 10,
        padding: 5,
        borderRadius: 50,
    },
 
});

export default InScreen;