import React from 'react'
import {View, Text,Button} from 'react-native'
import getRandomColor from '../ColorUtil'

export default function RenderProps() {

    return (
        <ChangeTheme>
            {
                ({theme,changeTheme})=>
                <View style={{backgroundColor:theme,flex:1,alignItems:'center',justifyContent:'center'}}>
                    <CountNumber>
                        {
                            ({count,add,minus})=>
                            <>
                                <Text>You clicked {count} times</Text>
                                <Button onPress={add} title={'add'}/>
                                <Button onPress={minus} title={'minus'}/>
                                <Button onPress={changeTheme} title={'ChangeTheme'}/>
                            </>
                        }
                    </CountNumber>
                </View>
            }
        </ChangeTheme>
    );
}


class CountNumber extends React.Component{
    state={count:0};
    add=()=>this.setState({count:this.state.count+1});
    minus=()=>this.setState({count:this.state.count-1});
    render(){
        return this.props.children({
            count: this.state.count,
            add: this.add.bind(this),
            minus:this.minus.bind(this)
        })
    }
}

class ChangeTheme extends React.Component{
    state={
        theme:'white'
    };
    changeTheme=()=>this.setState({theme:getRandomColor()});
    render(){
        return this.props.children({
            theme:this.state.theme,
            changeTheme:this.changeTheme.bind(this)
        });
    }
}