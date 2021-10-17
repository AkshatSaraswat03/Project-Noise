import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './check.css'
import { listenerCount } from 'process';
import { useState} from 'react';


const CheckResult = () => {
  const [selected, setSelected] = useState('');
  var list=[
    {
      "walletAdderss" : "hfdnjnvjfdnjnvejdmnjmnm",
    },
    {
      "walletAdderss" : "49808eodufrdjm",
    }
  ];
  const [info, setInfo] = useState('-');
  const handleSubmit = async () => {
    for(var i=0;i<list.length;i++){
      if(list[i].walletAdderss==selected){
        setInfo("Congratulations, You’re in!");
        break;
      }
      else{
        setInfo("Sorry, you didn’t make it!");
      }
    }
    console.log(info);
  }
  return (
    <div>
      <div class="head w-100 ">
        <h2 class="heading">#REF1ECT</h2>
        <h1 class="heading border-bottom">THE WHITELIST</h1>
        <p class = "py-5">Fill in your wallet address below to check if you made it.</p>
        <p secondary class="text-center tect">{info}</p>
        <input type="text" class="w-100  text-light bg-dark" placeholder="Paste the wallet address" value={selected}
							onChange={(e) => {
								setSelected(e.target.value);
							}}/>
        <div class="w-100 text-center py-3">
          <input type="submit" secondary class="btn-primary2  btn-block" value="Check if you’re on the list!" onClick={handleSubmit}/>
        </div>
        
      </div>
    </div>
  );
};

export default CheckResult;