import { useState } from "react";
import { BiCaretDown,BiSearch } from "react-icons/bi";
function Toggle({dropDown}){
  if(dropDown){
    return null
  }
  return(
    <ul>
      <li>고객명</li>
      <li>등록일</li>
    </ul>
  )
}

function Search({onTextChange,text}){
  const[dropDown,setDropDown] = useState('true');

return(
  <div id="search">
    <BiSearch />
    <input 
    type="text"
    onChange={(event) => {onTextChange(event.target.value)}}
    />
      <button 
      type="button"
      onClick={()=>setDropDown(!dropDown)}>
       <BiCaretDown />
      </button>
      <Toggle
      dropDown = {dropDown} />
  </div>
)
}

export default Search;