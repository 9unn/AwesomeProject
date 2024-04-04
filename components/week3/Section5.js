import React from 'react';
import { Text, View } from "react-native";
import MyIcon from './MyIcon';


export default function Section5() {

        return (
                <View style={{flex : 1, flexDirection: 'row' , padding: 10}}>

                    <MyIcon title="wifi" name="wifi" size={30} color="darkblue" />
                    <MyIcon title="coffee" name="coffee" size={30} color="darkblue" />
                    <MyIcon title="bath" name="bath" size={30} color="darkblue" />
                    <MyIcon title="car" name="car" size={30} color="darkblue" />
                    <MyIcon title="paw" name="paw" size={30} color="darkblue" />

                </View>
        );
}