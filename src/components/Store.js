import bannana from '/home/origami/js.practice/reactPrac/cv-project/src/assets/0000000004011.webp'
import lime from '/home/origami/js.practice/reactPrac/cv-project/src/assets/0000000004048.webp'
import cabbage from '/home/origami/js.practice/reactPrac/cv-project/src/assets/0000000004061.webp'
import tomato from '/home/origami/js.practice/reactPrac/cv-project/src/assets/0000000004087.webp'
import corn from '/home/origami/js.practice/reactPrac/cv-project/src/assets/0000000004590.webp'
import avacado from '/home/origami/js.practice/reactPrac/cv-project/src/assets/0000000004770.webp'
import React, { useState, useEffect } from "react"


const Store = () => {
  let [object, ObjectAppender]= useState([
      {
    name: 'banana',
    inventory:10,
    count:0,
    cost:3,
    totalCost:0
  },
  {
    name: 'lime',
    inventory:30,
    count:0,
    cost:3,
    totalCost:0
  },
  {
    name: 'cabbage',
    inventory:20,
    count:0,
    cost:2,
    totalCost:0
  },
  {
    name: 'tomato',
    inventory:15,
    count:0,
    cost:1,
    totalCost:0
  },
  {
    name: 'corn',
    inventory:35,
    count:0,
    cost:2,
    totalCost:0
  },
  {
    name: 'avacado',
    inventory:12,
    count:0,
    cost:5,
    totalCost:0
  }])
 let [userCost, appendCost]= useState(0)
const enterNum=(e)=>{
  if(e.keyCode === 13){
    const vals=parseInt(e.target.value)
    if(Number.isInteger(vals) === true && vals>0){
      let path=parseInt(e.target.getAttribute('data'))
      const chang=object[path].inventory

        if(vals<=chang){
        let copy=[...object]
        copy[path].inventory=object[path].inventory-vals
        copy[path].count=object[path].count+vals
          ObjectAppender(copy)
        e.target.value=''
       }
    }
    
  }
}
useEffect(()=>{

})
const remove=(e)=>{
    let path=parseInt(e.target.getAttribute('data'))
      let copy=[...object]
      copy[path].inventory=object[path].inventory+object[path].count
      copy[path].count=0
     ObjectAppender(copy)
} 
const theSum=()=>{
  userCost=0
  appendCost(userCost)
  let copy=[...object]
  let elems=document.querySelectorAll('.item')
  copy.forEach(obj => {
    obj.totalCost=obj.count*obj.cost
  });
  for(let n=0;n<copy.length; n++){
   userCost += copy[n].totalCost
   if(copy[n].count===0){
    elems[n].style.display='none'
   }else{
    elems[n].style.display='block'
   }
  }
  let checker=[]
  for(let k=0;k<elems.length;k++){
    if(elems[k].style.display ==='none'){
      checker[k]=true
    }else{
      checker[k]=false
    }
    
  }
  let checked = arr => arr.every(v => v === true);
  console.log(checked(checker))
  if(checked(checker)===true){
document.querySelector('.empty').style.display='flex'
  }else{
    document.querySelector('.empty').style.display='none'
  }
  appendCost(userCost)
  ObjectAppender(copy)
  document.querySelector('.storeCont').style.display='none'
  document.querySelector('.theFinal').style.display='flex'
  checker=[]
}
const leave=()=>{
  document.querySelector('.theFinal').style.display='none'
  document.querySelector('.storeCont').style.display='grid'
 }
 const buy=()=>{
  if(userCost===0){
    alert('BAKA!!! You bought nothing')
  }else{
    alert('Thanks For Shopping at Arthurs your final cost is '+ userCost)
  }
 }
    return (
      <div className="storeContain">
        <div className="space"></div>
        <div className='combiner'>
        <div className="storeCont">
          <div className='storeItem'>
            <img src={bannana} alt=''/>
            <p>Banana Cost: 3$</p> <p className='inv'>Inventory: {object[0].inventory}</p>
            <p className='inv'>Cart: {object[0].count}</p>
            <input type='number' className='submitter' placeholder='Press Enter For Cart' data='0' onKeyDown={enterNum} /><input type='button' className='remover' value='Remove From Cart' data='0' onClick={remove} />
        
          </div>
        
        <div className='storeItem'>
            <img src={lime} className='goDown' alt=''/>
            <p >Lime Cost: 3$</p> <p className='inv'>Inventory:  {object[1].inventory}</p>
    <p className='inv'>Cart: {object[1].count}</p>        <input type='number' className='submitter' placeholder='Press Enter For Cart' data='1' onKeyDown={enterNum}/>
<input type='button' className='remover' value='Remove From Cart' data='1' onClick={remove} />          </div>
          <div className='storeItem'>
            <img src={cabbage} alt=''/>
            <p>Cabbage Cost: 2$</p> <p className='inv'>Inventory:  {object[2].inventory}</p>
 <p className='inv'>Cart: {object[2].count}</p>           <input type='number'className='submitter' placeholder='Press Enter For Cart' data='2' onKeyDown={enterNum}/>
 <input type='button' className='remover' value='Remove From Cart' data='2' onClick={remove} />         </div>
          <div className='storeItem'>
            <img src={tomato} alt=''/>
            <p>Tomato Cost: 1$</p> <p className='inv'>Inventory:  {object[3].inventory}</p>
  <p className='inv'>Cart: {object[3].count}</p>          <input type='number'  className='submitter' placeholder='Press Enter For Cart' data='3' onKeyDown={enterNum}/>
  <input type='button' className='remover' value='Remove From Cart' data='3' onClick={remove} />
          </div>
          <div className='storeItem'>
            <img src={corn} alt=''/>
            <p>Corn Cost: 2$</p> <p className='inv'>Inventory:  {object[4].inventory}</p>
    <p className='inv'>Cart: {object[4].count}</p>        <input type='number'  className='submitter' placeholder='Press Enter For Cart' data='4' onKeyDown={enterNum}/>
    <input type='button' className='remover' value='Remove From Cart' data='4' onClick={remove} />
          </div>
          <div className='storeItem'>
            <img src={avacado} alt=''/>
            <p>Avacado Cost: 5$</p> <p className='inv'>Inventory:  {object[5].inventory}</p>
 <p className='inv'>Cart: {object[5].count}</p>           <input type='number'  className='submitter' placeholder='Press Enter For Cart' data='5' onKeyDown={enterNum}/>
 <input type='button' className='remover' value='Remove From Cart' data='5' onClick={remove} />
          </div>
          <div></div>
          <button className='bruh' onClick={theSum}>Submit To Cart</button>
          </div>
          
          <div className='theFinal'>
            <p className='item' id='0'>Banana Cost: {object[0].totalCost}$</p>
            <p className='item' id='1'>Lime Cost: {object[1].totalCost}$</p>
            <p className='item' id='2'>Cabbage Cost: {object[2].totalCost}$</p>
            <p className='item' id='3'>Tomato Cost: {object[3].totalCost}$</p>
            <p className='item' id='4'>Corn Cost: {object[4].totalCost}$</p>
            <p className='item' id='5'>Avacado: {object[5].totalCost}$</p>
            <p className='empty'>Cart Is Empty</p>
            <p className='finalCost'>Total Cost: {userCost}$</p>
            <div className='buttHold'><button className='remover' id='exit' onClick={leave}>Exit Out</button> <button className='remover' onClick={buy}>Confirm Purchase</button></div>
          </div>
          </div>

        <div className="space2"></div>
      </div>
    );
  };
  
  export default Store;
  