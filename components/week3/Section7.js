import React from "react";
import { Image, Text, View } from "react-native";

export default function Section7() {
    return (
        <View style={{ borderTopWidth : 0, borderBottomWidth :1 , borderColor: 'grey', padding: 10}}>
            <View>
                <Text style={{fontSize: 18, fontWeight: 'bold' }}>Room Type</Text>
            </View>

            <View style={{flexDirection:'row'}}>
                <View style={{paddingTop: 10 }}>
                    <Image style={{resizeMode : "cover" , width: 150,height : 175, borderRadius: 15}} source={require("../../assets/week3/room-8.jpg")} />
                </View>

                <View>
                    <Text style={{padding: 10, fontSize: 18, fontWeight: 'bold'}}>Standard Twin Room</Text>
                    <Text style={{padding: 10,paddingTop: 75, color: 'red', fontSize: 18, fontWeight: 'bold'}}>$399.99</Text>
                    <Text style={{padding: 10, fontSize: 16}}>Hurry Up! This is your last room!</Text>

                </View>

            </View>
        </View>
    );

}