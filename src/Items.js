import React from 'react'

const Items = ({ itemArray, test, func, test2, itemPicsGrey, itemPicsFull }) => {
  return (
    <div className='item'> 
      {itemArray.map((items, index) => (
        <input 
        className='button'
        type='image'
        key={index}
        src={
          (!itemArray[index])
        ? itemPicsGrey[index] 
        : items > 1
        ? test2[index+items]
        : itemPicsFull[index]} alt=''
        onClick={() => {
          func(index, items)
        }}
        /* style={{backgroundColor:itemArray[index] ?'green':''}} */>

          {/* {items > 1 ? test2[index+items] : test[index]} */}
        </input>
      )
      )}
    </div>
  )
}

export default Items

/* if(!itemArray[index]){
  grey pic
  }
  else if( items > 1){
    test2[index+items]
  }
  else{
    full pic
  }
} */