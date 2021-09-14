import React, { useEffect, useState } from "react"
import { View, Text, ScrollView, Button } from 'react-native'
import firebase from '../database/firebase'
import { ListItem } from 'react-native-elements'


const UserListScreen = (props) => {
    const[state, setState] = useState([])

    useEffect(()=>{
        firebase.db.collection('users').onSnapshot(querySnapshot => {
            const users = querySnapshot.docs.map(doc => {
                const {name, email, phone} = doc.data()
                return {name,email,phone, id : doc.id}
            })
            console.log(users)
            setState(users)
        })
        console.log(state)
    },[])
    return (
        <ScrollView>
            <Button title="Create User" onPress={()=> props.navigation.navigate('CreateUserScreen')} />
            {  
                state.map(user => {
                    return (
                        <ListItem key={user.id} bottomDivider onPress={()=>{
                            props.navigation.navigate('UserDetailScreen',{
                                userId: user.id
                            })
                        }}>
                            <ListItem.Chevron/>
                            <ListItem.Content>
                                <ListItem.Title>{user.name}</ListItem.Title>
                                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </ScrollView>
    )
}

export default UserListScreen