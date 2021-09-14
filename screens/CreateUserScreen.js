import React, {useState} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet} from 'react-native'
import firebase from '../database/firebase'

const CreateUserScreen = (props) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const createNewUser = async() => {
        if (state.name === '')
        {
            alert('Please provide a name')
        }
        else
        {
            await firebase.db.collection('users').add({
                name:state.name,
                email: state.email,
                phone: state.phone
            })
            props.navigation.navigate('UsersList')
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

export default CreateUserScreen