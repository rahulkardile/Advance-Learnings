import { TabBarIcon } from '@/components/tabBarIcon';
import { icons } from '@/constants/icons';
import { Tabs } from 'expo-router';
import React from 'react';

const _layout = () => {
    return (
        <Tabs 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                },
                tabBarStyle: {
                    backgroundColor: "#0f0D23",
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: "absolute",
                    overflow: "hidden",
                    borderWidth: 1,
                    borderColor: "#0f0D23"
                }
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon title='Home' icon={icons.home} focused={focused} />
                    )
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon title='Search' icon={icons.search} focused={focused} />
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon title='Profile' icon={icons.person} focused={focused} />
                    )
                }}
            />
            <Tabs.Screen
                name='saved'
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon title='Saved' icon={icons.save} focused={focused} />
                    )
                }}
            />
        </Tabs>
    )
}

export default _layout