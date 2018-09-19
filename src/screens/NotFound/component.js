import React from 'react'
import { Link } from 'react-router-dom'
import * as routePaths from 'constants/routePaths'


const NotFound = () => (
    <div>
        404<br />
        <Link to={routePaths.HOME}>visit homepage</Link>
    </div>
)

export default NotFound
