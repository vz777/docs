import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default class Abandoned extends Component {
    render() {
        let replacementBlock = "please stop using it.";
        if (this.props.package) {
            replacementBlock = <span>please use <a href={"/modules?q="+this.props.package}>{this.props.package}</a> instead</span>;
        }
        return (
            <div className="abandoned">
               <FontAwesomeIcon icon={faExclamationTriangle} /> This package is <strong>abandoned</strong>, {replacementBlock}
            </div>
        )
    }
}
