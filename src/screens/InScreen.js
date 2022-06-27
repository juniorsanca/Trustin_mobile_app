import React, { useCallback, useRef } from "react";

import {useState, useEffect} from "react";
import Rating from "./components/Rating";
import RatingNote from "./components/RatingNote";
import RatingNotes from "./components/RatingNotes";
import { Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Button
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native'

import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import ins from "../assets/data/ins";
import Influencers from "./components/Influencers";

import { Modalize } from 'react-native-modalize';
import { Colors } from "react-native/Libraries/NewAppScreen";
import RNTextArea from "@freakycoder/react-native-text-area";
import { useScrollToTop } from '@react-navigation/native';


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

    const modalizeRef = useRef(null);
    const modalizeRefCommentForm = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };
    const onClose = () => {
        modalizeRef.current?.close();
    }

    //userComment Form
    const onOpenCommentForm = () => {
        modalizeRefCommentForm.current?.open();
    };
    const onCloseCommentForm = () => {
        modalizeRefCommentForm.current?.close();
    }

    const homeRef = useRef(null);
    useScrollToTop(homeRef);

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={{marginBottom: -38}} ref={homeRef}>
            <View style={styles.root}>
                <View style={styles.iinfo}>
                    <View>
                        <Image source={{ uri: influencer.image}} style={[styles.image, { aspectRatio: ratio }]}/>

                        <View style={{marginTop: 20, flexDirection: "row"}}>

                            <TouchableOpacity>
                                <Icon name="message1" onPress={onOpen} size={25} color="black" style={{marginLeft: 15}} /> 
                            </TouchableOpacity>

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

                <View>
                        <View style={styles.rating2}>
                            <Rating />
                            <Text style={styles.note}>{defaulRating + '/' + maxRating.length}</Text>
                            <Icon name="infocirlceo" size={25} color="black" style={styles.icon} /> 
                            <Text style={{margin: 5}}>Avis 428</Text>
                        </View>
                </View>

                <View>
                        <View style={styles.rating}>
                            <View style={styles.usersCommentCard}>
                            <Text style={{left: 55, marginTop:10, fontWeight: "bold", fontSize: 20}}>Patagez vos expériences</Text>

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
                                        Boutique en ligne de vêtements bio, naturels et écologiques en laine,
                                        soie, lin, chanvre, coton bio pour bébé, enfant et femme. 
                                    </Text>
                                </View>


                                <View style={styles.userComment}>
                                    <View style={styles.commentForm}>
                                        <Image source={{ uri: influencer.social3}} style={[styles.userProfile]}/>
                                        <TouchableOpacity onPress={onOpenCommentForm}>
                                            <Text style={styles.inputUserComment}>Ajouter un commentaire </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{marginLeft: 100, marginRight: 100}}>
                                    <TouchableOpacity style={{ backgroundColor:"#DFE2E8", borderRadius: 20, }} onPress={onOpen}>
                                            <Text style={{ textAlign: "center", fontSize: 15, paddingVertical: 12, color: "black",}}> 
                                                Voir plus
                                            </Text>                                 
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>


                <View style={styles.moreCreators} >
                    <Text style={{padding: 18, fontSize: 18, fontWeight: "bold", textAlign:"center"}}> Plus d'influenceurs similaires</Text>
                    <Influencers ins={ins} />
                </View>

            </View>
            </ScrollView>

            <Modalize ref={modalizeRef} scrollViewProps={{showsVerticalScroollIndicator: false}}
                    onScrollBeginDrag={false}
                    withHandle={false}
                    HeaderComponent= {
                        <View>
                            <TouchableOpacity onPress={onClose} style={styles.modalHeader}>
                                <View style={styles.barClose}></View>
                            </TouchableOpacity>
                        </View>
                    }
                       modalHeight={700}
                       snapPoint={900}>

                <ScrollView style={styles.modal}>
                <View style={styles.usersComments}>
    
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
                </ScrollView>
            </Modalize>


            <Modalize ref={modalizeRefCommentForm} modalHeight={300} snapPoint={900}>
                <View>
                    <View>
                        <RNTextArea style={styles.textareaForm}
                            maxCharLimit={300}
                            placeholderTextColor="lightgrey"
                            exceedCharCountColor="#990606"
                            placeholder="Écrivez votre avis ici. Parlez de votre expérience sans utiliser de langage offensant. Laissez un témoignage honnête, utile et constructif."
                            //onChangeText={(text: string) => console.log("Text: ", text)}
                            />
                    </View>
                    <View style={{marginTop: -36, marginLeft: 150}}>
                        <Button onPress title="Publier"color="grey"/>
                    </View>
                </View>
            </Modalize>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#000',
        justifyContent: 'center',
        marginHorizontal: 0,
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
        padding: 5,
        borderRadius: 30,
        position: "absolute",
        top: 20,
        left: 15,
    },
    iinfo : {
        borderColor: '#FFF',
        backgroundColor: "#fff",
        borderWidth: 3,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    usersComments: {
        marginTop : 10,
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
        padding: 20,
        flexDirection: "row",
        marginTop: 1,
        marginBottom: 5,
        borderRadius: 20

    },

    rating2: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 35,
        flexDirection: "row",
        marginTop: 1,
        marginBottom: 2,
        borderRadius: 0

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
    modal:{
        
        height: 800,
        paddingBottom: 125,
        paddingTop: 0,
        //backgroundColor: "white"
    },
    modalHeader: {
        padding: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"
    },
    barClose: {
        width: '50%',
        height: 5,
        borderRadius: 50,
        backgroundColor: Colors.black,
    },
    moreCreators: {
        backgroundColor: "white", 
        borderRadius: 20,
    },
    inputUserComment: {
        height: 40,
        marginTop: 15,
        borderWidth: 0,
        paddingTop: 10,
        Left: 10,
        Right: 10,

        color: "lightgrey"
      },
      commentForm: {
        flexDirection : "row", 
        marginTop:10,
      },
      textareaForm: {
        //backgroundColor: "red",
        height: 250,

      }
});

export default InScreen;