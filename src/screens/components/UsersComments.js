import React, { useCallback, useRef } from "react";
import RatingNotes from "./RatingNotes";


import { Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity
} from 'react-native';
//import Influencers from "./components/Influencers";

const UsersComments = () => {

return (
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
</View>
)
}

const styles = StyleSheet.create({
})

export default UsersComments