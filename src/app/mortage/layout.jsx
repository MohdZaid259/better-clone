import MortageData from '@/components/MortageData'
import React from 'react'

function layout({ children }) {
  return (
    <>
    {children}
    <MortageData/>
    </>
  )
}

export default layout