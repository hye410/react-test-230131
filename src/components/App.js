import { useCallback, useEffect, useState } from "react";
import AddInquiry from "./AddInquiry";
import Inquiry from "./Inquiry";
import Search from "./Search";
import './App.css';
import { BiArchive } from "react-icons/bi";

function App() {
  const [mylist,setMylist] = useState([]);
  const [order,setOrder] = useState('people');
  const [text,setText] = useState('');

  const fetchData =
    useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(result => setMylist(result))
  },[]);

  useEffect(fetchData,[fetchData]);

  const DeleteList = (btnId) => setMylist(mylist.filter((item) => item.id !== btnId))

  const Findout =    
      mylist.filter((item) => {
        return(
          item.people.toLowerCase().includes(text.toLowerCase()) ||
          item.date.includes(text)
        )
      })      
    
  


  return (
    <div id="wrap">
      <h1><BiArchive />문의내역</h1>
      <Search
      text={text}
      onTextChange = {(value) => setText(value)}
       />
      <div id="content">
        <AddInquiry />
        <Inquiry
        mylist = {mylist}
        DeleteList = {DeleteList}
         />           

      </div>
    </div>
  );
}

export default App;
