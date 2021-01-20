import React from 'react'
import { Routing } from './routes/Routing'
import { DesktopNavigation } from './components/navigation/DesktopNavigation/DesktopNavigation'
import "./shared/global/Global.css"

function App() {
  return (

    <Routing>  

     <DesktopNavigation />

    </Routing>

  );
}

export default App;