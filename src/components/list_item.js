import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {

    
    render(){
        const { titleStyle } = styles

        console.log('props in card section',this.props)
        return (

        
            <CardSection>
                
                <Text style={titleStyle}>{this.props.library.item.title} </Text>
            </CardSection>
        )
    }
}

const styles={
    titleStyle: {
        fontSize: 25,
        paddingLeft: 15

    }
}

export default ListItem;