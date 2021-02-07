import React, { Component } from 'react'
import axios from 'axios';
import semver from 'semver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Abandoned from "../Abandoned";

export default class Module extends Component {
    constructor(props) {
        super(props);

        this.state = {
            init: false,
            lastVersion: null,
            copied: false
        }
    }

    getAdditionalData() {
        axios.get('https://repo.packagist.org/p/'+this.props.name+".json")
            .then(response => {
                const packageVersions = response.data.packages[this.props.name];
                const lastVersionNumber = Object.keys(packageVersions)
                    .map(version => semver.valid(version) ? version : version+'.0')
                    .filter(version => semver.valid(version))
                    .sort(semver.rcompare)[0];
                this.setState(
                    {
                        init:true,
                        lastVersion: packageVersions[lastVersionNumber]
                    }
                );
            });
    }

    copyText(text) {
        navigator.clipboard.writeText(text);
        this.setState(
            {
                copied: true
            },
            () => {
                setTimeout(
                    () => {
                        this.setState({copied:false});
                    },
                    800
                );
            }
        )
    }

    componentDidMount() {
        this.getAdditionalData();
    }

    render() {
        const { lastVersion } = this.state;
        let composerRequireCommand = "composer require "+this.props.name;
        if (lastVersion) {
            composerRequireCommand = composerRequireCommand+" ~"+lastVersion.version;
        }

        const copyIcon = this.state.copied ? faCheck : faCopy;

        const moduleName = this.props.package ? this.props.package.charAt(0).toUpperCase() + this.props.package.slice(1).replace('-module', '').replaceAll('-', ' ') : "";

        return (
            <div className="col col--6" style={{ marginBottom: 40 }}>
                <div className="card item theliaModule">
                    <div className="card__header">
                        <h2>{moduleName}</h2>
                        <p>By {this.props.vendor === "thelia" ? "Thelia core team" : this.props.vendor}</p>
                    </div>
                    <div className="card__body">
                        <p>{this.props.description}</p>
                        <div className="container">
                            <div className="row">
                                <div className="col col--10 composerCommand">
                                    {composerRequireCommand}
                                </div>
                                <div className="col col--2">
                                    <a className="buttonCopy" onClick={() => this.copyText(composerRequireCommand)}>
                                        <FontAwesomeIcon icon={copyIcon} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {this.props.hasOwnProperty("abandoned") ? <Abandoned package={this.props.abandoned} /> : null}
                    </div>
                    <div className='card__footer'>
                        <div className="button-group button-group--block">
                            <a className="button button--secondary" href={this.props.repository} target="_blank">
                                <FontAwesomeIcon icon={faGithub} /> Github
                            </a>
                            <a className="button button--secondary" href={this.props.url} target="_blank">
                               <FontAwesomeIcon icon={faCube} /> Packagist
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
