import React from 'react'
import { Link } from 'react-router-dom'

const RecruiterAccess = () => {
  return (
    <div className="border-2 border-solid border-neutral-200 rounded-md px-6 py-6 mb-20">
        <div>
            <h1 className="font-extrabold text-4xl my-8">Next, let's verify you work at AppliedVR</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, accusamus labore eaque voluptatibus architecto maiores, consequuntur accusantium possimus unde esse eveniet et culpa nobis, qui alias! Aspernatur placeat commodi assumenda asperiores odit ipsa facilis, repellat rerum incidunt nulla corrupti officiis, nisi maxime qui numquam officia laudantium ut id nemo atque culpa a recusandae porro provident! Illo </p>
        </div>
        <div className="my-8">
            <input type="email" name="" id="" className="py-2 px-3 mr-8 w-96 border-2 border-red-700 rounded-xl" />
            <button className="py-2 px-3 bg-[#ededed] rounded-xl hover:bg-slate-400 hover:text-black">Send verification code</button>
            <p className="my-2 text-red-700">Please use email associated with your company's domain</p>
        </div>

        <div className="flex gap-10">
            <div className="flex gap-1 items-center border border-solid w-fit rounded-md px-3 py-1.5 tracking-tighter bg-[#ededed] justify-between hover:bg-slate-400 hover:text-black">
                <Link to="">Authenticate with Gmail</Link>
            </div>
            <div className="flex gap-1 items-center border border-solid w-fit rounded-md px-3 py-1.5 tracking-tighter bg-[#ededed] justify-between hover:bg-slate-400 hover:text-black">
                <Link to="">Request permissions from admin</Link>
            </div>
        </div>

        
    </div>
  )
}

export { RecruiterAccess }