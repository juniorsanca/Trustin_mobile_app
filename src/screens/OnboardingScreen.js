import React from "react";
import {
    TouchableOpacity,
    StyleSheet, 
    Dimensions,
    StatusBar,
    FlatList,
    View,
    Image,
    Text,
    } from 'react-native';

    import LinearGradient from 'react-native-linear-gradient';


const {width, height} = Dimensions.get('window');


const COLORS = {primary: '#282534', white: '#fff'};


const START_DEFAULT = { x: 0.5, y: 0 };
const END_DEFAULT = { x: 0.5, y: 1 };
const GRADIENT_COLORS = ["#F5A64F", "#F07754", "#CA4171"];
const GRADIENT_LOCATIONS = [0, 0.3, 0.9, 0.7, 0.8, 1, 1];


const slides = [
    {
        id: '1',
        image: require('../images/img_slide1.png'),
        //image: require('../images/image1.png'),
        title: 'Faitez vous entendre',
        subtitle: 'Le lorem impsum est, en imprimerie une suite de mots sans signification',
    },
    {
        id: '2',
        image: require('../images/img_slide2.png'),
        //image: require('../images/image2.png'),
        title: 'Notez votre collaboration',
        subtitle: 'Le lorem impsum est, en imprimerie une suite de mots sans signification',
    },
    {
        id: '3',
        image: require('../images/img_slide3.png'),
        //image: require('../images/image3.png'),
        title: 'Collectez des avis de qualité',
        subtitle: 'Le lorem impsum est, en imprimerie une suite de mots sans signification',
    },
];

const Slide = ({item}) => {
    return (
      <View style={{
          alignItems: 'center',
          padding: 0,
          margin: 0
          }}>
        <Image 
            source={item.image} 
            style={{
                height: '80%', 
                width, 
                resizeMode: 'contain'}} />

            <View  
                style={{
                    width, 
                    resizeMode: 'contain'}}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
      </View>
    );
  };

const OnboardingScreen = ({navigation}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef();

    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex +1;
        if (nextSlideIndex != slides.length) {
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

    const Footer = () => {
        return(
            <View 
                style={{
                    height: height * 0.22, 
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}>
                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'center', 
                    marginTop:0,
                    }}>
                    {slides.map((_, index) => (
                        <View 
                            key={index} 
                            style={[
                            styles.indicator, 
                            currentSlideIndex == index && {
                            backgroundColor: '#fff',
                            width: 25,
                        },
                      ]} 
                     />
                    ))}
                </View>
                        <View style={{marginBottom: 30}}>
                            {currentSlideIndex == slides.length -1 ? ( 
                            <View style={{height: 50}}>
                                <TouchableOpacity 
                                    style={[styles.btn]} 
                                    onPress={() => navigation.replace('HomeScreen')}>
                                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                                        GET STARTED
                                    </Text>
                                </TouchableOpacity>
                            </View> 
                        ) : (
                                <View style={{flexDirection: "row"}}>
                                    <TouchableOpacity 
                                          activeOpacity={0.8}
                                          style={[
                                              styles.btn, 
                                              {
                                                  backgroundColor: 'transparent', 
                                                  borderWidth: 1, 
                                                  borderColor:COLORS.white,
                                                  },
                                                ]}
                                        onPress={skip}>
                                       <Text  
                                          style={{
                                              fontWeight: 'bold', 
                                              fontSize: 15, 
                                              color:COLORS.white,
                                              }}>
                                                  SKIP
                                       </Text>
                                    </TouchableOpacity>
                                    <View style={{width: 15}} />

                                    <TouchableOpacity 
                                          activeOpacity={0.8}
                                          style={[styles.btn]} 
                                          onPress={goNextSlide}>
                                      <Text 
                                          style={{
                                              fontWeight: 'bold', 
                                              fontSize: 15,
                                              }}>NEXT
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                     </View>
             </View>
        );
    };


    return (
        <View style={{flex:1}}>
            <LinearGradient 
                style={styles.container}
                colors= {GRADIENT_COLORS}
                locations= {GRADIENT_LOCATIONS}
                start= {START_DEFAULT}
                end= {END_DEFAULT}
                >
                    <StatusBar backgroundColor={COLORS.primary} />
                        <FlatList
                            ref={ref}
                            onMomentumScrollEnd={updateCurrentSlideIndex}
                            contentContainerStyle={{height: height * 0.78}}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={slides}
                            pagingEnabled
                            renderItem={({item}) => <Slide item={item} />} 
                        />
                <Footer />
            </LinearGradient>
        </View> 

    );
};

const styles = StyleSheet.create({
    title: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    subtitle : {
        color: COLORS.white,
        fontSize: 13,
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50,
        maxWidth: '100%',
        textAlign: 'center',
        lineHeight: 23,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
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
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',

    },
});

export default OnboardingScreen;