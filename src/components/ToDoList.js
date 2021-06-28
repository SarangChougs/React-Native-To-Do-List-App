import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

function ToDoList(props){
 
    const data = ['item1', 'item2', 'item3']

    function renderCard(element){
        return(
            <View style={styles.card} >
                <Text>
                    {element.item}
                </Text>
                <FontAwesome 
                name="trash" 
                size={25}
                onPress={() => props.onDelete(element)}
                />
            </View>
        )
    }

    return(
        <View style={styles.container}> 
            <FlatList
                data={props.data}
                renderItem={(item) => renderCard(item)}
                keyExtractor={(item) => data.indexOf(item).toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 10,
        padding: 10,
        flex: 1
    },

    card: {
        backgroundColor: '#C9CBFE',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        padding: 20,
        borderRadius: 20
    }
})

export default ToDoList