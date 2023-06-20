import "./navbar.css";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredJobs } from "../../redux/features/jobSlice";


const Navbar = () => {
  const [showSearch, setShowSearch] = useState(true);
  const [searchBox, setSearchBox] = useState();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchBox(e.target.value);
  };
  const handleSearch = () => {
    dispatch({type: 'SEARCH_FILTER', payload: searchBox});
    // setShowSearch((prev) => !prev)
    console.log(filteredJobs);
  };

  return (
    <div className="navbar-wrapper h-16">
      {/* <div> */}
      <img src="/Assets/website-logo.jpg" alt="logo" className="w-12 h-12" />
      {/* </div> */}
      <div className="navbar-options">
        {showSearch && (
          <input
            className="shadow appearance-none border rounded py-4 h-7 px-2 mb-2 text-gray-700 focus:outline-none focus:shadow-outline"
            id="search-jobs"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        )}
        <div>
          <AiOutlineSearch onClick={handleSearch} />
        </div>
        <div>
          <AiOutlineBell />
        </div>
        <div>
          <CgProfile />
        </div>
      </div>
    </div>
  );
};
export { Navbar };
