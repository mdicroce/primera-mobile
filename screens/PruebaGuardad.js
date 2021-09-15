import React, {useState} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const PruebaGuardado = (props) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const createNewUser = async() => {
        try {
            await AsyncStorage.setItem('stored',JSON.stringify(state))
            props.navigation.navigate('SeeStored')
        } catch (error) {
            
        }
    }

    return (
        <ScrollView style={styles.container} >
            <View>
                <TextInput style={styles.inputGroup} placeholder="Name User" onChangeText={value=>{setState({...state, name: value})}} />
            </View>
            <View>
                <TextInput style={styles.inputGroup} placeholder="Email User" onChangeText={value=>{setState({...state, email: value})}} />
            </View>
            <View>
                <TextInput style={styles.inputGroup} placeholder="Phone User"  onChangeText={value=>{setState({...state, phone: value})}} />
            </View>
            <View>
                <Button title="Save User" onPress={createNewUser}  />
            </View>
            <View>
                <Button title="see users" onPress={()=>{props.navigation.navigate('UsersList')}}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        BorderBottomColor: '#ccc'
    },
    container: {
        flex: 1,
        padding: 35
    }
})

export default PruebaGuardado