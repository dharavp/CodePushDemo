import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class Splash extends Component {

    render() {
        return (
            <View style={{
                width: '100%', height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TouchableOpacity
                    style={{ marginTop: 20 }}
                    onPress={() => {
                        this.props.navigation.navigate('Home');
                    }}>
                    <View style={{
                        width: 100, height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'green',
                        borderRadius: 50
                    }}>
                        <Text style={{ color: '#000' }}>Brijeshbhai</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
