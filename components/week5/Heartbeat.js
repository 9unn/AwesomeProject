import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";




export default function Heartbeat() {   
    
    const [press , setPress] = useState('0');
    
    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let count = Number(press)+1;
        setPress(count);
    };

    return (
        <View>
            <View style={{flexDirection: 'row', padding: 10, justifyContent: 'space-around'}}>
                <TouchableOpacity onPress={onPressButton}>
                    <FontAwesome name="heart" size={40} color="pink"/>
                </TouchableOpacity>
                <Text style={{ fontSize : 25}}> {press} </Text>
            </View>
        </View>
    );
}
