import React, { Component } from 'react'
import {connect} from 'react-redux'

 class NewComp extends Component {
    constructor(props){
        super(props)
        this.state={
            message: "Subscribe to SimpliLearn",
        };
    }
    styles={
        fontstyle:"italic",
        color:"blue",
    };
    ButtonChange=() =>{
        this.setState({
            message:"Thanks for subscribing"
        })
    }
  render() {
    return (
      <div className="App">
          <h3 style={this.styles}>{this.state.message}</h3>
          <button onClick={this.ButtonChange}>Subscribe</button>
          {/* <NewComp/> */}
      </div>
    )
  }
}

export default NewComp