import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Posts from './components/Posts/index.js';

class CloudInsta extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.nav}>
                    <Text>Cloudgram</Text>
                </View>
                <Posts />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 100 + '%',
        height: 100 + '%'
    },

    nav: {
        width: 100 + '%',
        height: 50,
        marginTop: 20,
        backgroundColor: 'rgb(250, 250, 250)',
        borderBottomColor: 'rgb(233, 233, 233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CloudInsta;
