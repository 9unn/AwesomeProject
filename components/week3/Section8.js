import react from "react";
import { Button, Text, View } from "react-native";

export default function Section8() {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
            <View style={{flexDirection: 'column'}}>
                <Text>Price</Text>
                <Text style={{paddingTop: 10, color: 'red', fontSize: 18, fontWeight: 'bold'}}>$399.99</Text>
                <Text style={{paddingTop: 5}}>AVG/Night</Text>
            </View>

            <View style={{backgroundColor: 'red', borderRadius:20, width:150 , padding: 15}}>
                <Button title="Book now" color="white" />
            </View>

        </View>
    );
}