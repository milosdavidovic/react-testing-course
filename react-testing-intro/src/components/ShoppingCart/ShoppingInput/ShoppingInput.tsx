import React, { useRef } from 'react'

interface Props {
  onClick: (newItem: string)=>void;
}

export const ShoppingInput : React.FC<Props> = ({onClick}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleOnClick = () => {
    if(inputRef.current?.value) onClick(inputRef.current.value)
  }

  return (
    <div style={{display: "flex"}}>
      <input ref={inputRef} type="text" placeholder="Write description here..." />
      <button type="button" onClick={handleOnClick}>Add</button>
    </div>
  )
}
