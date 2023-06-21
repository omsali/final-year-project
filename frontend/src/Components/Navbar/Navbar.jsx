import "./navbar.css";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filteredJobs, searchJob } from "../../redux/features/jobSlice";

const Navbar = () => {
  // const [showSearch, setShowSearch] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearhJobs = (e) => {
    setSearchInput(e.target.value);
  };

  const getSearchResults = () => {
    dispatch(searchJob(searchInput));
  };
  return (
    <div className="navbar-wrapper h-16">
      {/* <div> */}
      <img src="/Assets/website-logo.jpg" alt="logo" className="w-12 h-12" />
      {/* </div> */}
      <div className="navbar-options">
        <input
          className="shadow appearance-none border rounded py-4 h-7 px-2 mb-2 text-gray-700 focus:outline-none focus:shadow-outline"
          id="search-jobs"
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => handleSearhJobs(e)}
        />

        <div>
          <AiOutlineSearch onClick={() => getSearchResults()} />
        </div>
        <div>
          <AiOutlineBell />
        </div>
        <div>
          <CgProfile onClick={() => navigate("/profile")} />
        </div>
      </div>
    </div>
  );
};
export { Navbar };
