import React from "react";
import "./TransactionForm.css";


const CompTransactionForm = props => (
   
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1">Deposit</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2">Income</label>
          </div>

          <br /> <br />

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input type="input"
              value={this.state.Amount} class="form-control" aria-label="Amount (to the nearest dollar)" />
            <div class="input-group-append">
              
            </div>
          </div>
        </div>



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

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>


        <button type="Submit" class="btn btn-primary" value="Submit" data-toggle="button" aria-pressed="false" autocomplete="off">
          Submit
          </button>
      
      </form>
    )
export default CompTransactionForm;