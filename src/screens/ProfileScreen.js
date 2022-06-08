import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';
import ins from "../assets/data/ins";
import Influencers from "./components/Influencers";
import Icon from 'react-native-vector-icons/AntDesign';

const ProfileScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.icon}>
                    <Icon name="ellipsis1" size={35} color="black" />
                </View>
                <Image 
                        source={{
                            uri: "https://juniorsanca.fr/img/profil.png",
                    }}
                        style={styles.image}/>

                    <Text style={styles.title}>Junior</Text>
                    <Text style={styles.subtitle}>123 Followers | 321 Following</Text>
            </View>
   
            <Influencers ins={ins}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding:10,

    },
    icon: {
        marginTop: 40,
        alignSelf: "flex-end",
        padding: 10
    },
    header: {
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        margin: 20,
        fontSize: 20

    },
    image: {
        width: 150,
        aspectRatio: 1,
        borderRadius: 100,
        marginTop: 15
    },
    subtitle: {
        color: "#181818",
        fontWeight: "600",
        margin: 5
    }

})

export default ProfileScreen;