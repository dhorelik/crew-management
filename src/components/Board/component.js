import React from 'react'
import type { CandidateState, CandidateStatusValues } from 'types/candidate'
import Card from 'components/Card'
import type { UpdateStatusAction } from 'types/actions'
import './style.css'


type Props = {
    candidates: CandidateState,
    updateStatus: (id: string, newStatus: CandidateStatusValues, oldStatus: CandidateStatusValues) => UpdateStatusAction
}


const Board = (props: Props) => (
    <div className='board'>
        <div className='board__column'>
            <h3 className='board__title'>Applied</h3>

            { props.candidates.applied.map(candidateId =>
                <Card
                    key={candidateId}
                    handleRight={() => props.updateStatus(candidateId, 'interviewing', 'applied')}
                    {...props.candidates.byId[candidateId]}
                />
            )}
        </div>

        <div className='board__column'>
            <h3 className='board__title'>Interviewing</h3>

            { props.candidates.interviewing.map(candidateId =>
                <Card
                    key={candidateId}
                    handleLeft={() => props.updateStatus(candidateId, 'applied', 'interviewing')}
                    handleRight={() => props.updateStatus(candidateId, 'hired', 'interviewing')}
                    {...props.candidates.byId[candidateId]}
                />
            )}
        </div>

        <div className='board__column'>
            <h3 className='board__title'>Hired</h3>

            { props.candidates.hired.map(candidateId =>
                <Card
                    key={candidateId}
                    handleLeft={() => props.updateStatus(candidateId, 'interviewing', 'hired')}
                    {...props.candidates.byId[candidateId]}
                />
            )}
        </div>
    </div>
)

export default Board
