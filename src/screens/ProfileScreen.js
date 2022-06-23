import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';
import ins from "../assets/data/ins";
import Icon from 'react-native-vector-icons/AntDesign';

const ProfileScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.icon}>
                    <Icon name="ellipsis1" size={35} color="black"/>
                </View>
                <Image source={{ uri: "https://juniorsanca.fr/img/profil.png", }} style={styles.image}/>
                <Text style={styles.title}>Junior</Text>

                <View>
                    <Text>
                        <Text>2</Text> <Icon name="staro" size={20} color="orange"  style={{}}/> 
                        <Text>Avis</Text> | <Text>1</Text><Icon name="like2" size={20} color="blue"  style={{}}/><Text>Utile</Text>
                    </Text>
                </View>


                <View style={styles.usersCommentCard}> 

                    <View style={styles.insideCardZone}>
                        <Text style={{marginBottom: 20}}>
                            Boutique en ligne de vêtements bio, naturels et écologiques en laine, soie, lin, chanvre, coton bio pour bébé, enfant et femme123. 
                        </Text>
                        
                        <Text style={{fontWeight: "bold", marginTop:20, fontSize: 20}}>Trustin Business</Text>
                        <Text style={{fontWeight: "bold", marginTop:20, fontSize: 20}}>Mes avis</Text>
                        <Text style={{fontWeight: "bold", marginTop:20, fontSize: 20}}>Réglages</Text>
                        <Text style={{fontWeight: "bold", marginTop:20, fontSize: 20}}>Aide</Text>
                        <Text style={{marginTop: 25, fontSize: 20}}>Se déconnecter</Text>
                    </View>                
                             
                </View>
            </View>
   
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding:1,
    },
    usersCommentCard : {
        marginTop : 25,
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
    icon: {
        marginTop: 40,
        alignSelf: "flex-end",
        padding: 15
    },
    header: {
        alignItems: "center"
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
        marginTop: 15
    },

})

export default ProfileScreen;