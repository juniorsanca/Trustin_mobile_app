import React from "react";
import {
    Text, 
    View,
    StyleSheet, 
    Dimensions,
    TextInput,
    Image,
    ScrollView
} from 'react-native';
import In from "./In";

const Influencers = ({ ins }) => {
    return (
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.column}>
                            {ins
                                .filter((_, index) => index % 2 === 0)
                                .map((ins) => (
                                    <In in={ins} key={ins.id} />
                            ))}
                        </View>

                        <View style={styles.column}>
                            {ins
                                .filter((_, index) => index % 2 === 1)
                                .map((ins) => (
                                    <In in={ins} key={ins.id} />
                                ))}
                        </View>

                    </View> 
                </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 0,
        //flexDirection: "row"
    },
    column: {
        flex: 1,
    },
   
});
export default Influencers;