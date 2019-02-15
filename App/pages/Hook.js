import React,{useState} from 'react'
import {View, Text,Button} from 'react-native'
import getRandomColor from '../ColorUtil'

export default function HookCount() {
    const {count,addCount,minusCount} = countNumber();
    const {theme,changeTheme} = changeThemeFunc();
    return (
        <View style={{backgroundColor:theme,flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>You clicked {count} times</Text>
            <Button onPress={addCount} title={'add'}/>
            <Button onPress={minusCount} title={'minus'}/>
            <Button onPress={changeTheme} title={'ChangeTheme'}/>
        </View>
    );
}

function countNumber() {
    const [count, setCount] = useState(0);
    return {
        count,
        addCount:()=> {setCount(count + 1)},
        minusCount:()=>{setCount(count -1)}
    }
}

function changeThemeFunc() {
    const [theme, changeTheme] = useState('white');
    return {
        theme,
        changeTheme:()=>changeTheme(getRandomColor())
    }
}