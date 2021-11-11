import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Body from './body';

function Header()
{
    return(
        <View>
            {/* <Text style={styles.judul}>Posts</Text> */}
            <View style={styles.body}>
                {/* <Body /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    judul: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },

    body: {
        backgroundColor: 'green',
        // marginTop: 20,
        padding: 20
    }
  });

export default Header;