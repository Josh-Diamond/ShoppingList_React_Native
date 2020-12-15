import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'


const App = () => {
  const [items, setItems] = useState([])

  const deleteItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id != id))
  }

  const addItem = (item, setInput) => {
    if(item === '') {
      Alert.alert(
        'NO ITEM FOUND',
        'You must first enter an item',
        [
          { text: 'OK' }
        ],
        // { cancelable: false }
      );
    } else {
        setItems(prevItems => [{id: Math.random(), text: item}, ...prevItems])
        setInput('')
    }
}

  return (
    <View style={styles.view}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />} keyExtractor={item => item.id} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
})
export default App;