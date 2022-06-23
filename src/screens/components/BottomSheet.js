import { Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Dimensions
} from 'react-native';
import React from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BottomSheet = () => {

    const translationY = useSharedValue(0)

    const gesture = Gesture.Pan().onUpdate((event) => {
        //console.log(event.translationY);
        translationY.value = event.translationY;
    });

    const rBottomSheetStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translationY.value}],
        };
    });

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
                    <View style={styles.line}/>
            </Animated.View>
        </GestureDetector>
    );
};


const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: '#edeeff',
        position: 'absolute',
        top: SCREEN_HEIGHT / 1.5,
        borderRadius: 35
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'black',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2
    }
});

export default BottomSheet;

