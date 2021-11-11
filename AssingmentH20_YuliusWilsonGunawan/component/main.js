import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Output from './output';

function Main()
{
    const dispatch = useDispatch();
    const [data, setData] = useState("");

    const handleChange = (e) =>
    {
        setData(e.target.value);
    }

    const handleClick = () =>
    {
        dispatch({
            type: "ADD",
            payload: {
              title: data,
              status: "InComplete"
            }
        })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.judul}>Wishlist</Text>
            <View style={styles.row}>
            <TextInput onChange={handleChange} style={styles.input} placeholder="   Item baru" />
            <View style={styles.tombol}>
                <Button onPress={handleClick} title=" Add To Wishlist " />
            </View>
            </View>
            <View>
                <Output />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 20
    },
  
    judul: {
      color: 'dodgerblue',
      fontWeight: 'bold',
      fontSize: 30,
      marginLeft: 20
    },
  
    input: {
      marginLeft: 20,
      marginRight: 20,
      paddingLeft: 10,
      marginTop: 10,
      borderColor: 'dodgerblue',
      borderStyle: 'solid',
      borderWidth: 5,
      borderRadius: 5,
      height: 41,
      width: 500,
      float: 'left'
    },

    tombol: {
        marginTop: 12,
        float: 'right'
    },
  
    row: {
      display: 'flex',
      flexDirection: 'row'
    }
  });

export default Main;