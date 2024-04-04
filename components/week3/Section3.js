import React from 'react';
import { Text, View } from "react-native";

export default function Section3() {

        return (
                <View style={{flex : 1, padding: 10}}>

                    <View style={{ flexDirection: "row" }}>
                       
                        <View style={{ width: 50, height: 50, borderRadius: 50/2,justifyContent: 'center', backgroundColor: 'red'}}>
                            <Text style={{ paddingLeft : 12,color: 'white'}}>9.5</Text>
                        </View>

                        <View>
                            <Text style={{paddingLeft : 10, paddingTop : 10, color:'red', fontSize: 18}}>Excellent</Text> 
                            <Text style={{paddingLeft : 10}}>See 801 reviews</Text>
                        </View>
                    </View>


                </View>
        );
}