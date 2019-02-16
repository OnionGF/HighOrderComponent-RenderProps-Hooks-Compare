import React,{useState} from 'react'
import {View, Text,Button} from 'react-native'
import getRandomColor from '../ColorUtil'

export default function HookCount() {
    const [count,addCount,minusCount] = countNumber(0);
    const [theme,changeBackgroundColor] = changeThemeFunc('white');
    return (
        <View style={{backgroundColor:theme,flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>You clicked {count} times</Text>
            <Button onPress={addCount} title={'add'}/>
            <Button onPress={minusCount} title={'minus'}/>
            <Button onPress={changeBackgroundColor} title={'ChangeTheme'}/>
        </View>
    );
}

function countNumber(initNumber) {
    const [count, setCount] = useState(initNumber);
    const addCount=()=> setCount(count + 1);
    const minusCount=()=>setCount(count -1);
    return [
        count,
        addCount,
        minusCount
    ]
}

function changeThemeFunc(initColor) {
    const [theme, changeTheme] = useState(initColor);
    const changeBackgroundColor=()=>changeTheme(getRandomColor())
    return [
        theme,
        changeBackgroundColor
    ]
}