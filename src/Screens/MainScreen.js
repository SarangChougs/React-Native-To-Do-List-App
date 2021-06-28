import React, {useState}  from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Heading from '../components/Heading'
import InputField from '../components/InputField'
import ToDoList from '../components/ToDoList'

function MainScreen(props){

    // logic of app
    const [item, setItem] = useState('')
    const [itemList, setItemList] = useState([])

    // add item function
    function addItem(title){
        if(item.length > 0){
            setItemList( prev => ([...prev, title]))
        }
    }

    // delete item
    function deleteItem(item){
        if(itemList.length > 1){
            itemList.splice(itemList.indexOf(item), 1)
            setItemList([...itemList])
        }else {
            setItemList([])
        }
        
    }
    return(
        <View style={styles.container}>
            <Heading title="To-Do List App"/>

            {/* input field */}
            <InputField 
                placeHolder="enter the item"
                onPress={() => addItem(item)}
                value={item}
                onChangeText={(text) => setItem(text)}
            />

            {/* to do list */}
            <ToDoList data={itemList} onDelete={(item) => deleteItem(item)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9FF3CB50'
    }
})

export default MainScreen;