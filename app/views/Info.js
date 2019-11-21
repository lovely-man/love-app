import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { boy, girl } from '../config/config.js';

console.log(boy, girl);

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 4,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#d6d7da',
    },
});

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '资料',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{
                paddingTop: 35
            }}>
                <View style={styles.list}>
                    <Text>{boy.name}</Text>
                    <Text>{girl.name}</Text>
                </View>
                <View style={styles.list}>
                    <Text>{boy.sex}</Text>
                    <Text>{girl.sex}</Text>
                </View>
                <View style={styles.list}>
                    <Text>{boy.birth}</Text>
                    <Text>{girl.birth}</Text>
                </View>
            </View>
        );
    }
}

export default HomeScreen;
