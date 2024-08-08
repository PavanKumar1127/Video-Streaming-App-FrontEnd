import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import VideoUpload from './components/VideoUpload';

function App() {
  const [videoId, setVideoId] = useState('84ab60b4-4ed3-40d0-a1a1-f2bd8f60bed8');

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-black'>
      <h1 className='text-2xl font-extrabold text-gray-100 mb-6'>
        Welcome to video streaming application
      </h1>
      {/* Flex container for video player and upload form */}
      <div className='flex justify-around w-full max-w-7xl'>
        <div className='flex-1'>
          <h1 className='text-white mb-4'>Video Player</h1>
          <video
            src={`http://localhost:8080/api/v1/videos/stream/${videoId}`}
            controls
            className='w-full max-w-2xl'
          ></video>
        </div>
        <div className='flex-1 flex justify-end'>
          <VideoUpload />
        </div>
      </div>
    </div>
  );
}

export default App;
