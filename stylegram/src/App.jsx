import { useState, useEffect } from 'react'
import {  Routes, Route, useRoutes} from 'react-router-dom';

import CreatePost from './pages/CreatePost';
import DetailsPost from './pages/DetailsPost';
import EditPost from './pages/EditPost';
import HomeFeed from './pages/HomeFeed';
import Header from './pages/Header'
import MenuBar from './components/MenuBar';

import './App.css'

// const AppLayout = () => {
//   <>
//     <MenuBar />
//     <Outlet/>
//   </>
// }

function App() {
  const posts = [
    {
      id:"4",
      author: "vuong",
      caption: "xinh dep",
      likes: 4,
      comments:[],
    },
  ]
  let element = useRoutes([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <HomeFeed data={posts}/>,
          index:true,
        },
        {
          path: "/new",
          element:<CreatePost />
        }
      ]
    },
    {
      path: "/edit/:id",
      element:<EditPost data={posts}/>,
    },
    {
      path: "/:id",
      element:<DetailsPost data={posts}/>
    }
  ])

  return (
    <div className="App">
      <Routes>
        <Route index={true} element={<HomeFeed data={posts}/>} />
          <Route path="/edit/:id" index={false} element={<EditPost data={posts} />} />
          <Route path="/:id" index={false} element={<DetailsPost data={posts} />} />
          <Route path="/new" index={false} element={<CreatePost />} />
        </Routes>
    </div>
  )
}

export default App;
