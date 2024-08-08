import React, { useState, useRef } from 'react';
import { Button } from 'flowbite-react';
import videoLogo from "../assets/cloud.png";

function VideoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState(""); // Added type state for message color
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fileInputRef = useRef(null); // Ref to access the file input

  function handleFileChange(event){
    setSelectedFile(event.target.files[0]);
  }

  function handleTitleChange(event){
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event){
    setDescription(event.target.value);
  }

  function handleForm(formEvent){
    formEvent.preventDefault();
    if (!selectedFile) {
      setMessage("No file selected");
      setType("alert"); // Set type to alert
      return;
    }
    if (!title || !description) {
      setMessage("Please provide both title and description");
      setType("alert"); // Set type to alert
      return;
    }
    // Add upload logic here
    setUploading(true);
    setMessage("Uploading...");
    setType("info"); // Set type to info

    // Simulate upload progress
    setTimeout(() => {
      setProgress(100);
      setUploading(false);
      setMessage("Upload successful!");
      setType("success"); // Set type to success
    }, 2000);

    // Log title and description for demonstration
    console.log("Title:", title);
    console.log("Description:", description);
  }

  function handleReset() {
    setSelectedFile(null);
    setTitle("");
    setDescription("");
    setMessage("");
    setType("");
    setProgress(0);
    setUploading(false);

    // Clear the file input field
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  // Define message styling based on the type
  const getMessageClass = () => {
    switch(type) {
      case 'success':
        return 'text-green-500';
      case 'error':
        return 'text-red-500';
      case 'alert':
        return 'text-yellow-500';
      case 'info':
        return 'text-blue-500';
      default:
        return 'text-white';
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="flex items-center justify-center text-xl mb-4 text-white">Upload Videos</h1>
      <form onSubmit={handleForm} className="space-y-4">
        <div className="flex items-center space-x-6">
          <div className="shrink-0">
            <img className="h-16 w-16 object-cover rounded-full" src={videoLogo} alt="Video logo" />
          </div>
          <label className="block w-full">
            <span className="sr-only">Choose video file</span>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm text-white mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter video title"
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm text-white mb-1">Description</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter video description"
            rows="4"
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex space-x-4">
          <Button type="submit" className="w-full" color="blue" pill={true}>
            {uploading ? "Uploading..." : "Upload"}
          </Button>
          <Button type="button" onClick={handleReset} className="w-full" color="gray" pill={true}>
            Reset
          </Button>
        </div>
        {message && <p className={getMessageClass()}>{message}</p>}
      </form>
    </div>
  );
}

export default VideoUpload;
