import React from 'react'
import {AwesomeButton} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import './index.css'


export class ButtonAwesome extends React.Component {
  render(){
    return( 
      <div className = "button" >
        < AwesomeButton type = "primary"
        size = "large"
        button-hover-pressure="3" > Primary </AwesomeButton>
      </div>
    )
  }
}

