import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions'

class ListItem extends Component {


    renderDesription() {

        const { library , selectedLibraryId } = this.props
        if (library.item.id === selectedLibraryId) {
            return (
                <Text>
                    {library.item.description}
                </Text>
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

const mapStateToProps = state => {
    return {
        selectedLibraryId: state.selectedLibraryId
    }
}


export default connect(mapStateToProps, actions) (ListItem);