import React from 'react';
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default function Section2() {

        return (
                <View style={{ flex : 1, marginTop :-15 , padding : 10, borderWidth : 1, borderColor : 'lightgray', borderRadius : 20, backgroundColor: 'lightgrey', width: 500, alignSelf: 'center'}}>
                    <Text style={{textAlign : 'center'}}> Hilton San Francisco </Text>

                    <View style={{ flexDirection : "row" , justifyContent: 'center'}}>
                        <FontAwesome name="star" size={20} color="orange" />
                        <FontAwesome name="star" size={20} color="orange" />
                        <FontAwesome name="star" size={20} color="orange" />
                        <FontAwesome name="star" size={20} color="orange" />
                        <FontAwesome name="star-half" size={20} color="orange" />
                    </View>

                    <Text style={{textAlign : 'center'}}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>

                </View>
        );
}