import React from 'react'
import { RecruiterAboutHeader } from '../About/RecruiterAboutHeader'
import { RecruiterCompany } from '../RecruiterProfile/RecuiterCompany'

const RecruiterCompanyContainer = () => {
  return (
    <div className="">
      <RecruiterAboutHeader />
      <RecruiterCompany />
    </div>
  )
}

export { RecruiterCompanyContainer }