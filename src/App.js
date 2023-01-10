import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Homepage } from './pages/homepage/Homepage';
import { Posts } from './pages/posts/Posts';
import { PostsTitle } from './pages/posts/PostsTitle';
import { Video } from './pages/video/Video';
import { Photos } from './pages/photos/Photos';
import { About } from './pages/about/About';
import { Notfound } from './pages/notfound/Notfound';
import { Loginpage } from './auth/Loginpage';

import { Breadbord } from './сomponents/breadbord/Breadbord';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Routes> 
      <Route path="/" element={<Breadbord setIsLogin={setIsLogin} isLogin={isLogin} />} >
        <Route index element={<Homepage />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:title" element={<PostsTitle />} />
        <Route path="video" element={<Video />} />
        <Route path="photos" element={<Photos />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Loginpage setIsLogin={setIsLogin} />} />
      
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  )
}

export default App;
