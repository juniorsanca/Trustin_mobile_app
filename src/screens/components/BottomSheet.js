import { Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Dimensions
} from 'react-native';
import React from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BottomSheet = () => {
    const translateY = useSharedValue(0)

    const context = useSharedValue({ y: 0 })
    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value };
        })
        .onUpdate((event) => {
        translateY.value = event.translationY + context.value;
        translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT);
        //console.log(event.translationY);
    });

    const rBottomSheetStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value}],
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
        top: SCREEN_HEIGHT,
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

