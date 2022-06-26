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


const NewScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View>
                    <View style={{flexDirection: "row"}}>
                        <View>
                            <Image source={{ uri: "https://juniorsanca.fr/img/profil.png" }} style={styles.profilImage}/>
                        </View>
                        <View style={{marginTop: 39}}>
                            <Text>
                                Nom de la marque
                            </Text>
                        </View>
                    </View>

                    <View style={styles.header}>
                        <Image source={{ uri: "https://juniorsanca.fr/img/profil.png" }} style={styles.image}/>
                    </View>
                </View>

                <View>
                    <View style={{flexDirection: "row"}}>
                        <View>
                            <Image source={{ uri: "https://juniorsanca.fr/img/profil.png" }} style={styles.profilImage}/>
                        </View>
                        <View style={{marginTop: 39}}>
                            <Text>
                                Nom de la marque
                            </Text>
                        </View>
                    </View>

                    <View style={styles.header}>
                        <Image source={{ uri: "https://juniorsanca.fr/img/profil.png" }} style={styles.image}/>
                    </View>
                </View>

                <View>
                    <View style={{flexDirection: "row"}}>
                        <View>
                            <Image source={{ uri: "https://juniorsanca.fr/img/profil.png" }} style={styles.profilImage}/>
                        </View>
                        <View style={{marginTop: 39}}>
                            <Text>
                                Nom de la marque
                            </Text>
                        </View>
                    </View>

                    <View style={styles.header}>
                        <Image source={{ uri: "https://juniorsanca.fr/img/profil.png" }} style={styles.image}/>
                    </View>
                </View>

                <View>
                    <View style={{flexDirection: "row"}}>
                        <View>
                            <Image source={{ uri: "https://juniorsanca.fr/img/profil.png" }} style={styles.profilImage}/>
                        </View>
                        <View style={{marginTop: 39}}>
                            <Text>
                                Nom de la marque
                            </Text>
                        </View>
                    </View>

                    <View style={styles.header}>
                        <Image source={{ uri: "https://juniorsanca.fr/img/profil.png" }} style={styles.image}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding:10,
        marginBottom: -43
    },
    usersCommentCard : {
        marginTop : 15,
        height: "10%",
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
        marginTop: 0
    },
    title: {
        fontWeight: "bold",
        margin: 25,
        fontSize: 20

    },
    image: {
        width: "100%",
        aspectRatio: 1,
        borderRadius: 5,
        borderRadius: 25
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
    },
    profilImage: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
        margin: 20,
    
    }

})

export default NewScreen;