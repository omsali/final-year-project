import "./FilterSection.css";

const FilterSection = ({ onClose }) => {

    const types = ["FullTime", "Internship", "Contract"]
    const skills = ["JavaScript", "ReactJs", "NextJs"]

    const handleClose = (e) => {
        // e.preventDefault();
        onClose();
    };

    return (
        <div className='overlay w-full h-screen '>
            <div className='modal border border-blue-200 rounded-2xl p-5 bg-white'>
                <div className='flex justify-center'>
                    <p onClick={handleClose} className='bg-blue-50 text-black border border-blue-200 py-2 px-8 mb-4 rounded-lg'>
                        <button>Close</button>
                    </p>
                </div>
                <div className=' flex flex-col text-black gap-3 my-4'>
                    <h2>Skills</h2>
                    <div className="border border-blue-200 rounded-2xl p-5 bg-blue-50 w-1/2">
                        <h3 className="px-5 font-bold">Skills</h3>
                        <div>
                            {skills.map((item) => (
                                <div className="flex gap-3">
                                    <input type="radio" name="types" id={item} />
                                    <label htmlFor={item}>{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col text-black gap-3 my-4'>
                    <h2>Job Details</h2>
                    <div className="flex gap-3">
                        <div className="border border-blue-200 rounded-2xl p-5 bg-blue-50 w-1/2">
                            <h3 className="px-5 font-bold">Job Type</h3>
                            <div>
                                {types.map((item) => (
                                    <div className="flex gap-3">
                                        <input type="radio" name="types" id={item} />
                                        <label htmlFor={item}>{item}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className=" justify-center border border-blue-200 rounded-2xl p-5 bg-blue-50 w-1/2">
                            <h3 className="px-5 font-bold">Required Exprience</h3>
                            <div className="flex flex-col justify-center">
                                <p className="font-light text-sm p-2">Filter jobs by minimum years of experience</p>
                                <input type="range" name="yoe" id="yoe" className="w-5/6"/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' flex text-black gap-3 my-4'>
                    <div className="border border-blue-200 rounded-2xl p-5 bg-blue-50 w-1/2">
                        <h3 className="px-5 font-bold pb-2">Remote Culture</h3>
                        <div className="flex gap-3">
                            <input type="checkbox" name="remote" id="" />
                            <p>Only show jobs at companies that are mostly or fully remote</p>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FilterSection