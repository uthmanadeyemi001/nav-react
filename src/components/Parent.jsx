import React from 'react'
import Child from './child'

const Parent = ({currentmovie}) => {
  return (
    <div>
      <Child currentMovie={currentmovie}/>
    </div>
  )
}

export default Parent
