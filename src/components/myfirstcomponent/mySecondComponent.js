import React from 'react'
import './mySecondComponent.css'

export const MySecondComponent = (props) => {

return(

<>
<h2 className="title">{props.name}
{props.age}
</h2>

</>

)


}