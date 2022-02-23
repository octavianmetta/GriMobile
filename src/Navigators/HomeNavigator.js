import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeContainer } from '@/Containers'
import { GriLogo } from '@/Components'
import { Button, View } from 'react-native'

const Tab = createBottomTabNavigator()

// @refresh reset
const HomeNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeNavigator"
                component={HomeContainer}
                options={{
                    headerTitle: (props) => <GriLogo
                        height={40}
                        width={40}

                        {
                        ...props
                        } />,
                    headerRight: () => (

                        <View style={{ flexDirection: 'row' }}>
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Info"
                                color="#fff"
                            />
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Info"
                                color="#fff"
                            />
                        </View>
                    ),
                    tabBarIconStyle: { display: 'none' },
                    tabBarLabelPosition: 'beside-icon',
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeNavigator
