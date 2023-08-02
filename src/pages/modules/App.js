import React, { Component } from 'react';
import axios from 'axios';

import SearchInput from "./SearchInput";
import Module from "./Module";


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modules: [],
            search: "",
            galleryStyle: true
        }
    }

    getModules = (nextPageLink = null, reset = false) => {
        const url = nextPageLink !== null ? nextPageLink : "https://packagist.org/search.json?per_page=16&type=thelia-module&q="+this.state.search;

        axios.get(url, {

        })
            .then(response => {
                const responseModules = response.data.results.map(function (module) {
                    const moduleVendorAndPackage = module.name.split('/');
                    return {
                        vendor:moduleVendorAndPackage[0],
                        package:moduleVendorAndPackage[1],
                        ...module
                    };
                });

                let modules = reset ? responseModules : this.state.modules.concat(responseModules);
                // handle success
                this.setState({
                    modules: modules,
                    nextPageLink: response.data.next ?? null
                });
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
    }

    doSearch = (search) => {
        if (null !== search) {
            window.history.pushState('Search', 'Search Thelia modules ' + search, '?q='+search);

            this.setState({
                search: search
            }, () => {
                this.getModules(null, true);
            })
        } else {
            this.getModules();
        }
    }

    switchListStyle = () => {
        this.setState((prevState, props) => {
            return {galleryStyle: !prevState.galleryStyle};
        });
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        let search = urlParams.get('q') != null ? urlParams.get('q') : null;

        this.doSearch(search);
    }


    render() {
        const { modules, nextPageLink, galleryStyle } = this.state;
        const columnButtonIcon = galleryStyle ? 'th list' : 'th';
        const numberOfColumns = galleryStyle ? 3 : 1;

        return (
            <div className="container">
                <div className="row">
                    <SearchInput doSearch={this.doSearch} defaulValue={this.state.search}/>
                </div>
                <div className="row">
                    {modules.map((module, index) => <Module key={module.name} {...module} />)}
                </div>
                <div className="row">
                    {nextPageLink !== null ? <button className="button button--block button--secondary" onClick={() => {this.getModules(nextPageLink)}}>See more</button> : null} 
                </div>
            </div>
        )
    }
}