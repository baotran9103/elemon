import React from 'react'
import Table from './Table'
import MarketContextProvider from './MyContext'
function Index() {
  return (
    <div>
   
        <MarketContextProvider>

        <Table />
        </MarketContextProvider>

    </div>
  )
}

export default Index