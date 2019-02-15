import React,{useState} from 'react'
import {View, Text,Button} from 'react-native'
import getRandomColor from '../ColorUtil'

function Count({count,add,minus,theme,changeTheme}) {

    return (
        <View style={{backgroundColor:theme,flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>You clicked {count} times</Text>
            <Button onPress={add} title={'add'}/>
            <Button onPress={minus} title={'minus'}/>
            <Button onPress={changeTheme} title={'ChangeTheme'}/>
        </View>
    );
}

const countNumber= (WrappedComponent)=>
    class CountNumber extends React.Component{
        state={count:0};

        add=()=>this.setState({count:this.state.count+1});

        minus=()=>this.setState({count:this.state.count-1});

        render() {
            return <WrappedComponent
                {...this.props}
                count={this.state.count}
                add={this.add.bind(this)}
                minus={this.minus.bind(this)}
            />
        }
    };


const changeTheme=(WrappedComponent)=> {
    class ChangeTheme extends React.Component {
        state = {
            theme: 'white'
        };
        changeTheme = () => this.setState({theme: getRandomColor()});

        render() {
            return <WrappedComponent
                {...this.props}
                theme={this.state.theme}
                changeTheme={this.changeTheme.bind(this)}
            />
        }
    }

    ChangeTheme.displayName = `changeTheme(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return ChangeTheme;
};

export default changeTheme(countNumber(Count));