import React from 'react';

class Choice extends React.Component {
  state = {
    radio: 'option1'
  }
  handleOption=(event) =>{
  
      this.setState({
        radio: event.target.value
      })
      console.log(this.state.radio);
  }

  render() {

    return (
      <div>
        <div className="form-check">
          <input onClick={this.handleOption} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
          <label className="form-check-label" for="exampleRadios1">
            Income
          </label>
        </div>
        <div className="form-check">
          <input  onClick={this.handleOption} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
          <label className="form-check-label" for="exampleRadios2">
            Expense
          </label>
        </div>

      </div>
    )

  }
 
}

export default Choice;