  import { useState } from "react"

  function Light(){
   const [color,setcolor]= useState("")
   // functin on button
   const handleon=() =>{
    setcolor("yellow")
   }
   // function off button
   const handeloff=() =>{
    setcolor("white")
   }


    return <div className="flex justify-center">
        <div>
            <div style={{backgroundColor:color}} className="w-[300px] h-[300px] border-2 rounded-full mt-10"> </div>
            <button onClick={handleon} className="bg-blue-500 px-10 py-2 text-3xl m-5 text-white rounded-full">On</button>
            <button onClick={handeloff}  className="bg-blue-500 px-10 py-2 text-3xl m-5 text-white rounded-full">Off</button>
        </div>
      

    </div>
}
export default Light