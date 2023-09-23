import { useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header'

function App() {
  const [bookmarks , setBookmark] = useState([]);

  const handleClickTwo = blog =>{
    const newBookMark = [...bookmarks,blog]
    setBookmark(newBookMark)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex w-10/12 mx-auto gap-5 mt-5'>
        <Blogs handleClickTwo={handleClickTwo}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App
