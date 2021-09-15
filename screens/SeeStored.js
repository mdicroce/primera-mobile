import React, { useEffect, useState } from "react"
import { View, Text, ScrollView, Button } from 'react-native'
import firebase from '../database/firebase'
import { ListItem } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';


const SeeStored = (props) => {
    const[state, setState] = useState([])

    useEffect(()=>{
        const value = await AsyncStorage.getItem('stored')
        const parsedValue = JSON.parse(value)
        if(value !== null)
        {
            setState({...parsedValue})
        }
    },[])
    return (
        <ScrollView>
            <Button title="Create User" onPress={()=> props.navigation.navigate('PruebaGuardado')} />
                <ListItem bottomDivider >
                    <ListItem.Chevron/>
                    <ListItem.Content>
                        <ListItem.Title>{state.name}</ListItem.Title>
                        <ListItem.Subtitle>{state.email}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
        </ScrollView>
    )
}

export default SeeStored