import React, {Component} from 'react'

import Sidebar from './Sidebar'

class VotePage extends Component{
    render(){
        return(
            <div className="votePage" style = {styles}>
                Voting!!
            </div>
        )
    }
}

const styles={
    flex: 1,
   display: 'flex',
   flexDirection: 'column',
   alignItems:'stretch',
   height:'100vh'
}

export default VotePage