import {
    View,
    StyleSheet, 
    Image,

} from 'react-native';
import React, {useState} from "react";

import { TouchableOpacity } from 'react-native-gesture-handler';


const RatingNotes = () => {
    const [defaulRatingNote, setdefaultRatingNote] = useState(1)
    const [maxRatingNote, setmaxRating] = useState([1,2,3,4,5])

    //const startImgFilledNote = 'https://raw.githubusercontent.com/juniorsanca/Trustin_mobile_app/main/src/images/starton.png'
    //const startImgCornerNote = 'https://raw.githubusercontent.com/juniorsanca/Trustin_mobile_app/main/src/images/startoff.png'

        return (
            <View style={styles.customRatingBarStyle}>
                {
                    maxRatingNote.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setdefaultRatingNote(item)}
                                >

                            <Image 
                                style={styles.startImgStyle}
                                source={
                                    item<= defaulRatingNote
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
        //justifyContent: 'center',
        flexDirection: 'row',
        fontSize: 10
    },
    startImgStyle: {
        width: 20,
        height: 20,
        flex : 1,
    },
   
    column: {
        flex: 1,
    }
   
});
export default RatingNotes;