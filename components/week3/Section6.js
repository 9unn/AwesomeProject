import React from 'react';
import { Image, Text, View } from "react-native";


export default function Section6() {

        return (
                <View style={{flex : 1, flexDirection: 'column' , padding: 10, borderTopWidth : 1, borderBottomWidth :1 , borderColor: 'grey'}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', paddingBottom : 5}}>Location</Text>
                    <Text style={{fontSize: 18, paddingBottom : 20}}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et..</Text>
                    <View>
                        <Image style={{resizeMode : "cover" , aspectRatio : 17.5/4}} source={require("../../assets/week3/map.jpg")} />
                    </View>
                </View>
        );
}