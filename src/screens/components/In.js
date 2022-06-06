import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    Pressable,
} from 'react-native';


import Icon from 'react-native-vector-icons/AntDesign';
//Icon.loadFont().then();

const In = (props) => {
    //console.log(props)

    const{ image, title} = props.in;

    const onLike = () => {};

    return (
        <View style={styles.in}>
            <View>

                <Image source={{ uri: image }} style={ styles.in_image }/>
                    
                <Pressable onPress={onLike} style={styles.heartBtns}>
                    <Icon name="hearto" size={20} color="black" />
                </Pressable>

            </View>
                <Text style={styles.in_name}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    in: {
        marginTop: 10,
    },
    in_image: {
        borderRadius: 10,
        width: 350, height: 200
    },
    in_name: {
        fontSize: 20,
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

    }

})

export default In