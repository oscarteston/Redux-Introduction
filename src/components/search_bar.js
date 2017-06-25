import React, { Component } from 'react';

class searchBar extends Component {
    constructor(props) {
        super(props);

    }

    onInputChange(event) {
        let searchText = event.target.value;
    }

    render() {
        return (
            <div className="search-bar">
                    <input value='' onChange={this.onInputChange}/>
                    <p>Valor de busqueda: {}</p>
            </div>
        )
    }
}

export default searchBar;