import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './header';
import Body from './body';

export default function Postpage()
{
    return(
        <View style={styles.container}>
            <Header />
            <Body />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        marginTop: 25
    }
});