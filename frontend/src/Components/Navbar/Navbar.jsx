import "./navbar.css";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(true);
  return (
    <div className="navbar-wrapper h-16">
      {/* <div> */}
      <div>Logo</div>
      {/* </div> */}
      <div className="navbar-options">
        {showSearch && (
          <input
            class="shadow appearance-none border rounded py-4 h-7 px-2 mb-2 text-gray-700 focus:outline-none focus:shadow-outline"
            id="search-jobs"
            type="text"
            placeholder="Search"
          />
        )}
        <div>
          <AiOutlineSearch onClick={() => setShowSearch((prev) => !prev)} />
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
