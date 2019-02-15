import React from 'react'
import {View, Text,Button} from 'react-native'

export default function HomePage(Props) {

    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Button onPress={()=>Props.navigation.navigate('Hook')} title={'Hook'}/>
            <Button onPress={()=>Props.navigation.navigate('RenderProps')} title={'RenderProps'}/>
            <Button onPress={()=>Props.navigation.navigate('HigherOrderComponent')} title={'HigherOrderComponent'}/>
        </View>
    );
}
