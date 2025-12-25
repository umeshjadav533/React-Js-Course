import React, { lazy, Suspense, useState } from 'react'
// import Post from './Post';
const Post = lazy(() => import('./Post'));

const App_Old = () => {
  const [showPost, setShowPost] = useState(false);
  return (
    <div>
      <button onClick={()=>setShowPost(true)}>Show Post</button>
      {showPost && 
        <Suspense fallback={<p>Loading Post...</p>}>
          <Post />
        </Suspense>
      }
    </div>
  )
}

export default App_Old
