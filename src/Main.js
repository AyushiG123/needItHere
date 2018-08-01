import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import HomePage from './HomePage'
import VotePage from './VotePage';

class Main extends Component{
    render(){
        return(
          <div className="Main">
            <Switch>
               <Route path='/' component={HomePage}/>
               <Route path='/vote' component={VotePage}/>
            </Switch>
          </div>
        )
    }
}

//const styles={
    //display:'flex',
    //alignItems:'stretch',
    //height:'100vh'
//}

export default Main