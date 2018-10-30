import React from 'react';

class CompTransactionForm extends React.Component {
  state = {
    radio: 'option1'
  }
  handleOption = (event) => {

    this.setState({
      radio: event.target.value
    })
    console.log(this.state.radio);
  }

  render() {

    return (
      <form>
        <div className="form-check">
          <input onClick={this.handleOption} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
          <label className="form-check-label" for="exampleRadios1">
            Income
          </label>
        </div>
        <div className="form-check">
          <input onClick={this.handleOption} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
          <label className="form-check-label" for="exampleRadios2">
            Expense
          </label>
        </div>

        <br />

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input type="input"
            value={this.state.Amount} class="form-control" aria-label="Amount (to the nearest dollar)" />
          <div class="input-group-append">

          </div>
        </div>

        <br />

        <div class="form-group">
          <label for="exampleFormControlSelect1">Category</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Expense_Miscellaneous</option>
            <option>Income_Miscellaneous</option>
            <option>Allowance</option>
            <option>Gift_Expense</option>
            <option>Gift_Income</option>
            <option>Income</option>
            <option>Chores</option>
          </select>
        </div>

        <br />

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <br />

        <button type="Submit" class="btn btn-primary" value="Submit" data-toggle="button" aria-pressed="false" autocomplete="off">
          Submit
          </button>

      </form >
    )
  }
}
    export default CompTransactionForm;