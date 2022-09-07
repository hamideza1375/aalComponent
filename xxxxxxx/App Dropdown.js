import React, { useState } from 'react';
import { Div } from './Components/Html'
import Dropdown from './Components/Dropdown';
import Icon from '@expo/vector-icons/FontAwesome';

function App() {

  const [show, setshow] = useState(true)

  return (
    <Div style={{ width: 500, height: 500, alignSelf:'center', alignItems:'center',justifyContent:'center', borderWidth:1 }}
      onClick={() => setshow(setshow(!show))}
    >
      <Dropdown
        // iconFalse
        top
        icon='paperclip'
        showBgcolor="#888"
        show={show}
        setshow={setshow}
      >
        <Div style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
          <Icon name={'image'} color="#ddd" size={25} style={{ padding: 7 }} />
          <Icon name={'video'} color="#ddd" size={25} style={{ padding: 7 }} />
        </Div>
      </Dropdown>
    </Div>
  )
}



export default App;