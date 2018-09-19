import React from 'react'
import './style.css'


const Card = (props) => (
    <div className='card'>
        <img className='card__image' src={props.picture.large} alt={`${props.name.first} ${props.name.last}`} />
        <p className='card__name'>{props.name.first} {props.name.last}</p>

        {/*TODO really needs naming improvement*/}

        { props.handleLeft &&
            <div className='card__link card__link_position_left' onClick={props.handleLeft}>&larr;</div>
        }

        {props.handleRight &&
            <div className='card__link card__link_position_right' onClick={props.handleRight}>&rarr;</div>
        }
    </div>
)

// TODO propTypes

export default Card
