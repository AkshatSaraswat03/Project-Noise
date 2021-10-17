import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './check.css'


const CheckResult = () => {
  return (
    <div>
      <div class="head w-100 ">
        <h2 class="heading">#REF1ECT</h2>
        <h1 class="heading border-bottom">THE WHITELIST</h1>
        <p class = "py-5">Fill in your wallet address below to check if you made it.</p>
        <input type="text" class="w-100 formtext text-light bg-dark" name="Paste the wallet address" />
        <div class="w-100 text-center py-3">
          <input type="submit" secondary class="btn-primary2 p-1 btn-block" value="Submit" />
        </div>
        
      </div>
    </div>
  );
};

export default CheckResult;