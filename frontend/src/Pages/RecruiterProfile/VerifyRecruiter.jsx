import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { RecruiterAccessContainer } from '../../Components/RecruiterContainer/RecruiterAccessContainer'
import { RecruiterSidebar } from '../../Components/Sidebar/RecruiterSidebar'

const VerifyRecruiter = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <RecruiterSidebar />
        <div className="w-full flex mr-32 ml-36 flex-col">
          <RecruiterAccessContainer />
        </div>
      </div>
    </div>
  )
}

export { VerifyRecruiter }