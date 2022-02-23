import { View, Image, ActivityIndicator, Text, StyleSheet, ImageBackground, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { setDefaultTheme } from '@/Store/Theme'
import { GriLogo } from '@/Components'
import { Gutters } from '@/Theme'
import { navigate } from '@/Navigators/utils'


const HomeContainer = () => {

    const { Layout, Gutters, Fonts, Images } = useTheme()

    const { t } = useTranslation()

    return (
        <ImageBackground
            source={Images.background_splash}
            resizeMode="cover"
            style={[Layout.fill, Layout.fullSize, Layout.colVCenter]}>


        </ImageBackground>

    )

}

const styles = StyleSheet.create({
    titleText: {
        color: "#2D6A4F",
        fontSize: 42,
        lineHeight: 84,
        textAlign: "center",
        fontFamily: "poppins_bold",
    },
    subtitleText: {
        color: "black",
        fontSize: 16,
        lineHeight: 24,
        textAlign: "center",
        fontFamily: "poppins",
        marginHorizontal: 48
    },
    buttonParentContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        marginBottom: 50,
        paddingHorizontal: 48
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'flex-end',
    },
    buttonStart: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 10,
        width: '100%'
    },
    textStart: {
        color: '#2D6A4F',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: "poppins",

    }
});

export default HomeContainer