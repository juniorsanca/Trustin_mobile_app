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

const In = (props) => {
    //console.log(props)

    const{ image, title} = props.in;

    const [ratio, setRatio] = useState(1);

    const onLike = () => {};

    //Image.getSize(image, (width, height) => setRatio(width / height));setRatio
    
    useEffect(() => {
        Image.getSize(image, (width, height) => setRatio(width / height));
    }, [image]);

    return (
        <View style={styles.in}>
            <View>
                <Image source={{ uri: image }} style={ [styles.in_image, {aspectRatio: ratio}] }/>
                    
                <Pressable onPress={onLike} style={styles.heartBtns}>
                    <Icon name="hearto" size={20} color="black" />
                </Pressable>

            </View>
                <Text style={styles.in_name}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    in: {
        width: "100%",
        marginTop: 10,
        padding: 5
        //flexDirection: "row"
    },
    in_image: {
        borderRadius: 10,
        width: "100%", 
        //aspectRatio: 1/2
    },
    in_name: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin: 5,
    },
    heartBtns: {
        backgroundColor: '#D3CFD4',
        position: 'absolute',
        bottom: 10,
        right: 10,
        padding: 5,
        borderRadius: 50

    },


})

export default In