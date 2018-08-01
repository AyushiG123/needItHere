import React, {Component} from 'react'

import Sidebar from './Sidebar'

class VotePage extends Component{
    render(){
        return(
            <div className="votePage">
                <Sidebar />
                Voting!!
            </div>
        )
    }
}

export default VotePage