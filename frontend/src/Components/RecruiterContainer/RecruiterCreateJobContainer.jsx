import React from 'react'

const RecruiterCreateJobContainer = () => {
  return (
    <div className="border-2 border-solid border-neutral-300 rounded-md px-6 py-6 mb-20 my-10">

      <div>
        <div className="font-extrabold text-3xl my-8">
          Posting a job is fast and free
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui
          perspiciatis facilis? Illo adipisci dolorum explicabo nesciunt
          voluptatum ratione consequatur tempora, cupiditate natus voluptate
          corrupti facilis ad pariatur incidunt obcaecati.
        </p>
      </div>
      <div className="my-8 flex flex-col">
        <label for="title">Title*</label>
        <input
          type="text"
          name=""
          id="title"
          className="py-2 px-3 mr-8 w-full border-2 border-solid border-neutral-300 rounded-md"
        />
      </div>
      <div className="my-8 flex flex-col">
        <label for="desc">Description*</label>
        <textarea
          className="border-2 border-solid border-neutral-300 rounded-md w-full"
          name=""
          id="desc"
          cols="15"
          rows="5"
        ></textarea>
      </div>
      <div className="my-8 flex flex-col">
        <label for="top">Type of position*</label>
        <select
          name="top"
          id="top"
          className="border-2 border-solid border-neutral-300 rounded-md py-2 px-3"
        >
          <option value="">--Select--</option>
          <option value="">Full time</option>
          <option value="">Part time</option>
          <option value="">Internship</option>
          <option value="">Contract</option>
        </select>
      </div>
      <div className="my-8 flex flex-col">
        <label for="Prirole">Primary role*</label>
        <select
          name="Prirole"
          id="Prirole"
          className="border-2 border-solid border-neutral-300 rounded-md py-2 px-3"
        >
          <option value="">--Select--</option>
          <option value="">Software Engineer</option>
          <option value="">Software Developer</option>
          <option value="">Front end Developer</option>
          <option value="">Full Stack developer</option>
        </select>
      </div>
      <div className="my-8 flex flex-col">
        <label for="workexp">Work Experience</label>
        <select
          name="workexp"
          id="workexp"
          className="border-2 border-solid border-neutral-300 rounded-md py-2 px-3"
        >
          <option value="">--Select--</option>
          <option value="">0-2</option>
          <option value="">3-5</option>
          <option value="">6-10</option>
          <option value="">10 and above</option>
        </select>
      </div>

      <div className="my-8 flex flex-col">
        <label for="skills">Skills*</label>
        <textarea
          className="border-2 border-solid border-neutral-300 rounded-md w-full"
          name="skills"
          id="skills"
          cols="15"
          rows="5"
        ></textarea>
      </div>
      <div className="my-8 flex flex-col">
        <div className="font-bold text-lg">Location</div>

        <div>
          <div className="mb-2">Visa Sponsorship(US only)</div>
          <input type="radio" name="1" id="yes" />
          <label for="yes" className="pr-5">Yes</label>
          <input type="radio" name="1" id="no" />
          <label for="no" className="pr-5">No</label>
        </div>
        <div className="my-5">
          <label for="loc">Location*</label>
          <div className="border-2 border-solid border-neutral-300 rounded-md flex">
            <div className="fa fa-search p-2 px-4 bg-slate-300"></div>
            <input
              className="px-3 mr-8 w-full"
              type="text"
              name="loc"
              id="loc"
              placeholder="e.g San Fransisco"
            />
          </div>
        </div>
      </div>
        <hr className="h-px my-8 bg-gray-300 border-0 w-11/12 mx-auto" />
      <div className="my-8">
        <div className="font-bold text-lg">Remote Work Details</div>
      </div>
    </div>
  )
}

export { RecruiterCreateJobContainer }