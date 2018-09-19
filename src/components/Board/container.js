import { connect } from 'react-redux'
import { initializeBoard, updateStatus } from './actions'
import component from './component'


const mapStateToProps = state => ({
    candidates: state.board
})


export default connect(
    mapStateToProps,
    {
        initializeBoard,
        updateStatus
    }
)(component)
