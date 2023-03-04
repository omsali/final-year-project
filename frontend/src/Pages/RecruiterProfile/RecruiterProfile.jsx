import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { RecruiterCompanyContainer } from '../../Components/RecruiterContainer/RecruiterComapnyContainer'
import { RecruiterSidebar } from '../../Components/Sidebar/RecruiterSidebar'

const RecruiterProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <RecruiterSidebar />
        <div className="w-full flex mr-32 ml-36 flex-col">
          <RecruiterCompanyContainer />
        </div>
      </div>
    </div>
  )
}

export { RecruiterProfile }