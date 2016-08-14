import React from 'react'
import {connect} from 'react-redux'

import {init} from '../../redux/actions'

import './index.scss'

@connect(_ => ({ init: _.init }))
export default class AppContainer extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const resolveAfter = (arg, after) => new Promise(function (resolve) {
            setTimeout(() => {
                resolve(arg)
            }, after);
        });
        this.props.dispatch(init(resolveAfter('Hello,Redux', 3000)));
        this.props.dispatch(init('Hello,React'));
    }

    render() {
        return (
            <div id="main">
                <h1>{this.props.init}</h1>
            </div>
        )
    }
}
