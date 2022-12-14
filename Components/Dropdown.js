import React, { useEffect, useRef } from "react";
import { Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Dropdown = (props) => {

  const { show,setshow, children, icon, color = '#aaa', showBgcolor = '#fff', style, iconFalse, top, onPress } = props

const ref = useRef()

  useEffect(() => {
    ref?.current && ref.current.setNativeProps({ style: { transform: [{ scale: 0 }] } })
  }, [show])


  return (
    <Pressable >
      <Pressable
      onPressIn={()=>{setshow(setshow(!show)); setTimeout(() => { setshow(setshow(!show)) }, 10)}}
        onPress={() => {
          ()=>{setshow(setshow(!show)); setTimeout(() => { setshow(setshow(!show)) }, 10)};

          ref?.current && ref.current.setNativeProps({ style: { transform: [{ scale: 1 }] } })
        }}

        style={[{ flexDirection: 'row', padding: 2, }, style]} >
        {!iconFalse && <Icon color={color} name={top?'caret-up':'caret-down'} style={[{ top: 3,position:'relative', right:1 }, { fontSize: 22.5 }]}></Icon>}
        <Icon color={color} name={icon ? icon : 'trash'} style={[{ fontSize: 22.5 }]}></Icon>
      </Pressable>

      <Pressable
        ref={ref}
        style={[{
          alignSelf: 'center', borderWidth: .5, borderRadius: 3, padding: 3, zIndex: 10, top: top ? -60 : 30, position: 'absolute',
          transform: [{ scale: 0 }], backgroundColor: showBgcolor, minWidth: 100
        }]}>
        {children}
      </Pressable>
    </Pressable>
  );
}

export default Dropdown


