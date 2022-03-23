import './App.css';
import Title from "./Components/Title";
import UploadForm from "./Components/UploadForm";
import ImageGrid from "./Components/ImageGrid";
import Modal from "./Components/Modal";
import React, {useState} from "react";

function App() {
    const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;