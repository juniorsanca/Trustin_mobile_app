import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    Pressable,
} from 'react-native';

import {useState, useEffect} from "react";

import Icon from 'react-native-vector-icons/AntDesign';
//Icon.loadFont().then();
import {useNavigation} from '@react-navigation/native'

const In = (props) => {
    //console.log(props)

    const{ id, image, iname} = props.in;

    const [ratio, setRatio] = useState(1);
    const navigation = useNavigation();

    //Image.getSize(image, (width, height) => setRatio(width / height));setRatio
    
    useEffect(() => {
        if(image){
            Image.getSize(image, (width, height) => setRatio(width / height));
        }
    }, [image]);


    const onLike = () => {};

    const goToInPage = () => {
        //console.warn("clicked");
        navigation.navigate("In", {id});
    };
    
    return (
        <Pressable onPress={goToInPage} style={styles.in}>
            <View>
                <Image source={{ uri: image }} style={ [styles.in_image, {aspectRatio: ratio}] }/>
                    
                <Pressable onPress={onLike} style={styles.heartBtns}>
                    <Icon name="staro" size={20} color="black" />
                </Pressable>
            </View>
            <View style={styles.iname_container}>
                <Text style={styles.in_name}>
                    2/5
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    in: {
        width: "100%",
        marginTop: 0,
        padding: 3,
        position: "relative"
        //flexDirection: "row"
    },
    in_image: {
        borderRadius: 20,
        width: "100%",
        //aspectRatio: 1/2
    },
    in_name: {
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center",
        margin: 5,
        color: "white"
        
        //color: "grey"
    },
    heartBtns: {
        backgroundColor: '#D3CFD4',
        position: 'absolute',
        bottom: 10,
        right: 10,
        padding: 5,
        borderRadius: 50,
    },

    iname_container: {
        position: "absolute",
        top: 13,
        left: 12,
        backgroundColor: "#575A5F",
        borderWidth: 1.5,
        borderColor: '#52FB73',
        borderRadius: 50,
        width: 35,
        height: 35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default In