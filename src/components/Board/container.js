import { connect } from 'react-redux'
import { updateStatus } from './actions'
import component from './component'


const mapStateToProps = state => ({
    candidates: state.board
})


export default connect(
    mapStateToProps,
    { updateStatus }
)(component)
