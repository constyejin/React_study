import React from 'react'

const boxDefault = {
  user : {
    name : "mario",
    img : "https://i.namu.wiki/i/isewV5YhMk42p6KuBkR1J_u1mqj2wT8hkcSDbagHhqGacKERoVq9awgIkAxT187qKocNqobMrn-_sLnPD6ZV6Q.webp", 

  },
  computer : {
    name : "loigi",
    img : "https://i.namu.wiki/i/IPBNbStIHLetV6UJnHJhRonRoA8s0SeYaAOz4_sceHUof-y9bxiCLxH8aM33qsPDiLaCO8SZ0ugXD4Kh6JHROw.webp"
  }
}


const Box = (props) => {
  const {title} = props;
  const defalutImg = title === "You" ? boxDefault.user : boxDefault.computer;
  
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img src={props.item ? props.item.img : defalutImg.img} alt={props.item ? props.item.name : defalutImg.name} />
      <h2>{props.result}</h2>
    </div>
  )
}

export default Box
