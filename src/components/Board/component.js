import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from 'components/Card'
import './style.css'


export default class Board extends Component {
    static propTypes = {
        candidates: PropTypes.shape({
            byId: PropTypes.shape,
            applied: PropTypes.arrayOf(PropTypes.string),
            interviewing: PropTypes.arrayOf(PropTypes.string),
            hired: PropTypes.arrayOf(PropTypes.string),
        }).isRequired,
        initializeBoard: PropTypes.func.isRequired,
        updateStatus: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.props.initializeBoard()
    }

    handleStatusUpdate = (id, newStatus, oldStatus) => {
        this.props.updateStatus(id, newStatus, oldStatus)
    }

    render() {
        return (
            <div className='board'>
                <div className='board__column'>
                    <h3 className='board__title'>Applied</h3>

                    { this.props.candidates.applied.map(candidateId => <Card
                        key={candidateId}
                        handleRight={() => this.handleStatusUpdate(candidateId, 'interviewing', 'applied')}
                        {...this.props.candidates.byId[candidateId]}/>)
                    }
                </div>

                <div className='board__column'>
                    <h3 className='board__title'>Interviewing</h3>

                    { this.props.candidates.interviewing.map(candidateId => <Card
                        key={candidateId}
                        handleLeft={() => this.handleStatusUpdate(candidateId, 'applied', 'interviewing')}
                        handleRight={() => this.handleStatusUpdate(candidateId, 'hired', 'interviewing')}
                        {...this.props.candidates.byId[candidateId]}/>)
                    }
                </div>

                <div className='board__column'>
                    <h3 className='board__title'>Hired</h3>

                    { this.props.candidates.hired.map(candidateId => <Card
                        key={candidateId}
                        handleLeft={() => this.handleStatusUpdate(candidateId, 'interviewing', 'hired')}
                        {...this.props.candidates.byId[candidateId]}/>)
                    }
                </div>
            </div>
        )
    }
}
