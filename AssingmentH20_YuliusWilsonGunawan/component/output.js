import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, Button } from 'react-native';
// import Done from './done';

function Output()
{
    const state = useSelector((state) => state.add );
    
    const dispatch = useDispatch();

    const add_filter = (string) =>
    {
        let temp = state.filter((item) => { return item.title !== string })
        console.log(temp)
        dispatch({
            type: "DELETE",
            payload: temp
        })
    }

    const handleDone = (string) =>
    {
        let keep = state.filter((item) => { return item.title !== string })
        // console.log(keep);

        let newArr = [...keep, {title:string, status:"Complete"}]
        // console.log(newArr)
        dispatch({
            type: "DONE",
            payload: newArr
        })
    }

    return(
        <View style={styles.container}>
            {state.map((list , i) =>
            (
                <View style={styles.boxoutput}>
                    <View style={styles.tombol}>
                        <Button onPress={() => handleDone(list.title)} title="Done" />
                         {/* Ini Fungsi Ternary */}
                        <Text style={ list.status == "InComplete" ? styles.output : styles.output2}>{list.title}</Text>
                        {/* Ini Fungsi Ternary */}
                        <Button onPress={() => add_filter(list.title)} title="Delete" />
                    </View>
                </View>
            ))}
            {/* <Done /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flex: 1,
        padding: 20
    },

    divider: {
        marginTop: 20
    },

    divider2: {
        marginLeft: 20
    },

    output: {
        fontSize: 30,
        fontWeight: 'bold'
    },

    boxoutput: {
        padding: 20,
        backgroundColor: 'whitesmoke',
        marginTop: 20
    },

    tombol: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    output2 :
    {
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    }
  });

export default Output;

