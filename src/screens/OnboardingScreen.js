import React from "react";
import {
    TouchableOpacity,
    SafeAreaView, 
    StyleSheet, 
    Dimensions,
    StatusBar,
    FlatList,
    View,
    Image,
    Text,
    } from 'react-native';
import { set } from "react-native-reanimated";
//import LinearGradient from 'react-native-linear-gradient';
//import LinearGradient from 'react-native-linear-gradient'
//import {  } from "react-native-gesture-handler";


const {width, height} = Dimensions.get('window');

//const COLORS = {primary: '#282534', white: '#fff'};
const COLORS = {primary: '#282534', white: '#fff'};


const slides = [
    {
        id: '1',
        image: require('../images/img_slide1.png'),
        title: 'Faitez vous entendre',
        subtitle: 'Le lorem impsum est, en imprimerie une suite de mots sans signification',
    },
    {
        id: '2',
        image: require('../images/img_slide2.png'),
        title: 'Notez votre collaboration',
        subtitle: 'Le lorem impsum est, en imprimerie une suite de mots sans signification',
    },
    {
        id: '3',
        image: require('../images/img_slide3.png'),
        title: 'Collectez des avis de qualité',
        subtitle: 'Le lorem impsum est, en imprimerie une suite de mots sans signification',
    },
];

const Slide = ({item}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={item.image}
          style={{height: '75%', width, resizeMode: 'contain'}}
        />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </View>
    );
  };

const OnboardingScreen = ({navigation}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef(null);
    const Footer = () => {
        return(
            <View 
                style={{
                    height: height * 0.25, 
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}>
                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'center', 
                    marginTop:20,
                    }}>
                    {slides.map((_, index) => (
                        <View 
                            key={index} 
                            style={[
                            styles.indicator, 
                            currentSlideIndex == index && {
                            backgroundColor: COLORS.white,
                            width: 25,
                        },
                      ]} 
                     />
                    ))}
                </View>
                <View style={{marginBottom: 20}}>
                    {
                        currentSlideIndex == slides.length -1 ? <View style={{height: 50}}>
                        <TouchableOpacity 
                            style={[styles.btn]} 
                            onPress={()=> navigation.navigate('HomeScreen')}>
                            <Text style={{fontWeight: 'bold', fontSize: 15}}>
                                GET STARTED
                            </Text>
                        </TouchableOpacity>
                    </View> :
                                    <View style={{flexDirection: "row"}}>
                                    <TouchableOpacity 
                                          onPress={skip}
                                          style={[
                                              styles.btn, {
                                                  backgroundColor: 'transparent', 
                                                  borderWidth: 1, 
                                                  borderColor:COLORS.white
                                                  }]}>
                                      <Text  
                                          style={{
                                              fontWeight: 'bold', 
                                              fontSize: 15, 
                                              color:COLORS.white
                                              }}>Skip</Text>
                                    </TouchableOpacity>
              
                                    <View style={{width: 15}} />
              
                                    <TouchableOpacity 
                                          style={[styles.btn]} onPress={goNextSlide}>
                                      <Text 
                                          style={{
                                              fontWeight: 'bold', 
                                              fontSize: 15
                                              }}>NEXT</Text>
                                    </TouchableOpacity>
                                </View>
                            }
 
                </View>
            </View>
        ) 
    };

    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex +1;
        if(nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({offset});
            setCurrentSlideIndex(nextSlideIndex);
        }
    };

    const skip = () => {
        const lastSlidesIndex = slides.length -1;
        const offset = lastSlidesIndex * width;
        ref?.current?.scrollToOffset({offset});
        setCurrentSlideIndex(lastSlidesIndex);
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
            <StatusBar backgroundColor={COLORS.primary} />
                <FlatList 
                    ref={ref}
                    onMomentumScrollEnd={updateCurrentSlideIndex}
                    pagingEnabled
                    data={slides} 
                    contentContainerStyle={{height: height * 0.75}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => <Slide item={item} />} 
                />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 0,
        textAlign: 'center'
    },
    subtitle : {
        color: COLORS.white,
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
    },
    indicator : {
        height: 2.5,
        width: 10,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2,
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',

    }
});

export default OnboardingScreen;