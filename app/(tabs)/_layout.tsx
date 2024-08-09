import React from "react";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,

            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home"
                }}
            />
            <Tabs.Screen
                name="competitions"
                options={{
                    title: "Competiciones"
                }}
            />
        </Tabs>
    )
}