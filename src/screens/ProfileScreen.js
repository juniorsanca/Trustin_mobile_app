import React, { useCallback, useRef } from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


import { Modalize } from 'react-native-modalize';
import { SafeAreaView } from "react-native-safe-area-context";


const ProfileScreen = ({navigation}) => {

    const modalizeRefMyReviews = useRef(null);

    const onOpen = () => {
        modalizeRefMyReviews.current?.open();
    };
    const onClose = () => {
        modalizeRefMyReviews.current?.close();
    }


    const modalizeRefBusiness = useRef(null);

    const onOpenBusiness = () => {
        modalizeRefBusiness.current?.open();
    };
    const onCloseBusiness = () => {
        modalizeRefBusiness.current?.close();
    }

    return (
        <SafeAreaView style={styles.container}>

        <ScrollView style={{marginBottom: -38}}>
            <View style={styles.header}>
                <Image source={{ uri: "https://juniorsanca.fr/img/profil.png" }} style={styles.image}/>
                <Text style={styles.title}>Junior</Text>

                <View>
                    <Text>
                        <Text>2</Text><Icon name="staro" size={20} color="orange" /> 
                        <Text>Avis</Text> | <Text>1</Text><Icon name="like2" size={20} color="blue"  style={{}}/><Text>Utile</Text>
                    </Text>
                </View>


                <View style={styles.usersCommentCard}> 

                    <View style={styles.insideCardZone}>
                        <Text style={{marginBottom: 20}}>
                            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page                        
                        </Text>
                        <TouchableOpacity onPress={onOpenBusiness}>
                            <Text style={{fontWeight: "bold", marginTop:20, fontSize: 20}}>Trustin Business</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onOpen}>
                            <Text style={{fontWeight: "bold", marginTop:20, fontSize: 20}}>Mes avis</Text>
                        </TouchableOpacity>
                        <Text style={{fontWeight: "bold", marginTop:20, fontSize: 20}}>Réglages</Text>
                        <Text style={{fontWeight: "bold", marginTop:20, fontSize: 20}}>Aide</Text>
                        <Text style={{marginTop: 50, fontSize: 20}}>Se déconnecter</Text>
                    </View>                
                             
                </View>
            </View>

        </ScrollView>


            <Modalize  ref={modalizeRefMyReviews} modalHeight={550} snapPoint={900}>
            <ScrollView style={styles.myCommentsList}>

                <View style={{flex: 1,paddingBottom: 300}}>
                    <View style={styles.myComments}>
                            <View style={styles.userComment}>
                                <View style={{ flexDirection : "row"}}>
                                <Image source={{ uri: "https://juniorsanca.fr/img/profil.png" }} style={styles.commentImage}/>
                                    <Text style={{margin: 20}}>Influenceur 1</Text>
                                </View>
                            </View>
                    
                            <View>
                                <Text style={styles.comentary}>
                                    Boutique en ligne de vêtements bio, naturels et écologiques en laine, soie, lin, chanvre, coton bio pour bébé, enfant et femme. 
                                </Text>
                            </View>
                            <View style={{left: 300}}>
                                <Icon name="delete" size={20} color="red" /> 
                            </View>
                            <View style={{ borderBottomColor: '#F2F2F5', borderBottomWidth: 1, marginLeft: 20,marginRight: 20, marginTop: 10}}/>

                        </View>

                        <View style={styles.myComments}>
                            <View style={styles.userComment}>
                                <View style={{ flexDirection : "row"}}>
                                <Image source={{ uri: "https://juniorsanca.fr/img/profil.png" }} style={styles.commentImage}/>
                                    <Text style={{margin: 20}}>Influenceur 2</Text>
                                </View>
                            </View>
                    
                            <View>
                                <Text style={styles.comentary}>
                                    Boutique en ligne de vêtements bio, naturels et écologiques en laine, soie, lin, chanvre, coton bio pour bébé, enfant et femme. 
                                </Text>
                            </View>
                            <View style={{left: 300}}>
                                <Icon name="delete" size={20} color="red" /> 
                            </View>
                            <View style={{ borderBottomColor: '#F2F2F5', borderBottomWidth: 1, marginLeft: 20,marginRight: 20, marginTop: 10}}/>

                        </View>

                        <View style={styles.myComments}>
                            <View style={styles.userComment}>
                                <View style={{ flexDirection : "row"}}>
                                <Image source={{ uri: "https://juniorsanca.fr/img/profil.png" }} style={styles.commentImage}/>
                                    <Text style={{margin: 20}}>Influenceur 3</Text>
                                </View>
                            </View>
                    
                            <View>
                                <Text style={styles.comentary}>
                                    Boutique en ligne de vêtements bio, naturels et écologiques en laine, soie, lin, chanvre, coton bio pour bébé, enfant et femme. 
                                </Text>
                            </View>
                            <View style={{left: 300}}>
                                <Icon name="delete" size={20} color="red" /> 
                            </View>
                            <View style={{ borderBottomColor: '#F2F2F5', borderBottomWidth: 1, marginLeft: 20,marginRight: 20, marginTop: 10}}/>

                        </View>

                        <View style={styles.myComments}>
                            <View style={styles.userComment}>
                                <View style={{ flexDirection : "row"}}>
                                <Image source={{ uri: "https://juniorsanca.fr/img/profil.png" }} style={styles.commentImage}/>
                                    <Text style={{margin: 20}}>Influenceur 4</Text>
                                </View>
                            </View>
                    
                            <View>
                                <Text style={styles.comentary}>
                                    Boutique en ligne de vêtements bio, naturels et écologiques en laine, soie, lin, chanvre, coton bio pour bébé, enfant et femme. 
                                </Text>
                            </View>
                            <View style={{left: 300}}>
                                <Icon name="delete" size={20} color="red" /> 
                            </View>
                            <View style={{ borderBottomColor: '#F2F2F5', borderBottomWidth: 1, marginLeft: 20,marginRight: 20, marginTop: 10}}/>

                        </View>

                        <View style={styles.myComments}>
                            <View style={styles.userComment}>
                                <View style={{ flexDirection : "row"}}>
                                <Image source={{ uri: "https://juniorsanca.fr/img/profil.png" }} style={styles.commentImage}/>
                                    <Text style={{margin: 20}}>Influenceur 5</Text>
                                </View>
                            </View>
                    
                            <View>
                                <Text style={styles.comentary}>
                                    Boutique en ligne de vêtements bio, naturels et écologiques en laine, soie, lin, chanvre, coton bio pour bébé, enfant et femme. 
                                </Text>
                            </View>
                            <View style={{left: 300}}>
                                <Icon name="delete" size={20} color="red" /> 
                            </View>
                            <View style={{ borderBottomColor: '#F2F2F5', borderBottomWidth: 1, marginLeft: 20,marginRight: 20, marginTop: 10}}/>

                        </View>
                </View>
                </ScrollView>

        </Modalize>

        <Modalize ref={modalizeRefBusiness} modalHeight={400} snapPoint={900}>
            <ScrollView style={styles.myCommentsList}>

                <View style={{flex: 1,paddingBottom: 300}}>
                    <Text style={{margin: 30, fontWeight:"bold", textAlign: "center", fontSize: 15}}>Convertir en compte professionnel</Text>
                    <Text style={{marginLeft: 30, marginRight: 30, color: "grey"}}>
                        Développez votre activité ou votre marque grâce à des outils comme les statistiques et les annonces publicitaires. 
                        Votre contenu, votre profil et vos avis ne changeront pas.
                    </Text>

                    <View style={{flexDirection: "row", marginLeft: 110, marginTop: 45, marginBottom: 35}}>
                        <Image source={{ uri: "https://juniorsanca.fr/img/profil.png" }} style={styles.commentImage}/>
                        <Icon name="arrowright" size={25} color="black" style={{marginLeft: 20, marginRight: 20, marginTop: 10}}/> 
                        <Icon name="isv" size={40} color="black" /> 
                    </View>

                    <View>
                        <Button
                            onPress
                            title="Covertir mon compte"
                            color="#841584"
                            backgroundColor= "red"
                            accessibilityLabel="Learn more about this purple button"
                            />
                    </View>
                    <View>
                        <Text style={{marginLeft: 30, marginRight: 30, fontSize: 11, marginTop: 25}}>
                            En convertissant votre compte, vous acceptez les conditions d'utilisation et la politique de confidentialité de Trustin
                        </Text>
                    </View>
                </View>
                </ScrollView>

        </Modalize>
    </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding:1,
    },
    usersCommentCard : {
        marginTop : 15,
        height: "100%",
        backgroundColor: "#fff",
        padding: 0,
        marginBottom: 5,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50

    },
    insideCardZone : {
        padding: 40,
        height: "100%"
    },

    header: {
        alignItems: "center",
        marginTop: 75
    },
    title: {
        fontWeight: "bold",
        margin: 25,
        fontSize: 20

    },
    image: {
        width: 140,
        aspectRatio: 1,
        borderRadius: 100,
        marginTop: 0
    },
    commentImage: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
    },
    myComments: {
        margin: 25
    },
    myCommentsList: {
        height: 800,
        paddingBottom: 350,
        paddingTop: 0,
    }

})

export default ProfileScreen;