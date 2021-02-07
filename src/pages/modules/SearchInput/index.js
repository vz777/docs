import React, { Component } from 'react'

export default class SearchInput extends Component {
    componentDidMount(){
        this.searchInput.focus();
    }

    render () {
        const doSearch = this.props.doSearch;
        return (
            <input
                className="col col--6 col--offset-3 searchInput"
                ref={(input) => { this.searchInput = input; }}
                placeholder='Search modules...'
                value={this.props.defaulValue}
                type="text"
                onChange={(e) => doSearch(e.target.value)}
            />
        );
    }
}