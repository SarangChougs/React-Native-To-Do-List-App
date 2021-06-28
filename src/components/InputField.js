import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

function InputField(props) {
    return (
        <View style={styles.container}>
            <TextInput
                value={props.value}
                onChangeText={props.onChangeText}
                style={styles.input}
                placeholder={props.placeHolder}
                placeholderTextColor="grey"
            />

            {/* button */}
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.button}>
                    <Text
                        style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                        Add
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        width: '60%',
        height: 50,
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#2C61E830',
        fontSize: 16,
    },
    button: {
        height: 50,
        borderRadius: 20,
        padding: 10,
        margin: 10,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        backgroundColor: '#343BE0'
    },
    container: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'stretch',
        width: '100%'
    }
})

export default InputField