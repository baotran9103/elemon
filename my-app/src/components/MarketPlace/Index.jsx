import React from 'react'
import Table from './Table'
import TableHeader from './TableHeader'
import MarketContextProvider from './MyContext'
function Index() {
  return (
    <div style={{margin:'5rem 0'}}>
   
        <MarketContextProvider>
          <TableHeader/>

        <Table />
        </MarketContextProvider>

    </div>
  )
}

export default Index