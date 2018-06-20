import React, { Component } from 'react';
import moment from 'moment';

export default class Timer extends Component{
    
    render(){
        return(
            <div>
                {Math.floor(this.props.endTime.diff(moment())/1000)}
            </div>
        )
    }
}