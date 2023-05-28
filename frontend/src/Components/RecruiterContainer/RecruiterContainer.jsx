import React, { useState } from 'react'
import { RecruiterAboutHeader } from '../About/RecruiterAboutHeader'
import { RecruiterAccess } from '../RecruiterProfile/RecruiterAccess'
import { RecruiterCompany } from '../RecruiterProfile/RecuiterCompany';

const RecruiterContainer = () => {

    const [currentTab, setCurrentTab] = useState("company");
    const handleTab = () => {
        currentTab === "company" ? setCurrentTab("access") : setCurrentTab("company");
      }

  return (
    <div className="">
      <RecruiterAboutHeader currentTab={currentTab} handleTab={handleTab} />
      {currentTab === "company" 
      ? <RecruiterAccess />
      : <RecruiterCompany />
    }
    </div>
  )
}

export { RecruiterContainer }