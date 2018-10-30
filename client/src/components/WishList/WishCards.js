import React from "react";
import "./WishList.css"

export const WishCards = props => (

    <div >

      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Description: Dirt Bike</h5>
              <p class="card-text">Amount: $100</p>
              <p class="card-text">Where: Target</p>
              <a href="mcdonalds.com" class="btn btn-primary">Link</a>
              <a href="mcdonalds.com" class="btn btn-primary">Remove</a>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Description: Ps4</h5>
              <p class="card-text">Amount: $250</p>
              <p class="card-text">Where: Amazon</p>
              <a href="mcdonalds.com" class="btn btn-primary">Link</a>
              <a href="mcdonalds.com" class="btn btn-primary">Remove</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Description: Computer</h5>
              <p class="card-text">Amount: $699</p>
              <p class="card-text">Where: BestBuy</p>
              <a href="bestbuy.com" class="btn btn-primary">Link</a>
              <a href="mcdonalds.com" class="btn btn-primary">Remove</a>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Description: Nintendo Switch</h5>
              <p class="card-text">Amount: $299</p>
              <p class="card-text">Where: Amazon</p>
              <a href="target.com" class="btn btn-primary">Link</a>
              <a href="mcdonalds.com" class="btn btn-primary">Remove</a>
            </div>
          </div>
        </div>
      </div>

    </div>

);

