import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';

function Done()
{
    const state = useSelector((state) => state);
    return(
        <View>
            {state.done.map((list, i) =>
            {
                <Text style={styles.coret}>{list}</Text>
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    coret: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    }
  });

export default Done;