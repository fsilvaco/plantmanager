import React from 'react'
import {StyleSheet, View} from "react-native"

import LottieView from "lottie-react-native"

import LoadAnimation from "../assets/load.json"

export function Load() {
    return <View style={s.container}>
        <LottieView 
            source={LoadAnimation}
            autoPlay
            loop
            style={s.animation}
        />
    </View>
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }, 

    animation: {
       backgroundColor: "transparent",
       height: 200,
       width: 200, 
    },
})