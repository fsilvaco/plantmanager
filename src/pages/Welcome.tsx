import React from "react"
import {SafeAreaView, Text, Image, TouchableOpacity, StyleSheet} from "react-native"

import wateringImg from "../assets/watering.png"
import { Button } from "../components/Button"
import colors from "../styles/colors"
 
export function Welcome() {

    return (
        <SafeAreaView style={s.container}>
            <Text style={s.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>
            <Image style={s.image} source={wateringImg} />
            <Text style={s.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar vocêsempre que precisar.
            </Text>
            <Button title="Next"/>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: "space-between", 
        alignItems: "center"
    }, 
    
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.heading, 
        marginTop: 38 
    },

    subtitle: {
        fontSize: 18,
        textAlign: "center",
        color: colors.heading,
        paddingHorizontal: 20
    },

    button: {
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginTop: 10,
        height: 56,
        width: 56,
    },
    image:{
        width: 292,
        height: 284
    }
})