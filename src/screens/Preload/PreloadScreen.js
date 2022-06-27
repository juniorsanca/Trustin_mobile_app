import React, { useEffect } from "react";
import {
    Text,
    View,
    Dimensions,
    StyleSheet, 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Api from '../../Api';


const {width, height} = Dimensions.get('window');

const START_DEFAULT = { x: 0.5, y: 0 };
const END_DEFAULT = { x: 0.5, y: 1 };
const GRADIENT_COLORS = ["#F5A64F", "#F07754", "#CA4171"];
const GRADIENT_LOCATIONS = [0, 0.3, 0.9, 0.7, 0.8, 1, 1];


const PreloadScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            
            if(token) {
                let res = await Api.checkToken('token');

                if(res.token){
                    await AsyncStorage.setItem('token', res.token);

                    navigation.reset({
                        routes:[{name: 'HomeScreen'}]
                    })
                } else {
                    navigation.navigate('LoginScreen')
                }
            } else {
                navigation.navigate('LoginScreen')
            }
        }
        checkToken();;
    }, []);

    return (
        <View style={{flex:1}}>
            <LinearGradient 
                style={{
                    
                    height: height, 
                    justifyContent: 'space-between',
                    paddingHorizontal: 50,
                }}
                colors= {GRADIENT_COLORS}
                locations= {GRADIENT_LOCATIONS}
                start= {START_DEFAULT}
                end= {END_DEFAULT}
                >

                <View style={{marginTop: 330}}>
                        <Text style={[styles.title]} >Trust<Text style={{fontWeight: 'bold', color:'#CA4171'}}>{'in'}</Text></Text>
                </View>

            </LinearGradient>
        </View>
    );
};


const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 60,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 0,
        textAlign: 'center'
    },
    welcome: {
        color:'#fff',
    },
});

export default PreloadScreen;