import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator, StyleSheet, TextInput, ScrollView, Button, Alert } from 'react-native'
import firebase from '../database/firebase'

const UserDetailScreen =(props) => {
    const [state, setState] = useState({
        id: '',
        name: '',
        email: '',
        phone: ''
    })
    const [loading, setLoading] = useState(true)
    const getUserById = async id => {
        const dbRef = firebase.db.collection('users').doc(id)
        const doc = await dbRef.get()
        const user = doc.data()
        setState({...user, id: doc.id})
        setLoading(false)
    }
    useEffect(() => {
        getUserById(props.route.params.userId)
    },[])
    const deleteUserById = async() => {
        const dbRef = firebase.db.collection('users').doc(props.route.params.userId)
        await dbRef.delete()
        props.navigation.navigate('UsersList')
    }
    const openConfirmationAlert = () => {
        Alert.alert('Remove The User', 'Are you shure?', [
            {text: "yes", onPress: deleteUserById},
            {text: "No", onPress: ()=> {console.log("false")}}
        ])
    }
    const updateUser = async() =>{
        const dbRef = firebase.db.collection('users').doc(state.id)
        await dbRef.set({
            name: state.name,
            email: state.email,
            phone: state.phone
        })
        setState({id:'', name:'', email: '', phone: ''})
        props.navigation.navigate('UsersList')
    }

    if(loading)
    {
        return(
            <View>
                <ActivityIndicator size="large" color="#9e9e9e"/>
            </View>
        )
    }
    else
    {

        return (
            <ScrollView style={styles.container} >
                <View>
                    <TextInput value={state.name} style={styles.inputGroup} placeholder="Name User" onChangeText={value=>{setState({...state, name: value})}} />
                </View>
                <View>
                    <TextInput value={state.email} style={styles.inputGroup} placeholder="Email User" onChangeText={value=>{setState({...state, email: value})}} />
                </View>
                <View>
                    <TextInput value={state.phone} style={styles.inputGroup} placeholder="Phone User"  onChangeText={value=>{setState({...state, phone: value})}} />
                </View>
                <View>
                    <Button title="Update User" onPress={updateUser}  />
                </View>
                <View>
                    <Button title="Delete User" onPress={openConfirmationAlert}/>
                </View>
            </ScrollView>
        )
    }
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

export default UserDetailScreen