import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header'

function App() {
  

  return (
    <>
      <Header></Header>
      <div className='md:flex w-10/12 mx-auto gap-5'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App
