import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearchText } from '../actions/actions';

class searchBar extends Component {
    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        let searchText = event.target.value;
        this.props.updateSearchText(searchText);
    }

    render() {
        return (
            <div className="search-bar">
                    <input value={this.props.searchText} onChange={this.onInputChange}/>
                    <p>Valor de busqueda: {this.props.searchText}</p>
            </div>
        )
    }
}


function mapStateToProps (state) {
    // lo que retorne esa función lo recibirá el componente SearchBar como propiedades
    return {
        searchText: state.searchText
    };
}

function mapDispatchToProps (dispatch) {
    //Hace que la acción updateSearchText bindeada al dispatch este disponible desde las propiedades del componente.
    //this.props.updateSearchText() === store.dispatch(updateSearchText)
    return bindActionCreators({ updateSearchText }, dispatch);
}


//Eleva SearchBar de componente a container
export default connect(mapStateToProps, mapDispatchToProps)(searchBar);