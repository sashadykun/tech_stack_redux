import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './list_item';



class LibraryList extends Component {


    renderItem(library) {
        return <ListItem library={library} />
    }

    render(){
        console.log ('props', this.props )
        return (
                <FlatList data={this.props.libraries} 
                renderItem={this.renderItem}
                keyExtractor={(library) =>library.id}
            />
        )
    }
}

const mapStateToProps = state => {
    console.log ('state', state )
    return { libraries: state.libraries}
};

export default connect(mapStateToProps)(LibraryList);