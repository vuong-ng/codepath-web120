import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';

import CreatePost from './pages/CreatePost';
import DetailsPost from './pages/DetailsPost';
import EditPost from './pages/EditPost';
import HomeFeed from './pages/HomeFeed';
import Header from './pages/Header'

import './App.css'

function App() {
  const posts = [
    {
      id:"4",
      author: "vuong",
      caption: "xinh dep",
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
      path: "/:id",
      element:<EditPost data={posts}/>,
    },
    {
      path: "/:id",
      element:<DetailsPost data={posts}/>
    }
  ])

  return (
    <div className="App">
      {element}
    </div>
  )
}

export default App;
