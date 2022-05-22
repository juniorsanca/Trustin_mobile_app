import React from "react";
import {SafeAreaView, StyleSheet, Dimensions} from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

//const COLORS = {primary: '#282534', white: '#fff'};
const COLORS = {
    primary : '#C568AB', white: '#fff'};

const slides = [
    {
        id: '1',
        Image: require('../images/img_slide1.png'),
        title: 'Faitez vous entendre',
        Subtitle: 'Le lorem impsum est, en imprimerie une suite de mots sans signification',
    },
    {
        id: '2',
        Image: require('../images/img_slide2.png'),
        title: 'Notez votre collaboration',
        Subtitle: 'Le lorem impsum est, en imprimerie une suite de mots sans signification',
    },
    {
        id: '3',
        Image: require('../images/img_slide3.png'),
        title: 'Collectez des avis de qualité',
        Subtitle: 'Le lorem impsum est, en imprimerie une suite de mots sans signification',
    },
]

const OnboardingScreen = ({navigation}) => {
    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: COLORS.primary}}
        ></SafeAreaView>
    );
};

const styles = StyleSheet.create({});
export default OnboardingScreen;