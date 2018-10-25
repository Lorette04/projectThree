import React from "react";
import "../History/History.css"



const CompHistory = () => (
            <div class="list-group">

<table class="table">
  <caption>List of users</caption>
  <thead>
      <tr>
          Month
      </tr>
    <tr class="table-acive">
      <th scope="col">#</th>
      <th scope="col">Category</th>
      <th scope="col">Description</th>
      <th scope="col">Date</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-danger">
      <th scope="row">1</th>
      <td>Expense</td>
      <td>Shoes</td>
      <td>Oct 13 2018</td>
      <td>$299.73</td>
    </tr>
    <tr class="bg-danger">
      <th scope="row">2</th>
      <td>Expense</td>
      <td>Shirt</td>
      <td>Oct 13 2018</td>
      <td>$99.73</td>
    </tr>
    <tr class="bg-success">
      <th scope="row">3</th>
      <td>Income</td>
      <td>Allowance</td>
      <td>Oct 16, 2018</td>
      <td>$100</td>
    </tr>
    <tr class="bg-danger">
      <th scope="row">4</th>
      <td>Expense</td>
      <td>Food</td>
      <td>Oct 23 2018</td>
      <td>$39.73</td>
    </tr>
    <tr class="bg-success">
      <th scope="row">5</th>
      <td>Income</td>
      <td>Gift</td>
      <td>Oct 16, 2018</td>
      <td>$125</td>
    </tr>
    <tr class="bg-danger">
      <th scope="row">6</th>
      <td>Expense</td>
      <td>Shirt</td>
      <td>Oct 13 2018</td>
      <td>$99.73</td>
    </tr>
    <tr class="bg-success">
      <th scope="row">7</th>
      <td>Income</td>
      <td>Allowance</td>
      <td>Oct 16, 2018</td>
      <td>$100</td>
    </tr>
    <tr class="bg-danger">
      <th scope="row">8</th>
      <td>Expense</td>
      <td>Food</td>
      <td>Oct 23 2018</td>
      <td>$39.73</td>
    </tr>
    
  </tbody>
</table>


                <tr class="table-active">Month</tr>

                <tr>
                    <td class="table-active">...</td>


                    <td class="table-danger">...</td>
                    <td class="table-danger">...</td>
                    <td class="table-success">...</td>
                    <td class="table-danger">...</td>
                    <td class="table-success">...</td>
                    <td class="table-danger">...</td>
                    <td class="table-success">...</td>
                    <td class="table-danger">...</td>
                </tr>
            </div>
        );
 

export default CompHistory