import React from 'react'
import renderer from 'react-test-renderer'
import Board from './component'
import { updateStatus } from './actions'


// TODO sample data should be kept in constants elsewhere
const mockData = {
    byId: {
        'NL 82 76 72 J': {
            name: {
                title: 'ms',
                first: 'katherine',
                last: 'lane'
            },
            picture: {
                large: 'https://randomuser.me/api/portraits/women/40.jpg'
            }
        }
    },
    applied: [ 'NL 82 76 72 J' ],
    interviewing: [],
    hired: []
}

describe('Board', () => {
    it('should render consistently', () => {
        const component = renderer.create(<Board candidates={mockData} updateStatus={updateStatus} />)
        expect(component.toJSON()).toMatchSnapshot()
    })
})
