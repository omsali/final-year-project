import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import Profile from "./Pages/Profile/Profile";
import { Jobs } from "./Pages/Jobs/Jobs";
import { UserProfile } from "./Pages/UserProfile/UserProfile";
import { AppliedApplications } from "./Pages/Applied Jobs/AppliedApplications";
function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <div className="flex items-center justify-center bg-neutral-200">
        <Profile />
      </div> */}
      {/* <Jobs/> */}
      {/* <Routes>
        <Route/>
      </Routes> */}
      {/* <UserProfile /> */}
      <AppliedApplications />
    </div>
  );
}

export default App;
