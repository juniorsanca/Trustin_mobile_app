import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,

} from 'react-native';


import Icon from 'react-native-vector-icons/AntDesign';
//Icon.loadFont().then();

const In = (props) => {
    //console.log(props)

    const{ image, title} = props.in;

    return (
        <View style={styles.in}>
            <Image source={{ uri: image }} style={styles.in_image}/>
            <Icon name="heart" size={50} color="red" />

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
        width: 350, height: '55%'
    },
    in_name: {
        fontSize: 20,
        textAlign: "center",
        margin: 5,
    },

})

export default In