import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions'

class ListItem extends Component {

    componentWillUpdate () {
        LayoutAnimation.spring();
    }

    renderDesription() {

        const { library , expended} = this.props
        if (expended) {
            return (

                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {library.item.description}
                    </Text>
                </CardSection>
                
            )
        }
    }
    
    render(){
        const { titleStyle } = styles
        const { id, title } = this.props.library.item;

        

        console.log('props in card section',this.props)
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text 
                            style={titleStyle}>{ title } 
                        </Text>
                    </CardSection>
                    {this.renderDesription()}
                </View>
                
            </TouchableWithoutFeedback>
        )
    }
}

const styles={
    titleStyle: {
        fontSize: 25,
        paddingLeft: 15

    }
}

const mapStateToProps = (state, ownProps) => {
    const expended = state.selectedLibraryId === ownProps.library.item.id;

    return {
        expended
    };
};


export default connect(mapStateToProps, actions) (ListItem);