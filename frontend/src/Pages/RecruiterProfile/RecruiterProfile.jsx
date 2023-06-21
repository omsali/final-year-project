import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { RecruiterSidebar } from '../../Components/Sidebar/RecruiterSidebar'
import { RecruiterContainer } from '../../Components/RecruiterContainer/RecruiterContainer'

const RecruiterProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <RecruiterSidebar />
        <div className="w-full flex mr-32 ml-36 flex-col">
          <RecruiterContainer />
        </div>
      </div>
    </div>
  )
}

export { RecruiterProfile }