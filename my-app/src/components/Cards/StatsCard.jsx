import React from 'react'

function StatsCard({myPet,myBody}) {
  return (
    <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            flexWrap:'wrap',
            flexDirection:'column'
          }}
        >
          <div className={`power ${myPet?.power ?"" :"hidden"}`}>
          <h1>{`Power  ${myPet && myPet.power? ":"+myPet.power :""}`}</h1>
          </div>
          <div className={`stats ${myBody?.length<6 && "hidden"}`}>
            {
              myBody?.length>=6 && myBody.map((part,id)=> <div>
                  <p>{`${part.name}`}</p>
                  <strong>{`${part.stat}`}</strong>
              </div>)
            }
          </div>
          <div className={`power ${myPet?.elemonInfo?.class?"" : "hidden"}`}>
          <div>
                  
                  <strong>{`${!myPet ?"": myPet?.elclass === myPet?.elemonInfo?.class[0] ? "Pure" : "Hybrid"}`}</strong>
              </div>
          </div>
       
        </div>
  )
}

export default StatsCard