import {
    View,
    StyleSheet, 
    Image,

} from 'react-native';
import React, {useState} from "react";

import { TouchableOpacity } from 'react-native-gesture-handler';


const Rating = () => {
    const [defaulRating, setdefaultRating] = useState(2)
    const [maxRating, setmaxRating] = useState([1,2,3,4,5])

        return (
            <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setdefaultRating(item)}
                            >

                            <Image 
                                style={styles.startImgStyle}
                                source={
                                    item<= defaulRating
                                    ?  require('../../images/starton.png')
                                    :  require('../../images/startoff.png')
                                }
                            />

                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
};

const styles = StyleSheet.create({

    customRatingBarStyle : {
        justifyContent: 'center',
        flexDirection: 'row',
        fontSize: 23
    },
    startImgStyle: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        flex : 1,
        justifyContent:'center'
    },

    search: {
        flex: 1,
        marginRight: 15,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 40,
    },
    body: {
        flex: 1,
        padding:10,
        //alignItems:"center"
    },
    registered: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 40,
    },
    parent: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginLeft: 100,
        marginRight: 100,

      },
    input: {
        width:270,
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff',
        paddingLeft: 30,
      },
    container: {
        flexDirection: "row",
        padding: 0,
        //flexDirection: "row"
    },
    column: {
        flex: 1,
    }
   
});
export default Rating;