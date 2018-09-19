import { connect } from 'react-redux'
import { initializeBoard } from './actions'
import component from './component'


export default connect(
    null,
    { initializeBoard }
)(component)
