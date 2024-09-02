import React, { useContext, useState } from 'react'
import { context } from '../App'

const Table = () => {
    const main=useContext(context)
    console.log(main,"data-----")
    const [one,setone]=useState(["sai","jam","pravee","syam"])
  return (
    <div>
        {one.map((e)=>{
            return(
                <div>
                    <h4>{e}</h4>
                </div>
            )
        })}
        <button onClick={()=>{
            one[3]="syamsundarsai"
            setone([...one])
        }}>change</button>
    </div>
  )
}

export default Table