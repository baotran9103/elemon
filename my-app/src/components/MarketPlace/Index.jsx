import React from 'react'
import Table from './Table'
import TableHeader from './TableHeader'
import MarketContextProvider from './MyContext'
function Index() {
  return (
    <div>
   
        <MarketContextProvider>
          <TableHeader/>

        <Table />
        </MarketContextProvider>

    </div>
  )
}

export default Index