import React, {Component} from 'react'

class VotePage extends Component{
    render(){
        return(
            <div className="votePage" style = {styles}>
                <h1>
                    Cast your vote....
                </h1>
                <div>
                    <img src=" " alt="Bank"/>
                    <div className='content'>
                      <h2>
                          Bank
                          </h2>
                          <p>
                              Manage money easily with dedicated desk service and an 24 hr ATM 
                              </p>
                    </div>
                </div>
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