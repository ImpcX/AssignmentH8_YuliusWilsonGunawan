import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from 'react-native';

function Post({ post, idx })
{
    const [modalVisible, setModalVisible] = useState(false);

    const deletePost = () =>
    {
        fetch(`http://192.168.227.15/posts/${post.id}`,
        {
            method: 'DELETE'
        })
        .then(() => deleteFromState(idx))
        .catch(err => console.log(err))
        window.location.reload(true)
    }

    const deleteFromState = (id) =>
    {
        let temp = [...posts]
        temp.splice(id, 1)
        setPosts(temp)
    }

    return(
        <View>
            <View style={styles.box}>
                <View style={{ flex: 10 }}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text>{post.description}</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Button
                    title='Delete'
                    color='red'
                    onPress={deletePost} />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    box:
    {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#E8EAE6',
        marginBottom: 10,
        padding: 7,
        borderRadius: 5
    },

    title: 
    {
        fontSize: 20,
        fontWeight: 'bold'
    },
  });

export default Post;