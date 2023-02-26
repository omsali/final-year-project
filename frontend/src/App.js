import "./App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import { Jobs } from "./Pages/Jobs/Jobs";
import { UserProfile } from "./Pages/UserProfile/UserProfile";
import { AppliedApplications } from "./Pages/Applied Jobs/AppliedApplications";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route
          path="/createprofile"
          element={
            <div className="flex items-center justify-center bg-neutral-200">
              <Profile />
            </div>
          }
        />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/applied" element={<AppliedApplications />} />
      </Routes>
    </div>
  );
}

export default App;
