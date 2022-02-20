import React from 'react'
import Pets from './Pets'
import PetsContextProvider from './PetsContext'
function Index() {
  return (
    <div>
        <PetsContextProvider>

        <Pets/>
        </PetsContextProvider>

    </div>
  )
}

export default Index