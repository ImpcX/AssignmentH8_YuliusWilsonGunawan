import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button } from 'react-native';
import Post from './post';

function Body(deleteFromState)
{
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);

    const addPost = () =>
    {
        fetch('http://192.168.227.15:4000/posts', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ title, description })
        })
        .then(res => res.json())
        .then(data => setPosts([...posts, data]))
        .catch(err => console.log(err))
    }

    useEffect(() =>
    {
        fetch("http://192.168.227.15:4000/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data))
    }, [])
    

    return(
        <>
            <View style={styles.scroll}>
                <TextInput
                placeholder='Title'
                placeholderTextColor='#ffffff'
                style={styles.txtInput}
                onChangeText={text => setTitle(text)}
                defaultValue={title} />

                <TextInput
                placeholder='Description'
                placeholderTextColor='#ffffff'
                style={styles.txtInput}
                onChangeText={text => setDescription(text)}
                defaultValue={description} />

                <Button
                color='blue'
                title='Save'
                onPress={addPost} />
            </View>
            <ScrollView style={styles.scroll}>
            {
                posts.map((post, idx) =>
                (
                    <Post 
                    key={post.id}
                    post={post}
                    idx={idx}
                    deleteFromState={deleteFromState} />
                ))
            }
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    scroll:
    {
        backgroundColor: 'green',
        padding: 10
    },

    txtInput: 
    {
        color: '#ffffff',
        padding: 5,
        borderWidth: 2,
        borderColor: '#ffffff',
        marginBottom: 5
    }
  });

export default Body;