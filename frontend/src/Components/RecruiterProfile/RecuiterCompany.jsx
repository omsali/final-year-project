import React from 'react'
import { Link } from 'react-router-dom'

const RecruiterCompany = () => {
  return (
    <div className="border-2 border-solid border-neutral-200 rounded-md px-6 py-6 mb-20">
        <div>
            <h1 className="font-extrabold text-4xl my-8">Let's find your company</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, accusamus labore eaque voluptatibus architecto maiores, consequuntur accusantium possimus unde esse eveniet et culpa nobis, qui alias! Aspernatur placeat commodi assumenda asperiores odit ipsa facilis, repellat rerum incidunt nulla corrupti officiis, nisi maxime qui numquam officia laudantium ut id nemo atque culpa a recusandae porro provident! Illo </p>
        </div>

        <div className="my-8">
            <div className="border-2 border-slate-300 rounded-md flex w-1/2">
                <div className="fa fa-search py-3 px-4 bg-slate-300 " ></div>
                <input className=" px-3 mr-8 w-full " type="text" name="loc" id="loc" placeholder="e.g Google" />
            </div>
        </div>

        <div className="flex gap-1 items-center border border-solid w-fit rounded-md px-3 py-1.5 tracking-tighter bg-[#ededed]">
            <Link to="">Create Company</Link>
        </div>
    </div>
  )
}

export { RecruiterCompany }