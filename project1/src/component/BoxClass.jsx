import React, { Component } from 'react';

const boxDefault = {
  user : {
    name : "mario",
    img : "https://i.namu.wiki/i/isewV5YhMk42p6KuBkR1J_u1mqj2wT8hkcSDbagHhqGacKERoVq9awgIkAxT187qKocNqobMrn-_sLnPD6ZV6Q.webp", 

  },
  computer : {
    name : "luigi",
    img : "https://i.namu.wiki/i/IPBNbStIHLetV6UJnHJhRonRoA8s0SeYaAOz4_sceHUof-y9bxiCLxH8aM33qsPDiLaCO8SZ0ugXD4Kh6JHROw.webp"
  }
}

class BoxClass extends Component {
  render() {
    const defaultImg = this.props.title === "YOU" ? boxDefault.user : boxDefault.computer;
    let result = this.props.result; 
  
    if(this.props.title === "COMPUTER" && 
       this.props.result !== "TIE" &&
       this.props.result !== ""
    ) {
      result = result === "WIN" ? "LOSE" : "WIN"
    } else {
      result = result;
    }

    const resultLower = result.toLowerCase();
    
    return (
      <div className={`box ${resultLower}`}>
        <h1>{this.props.title}</h1>
        <img src={this.props.item ? this.props.item.img : defaultImg.img} alt={this.props.item ? this.props.item.name : defaultImg.name} />
        <h2>{result}</h2>
      </div>
    );
  }
}

export default BoxClass;
