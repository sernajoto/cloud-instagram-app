import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

class Post extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const image = this.props.image;
        const caption = this.props.caption;

        return (
            <View>
                <View style={styles.userBar}>
                    <Image style={styles.userPic} source={{ uri: 'https://goo.gl/9EGiXj' }} />
                    <Text style={styles.userText}>God</Text>
                </View>
                <View style={styles.postContent}>
                    <Image style={styles.postPic} source={{ uri: image }} />
                    <Text style={styles.postText}>{caption}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    userBar: {
        width: 100 + '%',
        height: 50,
        backgroundColor: 'rgb(255, 255, 255)',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10
    },

    userPic: {
        width: 40,
        height: 40,
        borderRadius: 20
    },

    userText: {
        marginLeft: 10
    },

    postContent: {
        borderBottomColor: 'rgb(233, 233, 233)',
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    postPic: {
        width: 100 + '%',
        height: 400
    },

    postText: {
        margin: 10,
    }
});

export default Post;
