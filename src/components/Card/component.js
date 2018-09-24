import React from 'react'
import type { CandidateName, CandidatePicture } from 'types/candidate'
import './style.css'


type Props = {
    name: CandidateName,
    picture: CandidatePicture,
    handleLeft?: () => {},
    handleRight?: () => {}
}


const Card = (props: Props) => (
    <div className='card'>
        <img className='card__image' src={props.picture.large} alt={`${props.name.first} ${props.name.last}`} />
        <p className='card__name'>{props.name.first} {props.name.last}</p>

        {/*TODO really needs naming improvement*/}

        { props.handleLeft &&
            <a
                className='card__link card__link_position_left'
                onClick={props.handleLeft}
                onKeyDown={props.handleLeft}
                tabIndex='0'
                role='button'>
                &larr;
            </a>
        }

        { props.handleRight &&
            <a
                className='card__link card__link_position_right'
                onClick={props.handleRight}
                onKeyDown={props.handleRight}
                tabIndex='0'
                role='button'>
                &rarr;
            </a>
        }
    </div>
)

export default Card
