function AddEducation({ educationDialog }) {
  return (
    <div className="border border-solid bg-[#F5F5F5] rounded-md px-4 py-4 flex gap-2 flex-col ">
      <div className="flex flex-col">
        <label class="block text-lg font-bold mb-0.5" for="user_education">
          Education :
        </label>
        <input
          class="w-full appearance-none border border-neutral-300 rounded py-3 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="user_education"
          type="text"
          placeholder="College/University"
        />
      </div>
      <div className="flex flex-col">
        <label
          class="block text-lg font-bold mb-0.5"
          for="user_graduation_year"
        >
          Graduation :
        </label>
        <input
          class="w-full appearance-none border border-neutral-300 rounded py-3 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="user_graduation_year"
          type="text"
          placeholder="e.g. 2023"
        />
      </div>
      <div className="flex flex-col">
        <label class="block text-lg font-bold mb-0.5" for="user_degree">
          Degree :
        </label>
        <input
          class="w-full appearance-none border border-neutral-300 rounded py-3 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="user_degree"
          type="text"
          placeholder="e.g. Computer Science"
        />
      </div>
      <div className="flex flex-col">
        <label class="block text-lg font-bold mb-0.5" for="">
          GPA :
        </label>
        <div className="flex gap-4 mb-4">
          <input
            class="w-1/2 appearance-none border border-neutral-300 rounded py-3 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id=""
            type="text"
            placeholder="GPA"
          />
          <input
            class="w-1/2 appearance-none border border-neutral-300 rounded py-3 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="user_degree"
            type="text"
            placeholder="Max"
          />
        </div>
        <div className="flex gap-4">
          <button className="w-fit cursor-pointer border border-solid bg-black border-black text-white tracking-tighter px-3 py-1 rounded-md transition-all delay-170">
            Save
          </button>
          <button
            className="w-fit cursor-pointer text-black font-bold tracking-tighter px-2 py-0.5 rounded-md transition-all delay-170"
            onClick={() => educationDialog(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export { AddEducation };
