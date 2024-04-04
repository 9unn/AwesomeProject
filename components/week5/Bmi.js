import React, { useState } from "react";
import { View, TextInput, Text, Button, TouchableOpacity } from "react-native";


export default function Bmi() {   
    
    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0');
    const [body, setBody] = useState('Normal');

    console.log("STATE : ", weight, height, bmi, body);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        setBmi(output.toFixed(2));

        let set_Body = "";
            if (output<18.5)
                {
                    set_Body ="Underweight";
                }
            else 
            if (output>=18.5 && output<=24.99)
                {
                    set_Body ="Normal";
                }
            else 
            if (output>=25 && output<=29.99)
                {
                    set_Body ="Overweight";
                }
            else 
            if (output>=30 && output<=39.99)
                {
                    set_Body ="Obese";
                }
            else
                {
                    set_Body ="Morbidly Obese";
                }
        setBody(set_Body);
    };

    

    return (
        <View>
            <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10, height: 150, justifyContent: 'space-around', marginTop: 10}}>
                <Text style={{ fontSize : 20}}>Weight (kg.)</Text>
                <TextInput style={{fontSize: 20}} value={ weight } keyboardType="numeric" placeholder="Input your weight" onChangeText={ (newWeight) => setWeight(newWeight) }/>
                
            </View>

            <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10, height: 150, justifyContent: 'space-around', marginTop: 10}}>
                <Text style={{ fontSize : 20}}>Height (cm.)</Text>
                <TextInput style={{fontSize: 20}} value={ height} keyboardType="numeric" placeholder="Input your height" onChangeText={ (newHeight) => setHeight(newHeight) }   />
            </View>

            <View style={{flexDirection: 'row', marginVertical: 20}}>
                <View style={{flex: 1, padding: 20, backgroundColor: 'white', borderRadius: 10, height: 150 ,justifyConten: "center", alignItem: 'center', marginRight: 10}}>
                    <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 40}}>BMI : {bmi}</Text>
                </View>

                <View style={{flex: 1,padding: 20, backgroundColor: 'white', borderRadius:10, height:150, justifyContent:"center",alignItem: 'center', marginLeft: 10}}>
                    <Text style={{ fontSize: 20, alignSelf: 'center'}}> {body} </Text>
                </View>
            </View>

            {/* <View style={{padding: 20, backgroundColor: 'navy', borderRadius: 10, height: 80, justifyContent: 'space-around', marginTop: 10}}>
                <Button title='Caluculate' color='white' onPress={ onPressButton }/>
            </View> */}

            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "navy", borderRadius: 10 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>

             
        </View>
    );
}
