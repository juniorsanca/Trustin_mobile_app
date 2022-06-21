import React from "react";

import {useState, useEffect} from "react";
import Rating from "./components/Rating";
import RatingNote from "./components/RatingNote";

import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native'

import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import ins from "../assets/data/ins";


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
        <ScrollView>

        <SafeAreaView style={styles.container}>
            <View style={styles.root}>
                <View style={styles.iinfo}>

                    <View>
                        <Image 
                            source={{ uri: influencer.image}} 
                            style={[styles.image, { aspectRatio: ratio }]}/>
                        <Text style={styles.iname}>{influencer.iname}</Text>
                    </View>

                    <Pressable onPress={goBack} style={styles.backBtn}>
                        <Icon name="left" size={25} color="white" style={styles.icon} /> 
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
                        </View>
                    </View>
            <View>
              
                <View style={styles.usersCommentCard}>
                            <View style={styles.userComment}>
                                <Image source={{ uri: influencer.social1}}  style={[styles.social]}/>
                                <Text style={styles.uname}>Junior SANCA</Text>
                                <View style={styles.RatingNote}>
                                    <RatingNote />
                                </View>
                            </View>

                            <View style={{ borderBottomColor: '#F2F2F5', borderBottomWidth: 1}}/>
                            <TextInput style={styles.input} placeholder="Écrire un avis" />                            
                </View>

                <View style={styles.usersComments}>
                        <View style={styles.usersCommentCard}>
                            <View style={styles.userComment}>
                                <View style={{ flexDirection : "row"}}>
                                    <Image source={{ uri: influencer.social3}} style={[styles.social]}/>
                                    <Text style={styles.uname}>Utilisateur12</Text>
                                </View>
                            </View>
                               
                            <View style={{ borderBottomColor: '#F2F2F5', borderBottomWidth: 1, marginLeft: 20}}/>
                            
                            <View style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
                                <RatingNote />
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
                                    <Image source={{ uri: influencer.social3}} style={[styles.social]}/>
                                    <Text style={styles.uname}>Utilisateur12</Text>
                                </View>
                            </View>
                               
                            <View style={{ borderBottomColor: '#F2F2F5', borderBottomWidth: 1, marginLeft: 20}}/>
                            
                            <View style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
                                <RatingNote />
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
                                    <Image source={{ uri: influencer.social3}} style={[styles.social]}/>
                                    <Text style={styles.uname}>Utilisateur12</Text>
                                </View>
                            </View>
                               
                            <View style={{ borderBottomColor: '#F2F2F5', borderBottomWidth: 1, marginLeft: 20}}/>
                            
                            <View style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
                                <RatingNote />
                            </View>
                            <View>
                                <Text style={styles.comentary}>
                                    Boutique en ligne de vêtements bio, naturels et écologiques en laine, soie, lin, chanvre, coton bio pour bébé, enfant et femme. 
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 0,
      },
    RatingNote : {
        marginTop : 0
      },
    notation : {
        margin : 10,
      },
      note: {
        marginTop: 5,
        marginLeft: 25,
        marginBottom: 5,
        padding: 10,
        borderColor: '#8A8883',
        borderWidth: 1,
        borderRadius: 20
      },
    root: {
        height: "100%",
        //borderTopLeftRadius: 50,
        //borderTopLeftRadius: 50,
        border: 50,
        marginTop: 0,
    },
    backBtn : {
        position: "absolute",
        top: 20,
        left: 10,
    },
    iinfo : {
        borderColor: '#FFF',
        borderWidth: 3,
        borderRadius: 30,

        //borderTopLeftRadius: 30,
        //borderTopRightRadius: 30,
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
        width: "100%",
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,

    },
    rating: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
        paddingLeft: 25,
        marginBottom: 5,
        flexDirection: "row",

    },
    iname: {
        textAlign: "center",
        margin:15,
        fontWeight: "bold",
        fontSize: 25
    },

    icon: {
        marginRight: 10
    },
    about: {
        textAlign: "center",
        margin: 15
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
        width: 50,
        height: 50,
        margin: 5
    },
    notfound : {
        marginLeft: 120,
        marginRight: 120,
        marginTop: 200,
        fontWeight: "bold"
    }
 
});

export default InScreen;