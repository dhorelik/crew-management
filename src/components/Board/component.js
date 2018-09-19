import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'


export default class Board extends Component {
    static propTypes = {
        initializeBoard: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.props.initializeBoard()
    }

    render() {
        return (
            <div className='board'>
                <div className='board__column'>
                    Applied
                </div>

                <div className='board__column'>
                    Interviewing
                </div>

                <div className='board__column'>
                    Hired
                </div>
            </div>
        )
    }
}
