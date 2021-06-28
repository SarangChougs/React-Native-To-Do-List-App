import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Heading(props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginTop: 20,
        marginBottom: 15,
        padding: 5,
        alignItems: 'center',
        width: '100%',
        height: '5%'
    },
    title :{
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default Heading