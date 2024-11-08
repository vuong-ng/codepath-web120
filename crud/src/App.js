import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'


const App = () => {
  const posts = [
    {
      id:"4",
      name: "vuong",
      skills: "sleeping",
      personality:"fun"
    }
  ]
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>Welcome to your crew! </h1>
        <Link to="/"><button className="headerBtn"> View Crewmate </button></Link>
          <Link to="/new"><button className="headerBtn"> Create new Crewmate </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
