import { View, Image, ActivityIndicator, Text, StyleSheet, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { setDefaultTheme } from '@/Store/Theme'
import { GriLogo } from '@/Components'

const SplashContainer = () => {

    const { Layout, Gutters, Fonts, Images } = useTheme()

    const { t } = useTranslation()

    return (
        <View style={[Layout.fill, Layout.colVCenter]}>

            <ImageBackground
                source={Images.background_splash}
                resizeMode="cover"
                style={[Layout.fullSize, Layout.colVCenter]}>

                <View style={[Gutters.largeVMargin]} />

                <GriLogo
                    height={120}
                    width={120} />

                <View style={{ marginVertical: 16 }} />

                <Text style={[Fonts.textCenter, styles.titleText]}>
                    {t('appName')}
                </Text>


            </ImageBackground>

        </View >
    )

}

const styles = StyleSheet.create({
    titleText: {
        color: "#2D6A4F",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    },
    logoGri: {
    }
});

export default SplashContainer