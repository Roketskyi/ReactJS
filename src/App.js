import { Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/homepage/Homepage';
import { Posts } from './pages/posts/Posts';
import { PostsTitle } from './pages/posts/PostsTitle';
import { Video } from './pages/video/Video';
import { Photos } from './pages/photos/Photos';
import { About } from './pages/about/About';
import { Notfound } from './pages/notfound/Notfound';

import { Breadbord } from './сomponents/Breadbord/Breadbord';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Breadbord />}>
        <Route index element={<Homepage />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:title" element={<PostsTitle />} />
        <Route path="video" element={<Video />} />
        <Route path="photos" element={<Photos />} />
        <Route path="about" element={<About />} />
      
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  )
}

export default App;
