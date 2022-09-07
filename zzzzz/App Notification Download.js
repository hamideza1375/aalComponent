// import React from 'react';
// import { Text, Pressable } from 'react-native';
// import { download } from './Components/Download'
// function App() {
//   return (
//     <Pressable
//      onPress={() => download('https://s32.namasha.com/videos/dl/7374690107-144p/تحلیل-تکنیکال-سولانا-آپدیت-9-شهریور-1401-144p.mp4', 'aa.mp4')} >
//       <Text style={{fontSize:16, alignSelf:'center',marginTop:22}} >hhh</Text>
//     </Pressable>
//   )
// }
// export default App;








import React from 'react';
import { Text, Pressable } from 'react-native';
import Notification from './Components/notification';

function App() {
  const { create, close } = Notification();

  return (
    <>
      <Pressable
        onPress={() => { create('dddd', 'ddddererr') }} >
        <Text style={{ fontSize: 16, alignSelf: 'center', marginTop: 22 }} >create</Text>
      </Pressable>

      <Pressable
        onPress={() => { close('del') }} >
        <Text style={{ fontSize: 16, alignSelf: 'center', marginTop: 22 }} >close</Text>
      </Pressable>
    </>
  )
}
export default App;