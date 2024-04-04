import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Avatar,  Button,  Card,  Divider,  Icon,  Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from "../../components/week3/MyIcon";


export default function PaperQuiz() {
    return(
        <ScrollView style={{ paddingVertical: 50, flex: 1, margin: 25}}>

        {/* section 1 */}

            <Card>
                <Card.Cover source={require('../../assets/week3/room-6.jpg')} />
            </Card>

        {/* section 2 */}
            <Card style={{ width: 500, alignSelf:'center', marginTop: -20}}>

                <Card.Content style={{alignItems:'center'}}>
                    <Text variant="titleLarge" >Hilton San Francisco</Text>
                    
                    <Card.Content style={{flexDirection: 'row', margin: 10}}>
                        <FontAwesome name="star" size={20} color="orange" />
                        <FontAwesome name="star" size={20} color="orange" />
                        <FontAwesome name="star" size={20} color="orange" />
                        <FontAwesome name="star" size={20} color="orange" />
                        <FontAwesome name="star-half" size={20} color="orange" />
                    </Card.Content>

                    <Text variant="bodyMedium">Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
                    
                </Card.Content>

            </Card>

        {/* section 3 */}
            <Card.Content style={{margin: 10}}>
                <Card.Content style={{flexDirection: 'row'}}>
                    <Card.Content style={{ width: 75, height: 75, borderRadius: 100/2,justifyContent: 'center', backgroundColor: 'red'}}>
                        <Text variant="titleLarge" style={{color:'white', paddingLeft: 5}} >9.5</Text>
                    </Card.Content>

                    <Card.Content>
                        <Text variant="bodyLarge" style={{paddingLeft: 5, paddingTop: 20, color: 'red', fontWeight: 'bold'}} >Excellent</Text>
                        <Text variant="bodyMedium" style={{paddingLeft: 5}} >See 801 reviews</Text>
                    </Card.Content>
                </Card.Content>
            </Card.Content>

        {/* section 4 */}
            <Card.Content>
                <Card.Content style={{flex : 1, padding: 10 ,borderTopWidth : 1, borderBottomWidth :1 , borderColor: 'grey' }}>
                    <Text variant="bodyLarge" style={{ paddingLeft: 5, fontWeight: 'bold'}} >Hotel</Text>
                    <Text variant="bodyLarge" style={{ paddingLeft: 5}} >218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
                </Card.Content>
            </Card.Content>

        {/* section 5 */}
            <Card.Content>
                <Card.Content style={{flex : 1, flexDirection: 'row' , padding: 10}}>
                    <MyIcon title="wifi" name="wifi" size={30} color="darkblue" />
                    <MyIcon title="coffee" name="coffee" size={30} color="darkblue" />
                    <MyIcon title="bath" name="bath" size={30} color="darkblue" />
                    <MyIcon title="car" name="car" size={30} color="darkblue" />
                    <MyIcon title="paw" name="paw" size={30} color="darkblue" />
                </Card.Content>
            </Card.Content>

        {/* section 6 */}
            <Card.Content style={{flex : 1, flexDirection: 'column' , padding: 10, borderTopWidth : 1, borderBottomWidth :1 , borderColor: 'grey'}}>
                <Text variant="bodyLarge" style={{ paddingLeft: 10, fontWeight: 'bold'}} >Location</Text>
                <Text variant="bodyLarge" style={{ paddingLeft: 10}} >218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>

                <Card>
                    <Card.Cover source={require('../../assets/week3/map.jpg')} />
                </Card>
            </Card.Content>

        {/* section 7 */}
            <Card.Content style={{paddingTop: 10}}>

                <Text variant="bodyLarge" style={{ paddingLeft: 5, fontWeight: 'bold'}} >Room Type</Text>

                <Card style={{resizeMode : "cover" , width: 150,height : 175, borderRadius: 15}}>
                    <Card.Cover source={require('../../assets/week3/room-8.jpg')} />
                </Card>

                <Card.Content style={{marginLeft: 150}}>
                    <Text variant="bodyMedium" style={{fontSize: 18, fontWeight: 'bold', marginTop: -150 }}>Standard Twin Room</Text>
                    <Text variant="bodyLarge" style={{color: 'red', fontSize: 18, fontWeight: 'bold', marginTop: -100 }}>$399.99</Text>
                </Card.Content>

            </Card.Content>
        
        {/* section 8 */}
            <Card.Content>

            </Card.Content>
        </ScrollView>
        
    );
}